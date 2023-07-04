// Componente MovieItem

import React from 'react';
import axios from 'axios';

function MovieItem({ movie, handleToggleViewed, handleDeleteMovie }) {
  const { id, movie_id, img_url, title, genre_name, date_added, is_viewed } = movie;

  const handleToggle = async () => {
    try {
      const updatedMovie = {
        id: movie_id, // Usamos el movie_id en lugar del id de la lista
        movie_id,
        is_viewed: !is_viewed,
        is_erased: false,
        date_added,
        user: movie.user,
      };

      await axios.put(`http://localhost:8000/api/v1/listas/${id}/`, updatedMovie);
      handleToggleViewed(id, !is_viewed);
    } catch (error) {
      console.error('Error al actualizar el atributo "is_viewed"');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/listas/${id}/`);
      handleDeleteMovie(id);
    } catch (error) {
      console.error('Error al eliminar la película');
    }
  };

  return (
    <div className="movie-card bg-white p-4 rounded shadow">
      <img src={img_url} alt={title} className="w-full h-auto mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-2">Fecha de Agregado: {date_added}</p>
      <p className="mb-2">Género: {genre_name}</p>
      <label className="flex items-center mb-2">
        Visto:
        <input
          type="checkbox"
          checked={is_viewed}
          onChange={handleToggle}
          className="ml-2 form-toggle-switch"
        />
        <span className="form-toggle-switch-slider" />
      </label>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default MovieItem;
