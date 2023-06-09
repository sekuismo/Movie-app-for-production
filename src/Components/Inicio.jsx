import React from "react";
import { Link } from "react-router-dom";
import imagen from "../img/peli2.jpg";

const Inicio = () => {
  return (
    <div className="relative">
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-white text-5xl font-sans font-serif font-semibold">Bienvenido</div>
            <div>
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold py-2 px-4 ml-4 rounded-lg transition-colors duration-200 no-underline"
              >
                Iniciar sesión
              </Link>
              <Link
                to="/register"
                className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold py-2 px-4 ml-4 rounded-lg transition-colors duration-200 no-underline"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative">
        <img src={imagen} alt="Imagen" className="w-full h-screen object-cover" />
      </div>
      <footer className="bg-gray-800 py-4 fixed bottom-0 left-0 w-full">
  <div className="container mx-auto px-4 text-center">
    <div className="text-gray-400 text-sm flex flex-wrap justify-center items-center">
      <Link to="/condition" className="text-gray-400 hover:text-gray-200 px-2 py-1">
        Términos y condiciones
      </Link>{" "}
      <span className="text-gray-400">|</span>{" "}
      <Link to="/manual" className="text-gray-400 hover:text-gray-200 px-2 py-1">
        Manual de usuario
      </Link>{" "}
      <span className="text-gray-400">|  </span>{" "}
      <span className="text-gray-400"> Desarrollado por</span>{" "}
      <span className="text-gray-100 font-semibold px-2 py-1">
        Esteban Muñoz y María Paz Valenzuela
      </span>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Inicio;