import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SesionContext from '../context/SesionContext';
import LoginNavBar from './LoginNavBar';

function MovieList() {
  const [userInfo, setUserInfo] = useState(null);
  const { sesionInfo } = useContext(SesionContext); // Obtener sesionInfo del contexto

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
  

  return (
    <div>
      <LoginNavBar username={userInfo ? userInfo.username : ''}    />
      <h1>Lista de las películas guardadas</h1>
      {userInfo ? (
        <div>
          <h2>Esta es tu lista de peliculas</h2>
          <p>ID: {userInfo.id}</p>
          <p>Username: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
          <p>Avatar: {userInfo.avatar}</p>
          <p>Country: {userInfo.country}</p>
          <p>Date Added: {userInfo.date_added}</p>
          <p>Movie Lists: {userInfo.movie_lists}</p>
        </div>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
}

export default MovieList;
