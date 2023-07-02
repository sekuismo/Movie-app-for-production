import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SesionContext from "../context/SesionContext";

function LoginNavBar() {
  const [username, setUsername] = useState("");
  const { sesionInfo } = useContext(SesionContext);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/users/${sesionInfo.user_id}`
        );
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error al obtener el nombre de usuario");
      }
    };

    if (sesionInfo && sesionInfo.user_id) {
      fetchUsername();
    }
  }, [sesionInfo]);

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-white text-5xl font-sans font-serif font-semibold">
              {`Bienvenido/a ${username}`}
            </div>
            <div>
              <Link
                to="/movieform"
                className="text-gray-300 hover:text-white text-xl font-semibold py-2 px-4 ml-4 transition-colors duration-200"
              >
                Buscar películas
              </Link>
              <Link
                to="/movielist"
                className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold py-2 px-4 ml-4 rounded-lg transition-colors duration-200"
              >
                Favoritas
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LoginNavBar;
