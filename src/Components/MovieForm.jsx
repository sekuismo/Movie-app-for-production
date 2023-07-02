import { useEffect, useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import LoginNavBar from "./LoginNavBar";


function MovieForm() {
  function randomPage(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const [formValues, setFormValues] = useState([]);
  const [movies, setMovies] = useState({ results: [] });
  const API =
    "https://api.themoviedb.org/3/discover/movie?api_key=4e6dcbd1460fb66d632cfc4c69445c30";
  const streaming = (id, region) => {
    return `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=4e6dcbd1460fb66d632cfc4c69445c30&watch_region=${region}`;
  };

  useEffect(() => {
    const getData = async () => {
      let page = randomPage(1, 5);
      const response = await axios.get(
        API +
          "&with_genres=" +
          formValues.genre +
          "&year=" +
          formValues.year +
          "&with_original_language=" +
          formValues.language
      );

      const data = await response.data;
      console.log(data);
      setMovies(data);
    };
    getData();
    console.log(movies);
  }, [formValues]);
  return (
    <>
    <LoginNavBar/>
<h1 className="text-5xl  font-extrabold text-center font-bold text-dark-blue-700 m-3 p-3">
  Busca una película <span role="img" aria-label="Film and popcorn">🎬🍿</span>
</h1>
      <div className="container">
        <Formik
          initialValues={{
            genre: "",
            year: "",
            language: "",
          }}
          onSubmit={(valores, { resetForm }) => {
            setFormValues(valores);

            // resetForm()
          }}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="genre"
                  className="block text-gray-700 font-bold mb-2">
                  Género
                </label>
                <select
                  id="genre"
                  value={values.genre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Selecciona un género</option>
                  <option value="28">Acción</option>
                  <option value="12">Aventura</option>
                  <option value="16">Animación</option>
                  <option value="35">Comedia</option>
                  <option value="80">Crimen</option>
                  <option value="99">Documental</option>
                  <option value="18">Drama</option>
                  <option value="10751">Familiar</option>
                  <option value="14">Fantasía</option>
                  <option value="36">Historia</option>
                  <option value="27">Terror</option>
                  <option value="10402">Musica</option>
                  <option value="9648">Misterio</option>
                  <option value="10749">Romance</option>
                  <option value="878">Ciencia ficción</option>
                  <option value="10770">TV Movie</option>
                  <option value="53">Thriller</option>
                  <option value="10752">Guerra</option>
                  <option value="37">Western</option>
                </select>
              </div>
              {errors.genre && <div>{errors.genre}</div>}
              <div className="mb-4">
                <label
                  htmlFor="year"
                  className="block text-gray-700 font-bold mb-2">
                  Año
                </label>
                <input
                  type="number"
                  id="year"
                  placeholder="Selecciona un año"
                  value={values.year}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="language"
                  className="block text-gray-700 font-bold mb-2">
                  Idioma
                </label>
                <select
                  id="language"
                  value={values.language}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Seleccione un idioma</option>
                  <option value="es">Español</option>
                  <option value="it">Italiano</option>
                  <option value="en">Inglés</option>
                  <option value="ja">Japonés</option>
                  <option value="de">Alemán</option>
                  <option value="fr">Francés</option>
                  <option value="sr">Serbio</option>
                  <option value="th">Tailandés</option>
                  <option value="ko">Coreano</option>
                  <option value="ru">Ruso</option>
                  <option value="pt">Portugués</option>
                  <option value="pl">Polaco</option>
                  <option value="hi">Hindi</option>
                  <option value="he">Hebreo</option>
                  <option value="hy">Armenio</option>
                  <option value="fa">Persa</option>
                  <option value="id">Indonesio</option>
                  <option value="jv">Javanés</option>
                  <option value="nl">Holandés</option>
                  <option value="tr">Turco</option>
                  <option value="zh">Chino</option>
                </select>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-info "
                >
                  Buscar
                </button>
              </div>
            </form>
          )}
        </Formik>
        <div>
          <div className="grid grid-cols-4 gap-4">
            {movies.results.length <= 0 ? (
              <div className="col-span-4 flex justify-center">
            <div className="max-w-sm text-center rounded overflow-hidden shadow-lg bg-blue-100">
          <p className="text-lg font-bold font-extrabold mb-2 text-blue-520">
        Lo sentimos... <br></br> No se encontró ningún resultado
        <img
            src={"https://st2.depositphotos.com/1001911/7684/v/950/depositphotos_76840879-stock-illustration-depressed-emoticon.jpg" }
            alt=""
            className="w-full h-auto mb-2 hover:opacity-70 cursor-pointer"
          />
          </p>
          </div>
          </div>
        ) : (
         movies.results.map((movie) => {
          return (
          <div key={movie.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <p className="text-lg font-bold mb-2 block text-center">{movie.original_title}</p>
          <img
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            alt=""
            className="w-full h-auto mb-2 hover:opacity-70 cursor-pointer"
          />
          <p className="italic font-semibold py-4 px-2">{movie.overview}</p>
          <a href={streaming(movie.id, 'CL')} className="text-blue-500 hover:text-blue-700 block text-center">¿Donde ver la pelicula?</a>
          <Link to='movielist'>
          <div className="flex justify-center mt-4">
      <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
        Añadir a lista
      </button>
     
    </div>
    </Link>
        </div>
      );}))}  
      </div>
        </div>
   </div>
    </>
  );
}


export default MovieForm;
