import React from "react";
import { Link } from "react-router-dom";
import imagen from "../img/peli2.jpg";

const NavbarRegistro = () => {
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
    </div>
  );
};

export default NavbarRegistro;