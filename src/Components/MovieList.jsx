// Componente MovieList

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SesionContext from '../context/SesionContext';
import LoginNavBar from './LoginNavBar';
import MovieItem from './MovieItem';

function MovieList() {
  const [userInfo, setUserInfo] = useState(null);
  const { sesionInfo } = useContext(SesionContext);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`https://movies-app-backend-4a4q.onrender.com/api/v1/users/${sesionInfo.user_id}`);
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
      await axios.delete(`https://movies-app-backend-4a4q.onrender.com/api/v1/listas/${movieId}/`);
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        movie_lists: prevUserInfo.movie_lists.filter((movie) => movie.id !== movieId),
      }));
    } catch (error) {
      console.error('Error al eliminar la película');
    }
  };

  const handleToggleViewed = (movieId, isViewed) => {
    setUserInfo((prevUserInfo) => {
      const updatedMovieLists = prevUserInfo.movie_lists.map((movie) => {
        if (movie.id === movieId) {
          return { ...movie, is_viewed: isViewed };
        }
        return movie;
      });

      return {
        ...prevUserInfo,
        movie_lists: updatedMovieLists,
      };
    });
  };
  return (
    <div>
      <LoginNavBar username={userInfo ? userInfo.username : ''} />
      <h1 className="text-3xl font-bold mb-4 text-center">Lista de las películas guardadas</h1>

      <div className="grid grid-cols-4 gap-3">
        {userInfo && userInfo.movie_lists ? (
          userInfo.movie_lists.map((movie) => (
            <div>
              {console.log(movie.movie)}
            <MovieItem
            key={movie.id} 
            movie={movie}
            handleToggleViewed={handleToggleViewed}
            handleDeleteMovie={handleDeleteMovie}
            />
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
