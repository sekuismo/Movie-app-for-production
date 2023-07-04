import React from 'react';

function MovieCard({ movie, handleToggleViewed, handleDeleteMovie }) {
  return (
    <div className="movie-card bg-white p-4 rounded shadow">
      <img src={movie.movie.img_url} alt={movie.movie.title} className="w-full h-auto mb-4" />
      <h2 className="text-xl font-bold mb-2">{movie.movie.title}</h2>
      <p className="mb-2">Fecha de Agregado: {movie.date_added}</p>
      <p className="mb-2">Género: {movie.movie.genre_name}</p>

    </div>
  );
}

export default MovieCard;
