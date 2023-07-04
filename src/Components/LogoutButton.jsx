import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      // Obtén el Bearer Token del Local Storage
      const user = JSON.parse(localStorage.getItem('sesionInfo'));
      const token = user.access;

      // Realiza la solicitud POST para cerrar sesión
      const response = await fetch('http://127.0.0.1:8000/api/v1/logout/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Vacía el valor del Local Storage
        localStorage.removeItem('sesionInfo');

        // Navega a la ruta vacía
        navigate('/');
      } else {
        // Maneja el caso en el que ocurra un error en la solicitud POST
        console.error('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }

    setIsLoading(false);
  };

  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold py-2 px-4 ml-4 rounded-lg transition-colors duration-200 no-underline" onClick={handleLogout} disabled={isLoading}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
