import React, { useEffect, useContext } from "react";
import axios from "axios";
import SesionContext from "../context/SesionContext";

function AddToList({ movie }) {
    const { sesionInfo } = useContext(SesionContext)

  const addToMyList = async () => {
    console.log(sesionInfo.user_id)
    console.log("este es el USER ID ARRIBA ARRIBA")
    console.log("este es el USER ID ARRIBA ARRIBA")
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=4e6dcbd1460fb66d632cfc4c69445c30`
      );

      const movieData = response.data;

      // Crear el objeto con los datos para enviar en la solicitud POST
      const postData = {
        movie_id: movieData.id,
        title: movieData.title,
        description: movieData.overview,
        year: new Date(movieData.release_date).getFullYear(),
        language: movieData.original_language,
        genre_name: movieData.genres[0]?.name || 'NO',
        genre_id: movieData.genres[0]?.id || 'NO',
        img_url: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
        url: `https://www.themoviedb.org/movie/${movieData.id}`,
      };

      // Realizar la solicitud POST a la API para agregar la película a la base de datos
      const postResponse = await axios.post(
        "http://localhost:8000/api/v1/peliculas/",
        postData
      );

      console.log(
        "La película se ha guardado en la base de datos:",
        postResponse.data
      );

      // Obtener el ID de la película agregada
      const addedMovieId = postResponse.data.movie_id;

      // Crear el objeto para agregar la película a la lista de películas del usuario
      const userMovieData = {
        movie_id: addedMovieId,
        is_viewed: false,
        is_erased: false,
        user: sesionInfo.user_id,
      };

      // Realizar la solicitud POST a la API para agregar la película a la lista del usuario
      const userPostResponse = await axios.post(
        "http://localhost:8000/api/v1/listas/",
        userMovieData
      );

      console.log(
        "La película se ha agregado a la lista del usuario:",
        userPostResponse.data
      );
    } catch (error) {
      console.error("Error al realizar la operación:", error);
    }
  };

  return (
    <div>
      <button
        onClick={addToMyList} // Agrega un controlador de evento onClick
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
      >
        Añadir a lista
      </button>
    </div>
  );
}

export default AddToList;
