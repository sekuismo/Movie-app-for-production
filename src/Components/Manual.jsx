import React from "react";

const Manual = () => {
  return (
    <div>
      <div className="bg-gray-200 bg-opacity-50 min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Manual de Usuario - Aplicación de Recomendación de Películas</h2>
          <p className="text-gray-700 italic">
            ¡Bienvenido a la aplicación de recomendación de películas! Este manual te proporcionará instrucciones detalladas sobre cómo utilizar todas las funcionalidades de la aplicación.
            <br /><br />
            <strong>Contenido</strong>
            <br /><br />
            1. Registro e inicio de sesión
            <br /><br />
            2. Llenado del formulario de recomendación
            <br /><br />
            3. Visualización de películas recomendadas
            <br /><br />
            4. Detalles de la película
            <br /><br />
            5. Lista para ver más tarde
            <br /><br />
            6. Seguimiento de visualización
            <br /><br />
            <strong>1. Registro e inicio de sesión</strong>
            <br /><br />
            Para comenzar a utilizar la aplicación, necesitarás registrarte y crear una cuenta personalizada. Sigue estos pasos:
            <br /><br />
            - Accede a la página de inicio de la aplicación.
            <br /><br />
            - Haz clic en el botón "Registrarse" para acceder al formulario de registro.
            <br /><br />
            - Completa todos los campos requeridos del formulario de registro con información precisa y actualizada.
            <br /><br />
            - Haz clic en el botón "Registrarse" para crear tu cuenta.
            <br /><br />
            Una vez que hayas creado tu cuenta, podrás iniciar sesión siguiendo estos pasos:
            <br /><br />
            - En la página de inicio, haz clic en el botón "Iniciar sesión".
            <br /><br />
            - Ingresa tu nombre de usuario y contraseña en los campos correspondientes del formulario de inicio de sesión.
            <br /><br />
            - Haz clic en el botón "Iniciar sesión" para acceder a tu cuenta.
            <br /><br />
            <strong>2. Llenado del formulario de recomendación</strong>
            <br /><br />
            Una vez que hayas iniciado sesión, podrás utilizar el formulario de recomendación para recibir películas recomendadas basadas en tus preferencias. Sigue estos pasos:
            <br /><br />
            - Accede a la página principal de la aplicación después de iniciar sesión.
            <br /><br />
            - En el formulario de recomendación, selecciona el género, año e idioma de tu preferencia utilizando las opciones proporcionadas.
            <br /><br />
            - Una vez que hayas seleccionado tus preferencias, haz clic en el botón "Buscar" para generar la lista de películas recomendadas.
            <br /><br />
            <strong>3. Visualización de películas recomendadas</strong>
            <br /><br />
            Después de enviar el formulario de recomendación, se generará una lista de películas recomendadas que se ajustan a tus preferencias. Sigue estos pasos para ver las películas recomendadas:
            <br /><br />
            - En la página principal de la aplicación, encontrarás la lista de películas recomendadas.
            <br /><br />
            - Explora la lista de películas y lee los títulos y sinopsis para encontrar una película de tu interés.
            <br /><br />
            <strong>4. Detalles de la película</strong>
            <br /><br />
            Si deseas añadir la pelicula a tus favoritas, presiona el boton "añadir a lista" para que este en tu lista personalizada.
            <br /><br />
            - Haz clic en el enlace ¿Dónde ver película? y te redirigirá a una página en donde puedes ver en que plataforma está la pelicula.
            <br /><br />
            <strong>5. Seguimiento de visualización</strong>
            <br /><br />
            Si has visto una película de tu lista, puedes marcarla como vista. Sigue estos pasos:
            <br /><br />
            - En la página de detalles de las películas guardadas, busca la opción "Marcar como vista".
            <br /><br />
            - Selecciona si has visto la película completamente o no has visto.
            <br /><br />
            ¡Eso es todo! Ahora estás listo para utilizar todas las funcionalidades de la aplicación de recomendación de películas. ¡Disfruta de tus películas recomendadas y mantén un seguimiento de tus preferencias cinematográficas!
          </p>
        </div>
      </div>
      <footer className="bg-gray-200 py-2 fixed bottom-0 left-0 w-full">
        <div className="container mx-auto px-4 text-center">
          <div className="text-gray-600 text-sm">
             Desarrollado por{" "}
            <span className="font-semibold">Esteban Muñoz y María Paz Valenzuela</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Manual;
