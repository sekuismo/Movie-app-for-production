import React from "react";
import { Link } from "react-router-dom";


const Inicio = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-white text-5xl font-sans font-serif font-semibold">Bienvenido</div>
          <div>
          <Link  to="/login" className="text-gray-300 hover:text-white text-xl font-semibold py-2 px-4 ml-4 transition-colors duration-200">
        Iniciar sesión
            </Link>
            <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold py-2 px-4 ml-4 rounded-lg transition-colors duration-200" >
        Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Inicio;