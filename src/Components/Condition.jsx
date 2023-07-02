import React from "react";

const Condition = () => {
  return (
    <div>
    <div className="bg-gray-200 bg-opacity-50 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Términos y Condiciones</h2>
        <p className="text-gray-700 italic">
          Términos y Condiciones de uso del servicio de recomendación de películas
          <br /><br />
          Fecha de entrada en vigor: 03-07-2023
          <br /><br />
          Bienvenido al servicio de recomendación de películas. Antes de utilizar este servicio, lea atentamente estos Términos y Condiciones, ya que constituyen un acuerdo legal entre usted y PlusPeli. Al acceder y utilizar este servicio, acepta cumplir y estar sujeto a estos Términos y Condiciones.
          <br /><br />
          Uso del Servicio
          <br /><br />
          1.1 Registro: Para utilizar el servicio de recomendación de películas, es necesario crear una cuenta personalizada. Al registrarse, se le solicitará proporcionar información precisa y actualizada. Usted es responsable de mantener la confidencialidad de su cuenta y de toda la actividad que ocurra bajo su nombre de usuario y contraseña.
          <br /><br />
          1.2 Uso Aceptable: Al utilizar este servicio, acepta utilizarlo únicamente con fines legales y de acuerdo con estos Términos y Condiciones. Se prohíbe el uso no autorizado, ilegal o inapropiado del servicio, incluyendo, entre otros, lo siguiente:
          <br /><br />
          - Publicar, transmitir o compartir contenido que sea ilegal, difamatorio, obsceno, ofensivo, fraudulento o que viole los derechos de propiedad intelectual de terceros.
          <br /><br />
          - Acceder o intentar acceder a cuentas de otros usuarios, sistemas informáticos o redes conectadas al servicio sin autorización.
          <br /><br />
          - Utilizar el servicio para enviar correo no solicitado o no autorizado (spam).
          <br /><br />
          - Realizar cualquier acción que pueda dañar, sobrecargar o afectar negativamente la funcionalidad del servicio.
          <br /><br />
          1.3 Información del Usuario: Al utilizar este servicio, usted otorga a PlusPeli el derecho a recopilar y utilizar la información proporcionada durante el registro y el uso del servicio de acuerdo con la Política de Privacidad.
          <br /><br />
          Funcionalidades del Servicio
          <br /><br />
          2.1 Recomendaciones Personalizadas: El servicio de recomendación de películas le permite completar un formulario con el género, año e idioma de su preferencia. Basado en esta información, el servicio generará una lista de películas recomendadas para usted.
          <br /><br />
          2.2 Detalles de la Película: El servicio le proporcionará información detallada sobre cada película recomendada, incluyendo su título, sinopsis, reparto, calificaciones y opciones de visualización disponibles.
          <br /><br />
          2.3 Lista para Ver Más Tarde: El servicio le permitirá agregar películas a una lista personalizada para ver más tarde. Esta lista estará disponible en su cuenta y podrá acceder a ella en cualquier momento.
          <br /><br />
          2.4 Seguimiento de Visualización: El servicio le permitirá marcar las películas que ha visto, así como indicar si las ha visto completamente o parcialmente.
          <br /><br />
          2.5 Enlaces a Plataformas Externas: El servicio proporcionará enlaces a plataformas externas donde se pueda ver la película recomendada. PlusPeli no es responsable del contenido, la disponibilidad o el funcionamiento de estas plataformas externas.
          <br /><br />
          Limitación de Responsabilidad
          <br /><br />
          3.1 Exactitud de las Recomendaciones: El servicio de recomendación de películas se basa en algoritmos y preferencias proporcionadas por el usuario. Si bien se hace todo lo posible para ofrecer recomendaciones precisas, PlusPeli no garantiza la exactitud, integridad o actualidad de las recomendaciones.
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

export default Condition;