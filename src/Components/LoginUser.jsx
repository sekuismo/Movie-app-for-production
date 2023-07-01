import React from "react";

const LoginUser = () => {
        return (
          <div className="max-w-md mx-auto mt-8 bg-gray-300 bg-opacity-50">
            <h2 className="text-center text-2xl font-bold mb-4">Iniciar sesión</h2>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre de usuario
                </label>
                <input
                  className="border-b-2 border-red-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contrasena">
            Contraseña
          </label>
          <input
            className="border-b-2 border-red-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
          />
        </div>

              <div className="flex items-center justify-center">
                <button
                  className="bg-customColor hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        );
      };
      
  
  export default LoginUser;