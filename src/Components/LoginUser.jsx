import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import SesionContext from '../context/SesionContext';
import { Link } from 'react-router-dom';

const LoginUser = () => {
  const navigate = useNavigate();
  const { setSesionInfo } = useContext(SesionContext); // Obtener setSesionInfo del contexto

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.username) {
        errors.username = "Campo requerido";
      }

      if (!values.password) {
        errors.password = "Campo requerido";
      }

      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/login/",
          values
        );
        console.log(response.data);

        if (response.data.access && response.data.user_id) {
          setSesionInfo(response.data); // Cambiar el valor de sesionInfo en el contexto
          localStorage.setItem("sesionInfo", JSON.stringify(response.data)); // Guardar en el almacenamiento local
          navigate("/movieform");
        } else {
          formik.setErrors({
            password: "Usuario/contraseña inválidos",
          });
        }
      } catch (error) {
        formik.setErrors({
          password: "Usuario/contraseña inválidos",
        });
      }

      setSubmitting(false);
    },
  });

  return (
    <div className="max-w-md mx-auto mt-8 bg-gray-300 bg-opacity-50">
      <h2 className="text-center text-2xl font-bold mb-4">Iniciar sesión</h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Nombre de usuario
          </label>
          <input
            className={`border-b-2 border-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formik.errors.username ? "border-red-500" : ""
            }`}
            id="username"
            name="username"
            type="text"
            placeholder="Ingrese su nombre"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.username}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className={`border-b-2 border-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formik.errors.password ? "border-red-500" : ""
            }`}
            id="password"
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/movieform"
            className="bg-customColor hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={formik.isSubmitting}
          >
            Ingresar
          </Link>
        </div>


        {formik.status && (
          <p className="text-red-500 text-sm mt-1">{formik.status}</p>
        )}


      </form>

      <footer className="bg-gray-200 py-4 fixed bottom-0 left-0 w-full">
        <div className="container mx-auto px-4 text-center">
          <div className="text-gray-600 text-sm">
            <Link to="/condition" className="text-gray-600 hover:text-gray-800">
              Términos y condiciones
            </Link>{" "}
            |{" "}
            <Link to="/manual" className="text-gray-600 hover:text-gray-800">
              Manual de usuario
            </Link>
            {" "} | Desarrollado por{" "}
            <span className="font-semibold">Esteban Muñoz y María Paz Valenzuela</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginUser;
