import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SesionContext from "../context/SesionContext";
import LogoutButton from "./LogoutButton";

function LoginNavBar() {
  const [username, setUsername] = useState("");
  const { sesionInfo, setSesionInfo } = useContext(SesionContext);

  useEffect(() => {
    const storedSesionInfo = localStorage.getItem("sesionInfo");

    if (storedSesionInfo) {
      const parsedSesionInfo = JSON.parse(storedSesionInfo);
      setSesionInfo(parsedSesionInfo);
    }
  }, [setSesionInfo]);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(
          `https://movies-app-backend-4a4q.onrender.com/api/v1/users/${sesionInfo.user_id}`
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
            <div className="text-white text-4xl font-serif font-semibold font-thin tracking-wide">
              {`Bienvenido/a ${username}!`}
            </div>
            <div>
              <Link
                to="/movieform"
                className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold py-2 px-4 ml-4 rounded-lg transition-colors duration-200 no-underline"
              >
                Buscar películas
              </Link>
              <Link
                to="/movielist"
                className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold py-2 px-4 ml-4 rounded-lg transition-colors duration-200 no-underline"
              >
                Favoritas
              </Link>
              <Link>
                <LogoutButton   />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LoginNavBar;
