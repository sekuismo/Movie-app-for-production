import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MovieList from './MovieList';

const LoginUser = () => {
  const navigate = useNavigate();
  const [sesionInfo, setSesionInfo] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:8000/api/v1/login/', values);
        console.log(response.data);
        setSesionInfo(response.data);
        navigate('/movieform');
      } catch (error) {
        console.error('Error: Usuarios inválidos');
      }
    },
  });

  return (
    <div className="max-w-md mx-auto mt-8 bg-gray-300 bg-opacity-50">
      <h2 className="text-center text-2xl font-bold mb-4">Iniciar sesión</h2>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Nombre de usuario
          </label>
          <input
            className="border-b-2 border-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Ingrese su nombre"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="border-b-2 border-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-customColor hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Ingresar
          </button>
        </div>
      </form>
      {/* Enviar sesionInfo a otro componente */}
      {sesionInfo && (
        <MovieList sesionInfo={sesionInfo} />
      )}
    </div>
  );
};

export default LoginUser;