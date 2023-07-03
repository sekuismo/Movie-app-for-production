import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SesionContext from '../context/SesionContext';
import LoginNavBar from './LoginNavBar';

function MovieList() {
  const [userInfo, setUserInfo] = useState(null);
  const { sesionInfo } = useContext(SesionContext);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/users/${sesionInfo.user_id}`);
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error al obtener la información del usuario');
      }
    };

    if (sesionInfo && sesionInfo.user_id) {
      fetchUserInfo();
    }
  }, [sesionInfo]);

  const handleDeleteMovie = async (movieId) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/listas/${userInfo.id}/${movieId}/`);
      // Actualizar el estado para refrescar la lista de películas
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        movie_lists: prevUserInfo.movie_lists.filter((movie) => movie.movie.id !== movieId),
      }));
    } catch (error) {
      console.error('Error al eliminar la película');
    }
  };

  const handleToggleViewed = async (movieId, isViewed) => {
    try {
      const movieIndex = userInfo.movie_lists.findIndex((movie) => movie.movie.id === movieId);
      if (movieIndex === -1) {
        console.error('No se encontró la película correspondiente al ID');
        return;
      }

      const updatedMovie = {
        ...userInfo.movie_lists[movieIndex],
        is_viewed: isViewed,
      };

      await axios.put(`http://localhost:8000/api/v1/listas/${updatedMovie.id}/`, updatedMovie);
      // Actualizar el estado para refrescar la lista de películas
      setUserInfo((prevUserInfo) => {
        const updatedMovieLists = [...prevUserInfo.movie_lists];
        updatedMovieLists[movieIndex] = updatedMovie;
        return {
          ...prevUserInfo,
          movie_lists: updatedMovieLists,
        };
      });
    } catch (error) {
      console.error('Error al actualizar el atributo "is_viewed"');
    }
  };

  return (
    <div>
      <LoginNavBar username={userInfo ? userInfo.username : ''} />
      <h1>Lista de las películas guardadas</h1>
      <div className="grid grid-cols-4 gap-3">
        {userInfo && userInfo.movie_lists ? (
          userInfo.movie_lists.map((movie) => (
            <div key={movie.id} className="movie-card bg-white p-4 rounded shadow">
              <img src={movie.movie.img_url} alt={movie.movie.title} className="w-full h-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">{movie.movie.title}</h2>
              <p className="mb-2">Fecha de Agregado: {movie.date_added}</p>
              <p className="mb-2">Género: {movie.movie.genre_name}</p>
              <label className="flex items-center mb-2">
                Visto:
                <input
                  type="checkbox"
                  checked={movie.is_viewed}
                  onChange={(e) => handleToggleViewed(movie.movie.id, e.target.checked)}
                  className="ml-2 form-toggle-switch"
                />
                <span className="form-toggle-switch-slider" />
              </label>

            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;
