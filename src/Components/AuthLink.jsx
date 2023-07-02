import React from "react";
import { Link } from "react-router-dom";

const AuthLinks = () => {
  return (
    <div>
      <Link className="text-gray-300 hover:text-white text-xl font-semibold py-2 px-4 ml-4 transition-colors duration-200" to="/login">
        Iniciar sesión
      </Link>
      <Link className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold py-2 px-4 ml-4 rounded-lg transition-colors duration-200" to="/register">
        Registrarse
      </Link>
    </div>
  );
};

export default AuthLinks;