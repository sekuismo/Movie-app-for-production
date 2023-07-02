import React from "react";
import { useState } from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Inicio from "./Inicio";

const Registro = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const formData = {
        name: values.nombre,
        last_name: values.apellido,
        username: values.username,
        email: values.email,
        avatar: "AVATAR NOT HERE FOR NOW",
        country: values.pais,
        password: values.password,
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/",
        formData
      );
      console.log(response.data);
      setShowModal(true);
    } catch (error) {
      console.error(error);
      // Resto del código...
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/login");
  };

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      username: "",
      email: "",
      avatar: "",
      pais: "",
      password: "",
      confirmarPassword: "",
    },
    validationSchema: Yup.object({
      // Resto de las validaciones
      confirmarPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir")
        .required("Debe confirmar su contraseña"),
    }),
    onSubmit: handleSubmit,
    validate: (values) => {
      const errors = {};
      if (!values.nombre) {
        errors.nombre = "Campo requerido";
      }
      if (!values.apellido) {
        errors.apellido = "Campo requerido";
      }
      if (!values.username) {
        errors.username = "Campo requerido";
      }
      if (!values.email) {
        errors.email = "Campo requerido";
      }
      if (!values.pais) {
        errors.pais = "Campo requerido";
      }
      if (!values.password) {
        errors.password = "Campo requerido";
      }
      return errors;
    },
  });

  let paisesInvertidos = {
    XX: "Seleccione un país 🌐",
    AF: "Afganistán",
    AL: "Albania",
    DZ: "Argelia",
    AD: "Andorra",
    AO: "Angola",
    AG: "Antigua y Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaiyán",
    BS: "Bahamas",
    BH: "Baréin",
    BD: "Bangladés",
    BB: "Barbados",
    BY: "Bielorrusia",
    BE: "Bélgica",
    BZ: "Belice",
    BJ: "Benín",
    BT: "Bután",
    BO: "Bolivia",
    BA: "Bosnia y Herzegovina",
    BW: "Botsuana",
    BR: "Brasil",
    BN: "Brunéi",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Camboya",
    CM: "Camerún",
    CA: "Canadá",
    CV: "Cabo Verde",
    CF: "República Centroafricana",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CO: "Colombia",
    KM: "Comoras",
    CG: "Congo",
    CR: "Costa Rica",
    HR: "Croacia",
    CU: "Cuba",
    CY: "Chipre",
    CZ: "República Checa",
    DK: "Dinamarca",
    DJ: "Yibuti",
    DM: "Dominica",
    DO: "República Dominicana",
    EC: "Ecuador",
    EG: "Egipto",
    SV: "El Salvador",
    GQ: "Guinea Ecuatorial",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Etiopía",
    FJ: "Fiyi",
    FI: "Finlandia",
    FR: "Francia",
    GA: "Gabón",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Alemania",
    GH: "Ghana",
    GR: "Grecia",
    GD: "Granada",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bisáu",
    GY: "Guyana",
    HT: "Haití",
    HN: "Honduras",
    HU: "Hungría",
    IS: "Islandia",
    IN: "India",
    ID: "Indonesia",
    IR: "Irán",
    IQ: "Iraq",
    IE: "Irlanda",
    IL: "Israel",
    IT: "Italia",
    JM: "Jamaica",
    JP: "Japón",
    JO: "Jordania",
    KZ: "Kazajistán",
    KE: "Kenia",
    KI: "Kiribati",
    KW: "Kuwait",
    KG: "Kirguistán",
    LA: "Laos",
    LV: "Letonia",
    LB: "Líbano",
    LS: "Lesoto",
    LR: "Liberia",
    LY: "Libia",
    LI: "Liechtenstein",
    LT: "Lituania",
    LU: "Luxemburgo",
    MG: "Madagascar",
    MW: "Malaui",
    MY: "Malasia",
    MV: "Maldivas",
    ML: "Malí",
    MT: "Malta",
    MH: "Islas Marshall",
    MR: "Mauritania",
    MU: "Mauricio",
    MX: "México",
    FM: "Micronesia",
    MD: "Moldavia",
    MC: "Mónaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MA: "Marruecos",
    MZ: "Mozambique",
    MM: "Myanmar (Birmania)",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Países Bajos",
    NZ: "Nueva Zelanda",
    NI: "Nicaragua",
    NE: "Níger",
    NG: "Nigeria",
    KP: "Corea del Norte",
    MK: "Macedonia del Norte",
    NO: "Noruega",
    OM: "Omán",
    PK: "Pakistán",
    PW: "Palaos",
    PA: "Panamá",
    PG: "Papúa Nueva Guinea",
    PY: "Paraguay",
    PE: "Perú",
    PH: "Filipinas",
    PL: "Polonia",
    PT: "Portugal",
    QA: "Catar",
    RO: "Rumania",
    RU: "Rusia",
    RW: "Ruanda",
    KN: "San Cristóbal y Nieves",
    LC: "Santa Lucía",
    VC: "San Vicente y las Granadinas",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Santo Tomé y Príncipe",
    SA: "Arabia Saudita",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leona",
    SG: "Singapur",
    SK: "Eslovaquia",
    SI: "Eslovenia",
    SB: "Islas Salomón",
    SO: "Somalia",
    ZA: "Sudáfrica",
    KR: "Corea del Sur",
    SS: "Sudán del Sur",
    ES: "España",
    LK: "Sri Lanka",
    SD: "Sudán",
    SR: "Surinam",
    SZ: "Eswatini",
    SE: "Suecia",
    CH: "Suiza",
    SY: "Siria",
    TW: "Taiwán",
    TJ: "Tayikistán",
    TZ: "Tanzania",
    TH: "Tailandia",
    TL: "Timor Oriental",
    TG: "Togo",
    TO: "Tonga",
    TT: "Trinidad y Tobago",
    TN: "Túnez",
    TR: "Turquía",
    TM: "Turkmenistán",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ucrania",
    AE: "Emiratos Árabes Unidos",
    GB: "Reino Unido",
    US: "Estados Unidos",
    UY: "Uruguay",
    UZ: "Uzbekistán",
    VU: "Vanuatu",
    VA: "Ciudad del Vaticano",
    VE: "Venezuela",
    VN: "Vietnam",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabue",
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Lógica de carga de imagen aquí...
  };

  return (
    <div>
      <div>
        {showModal && (
          <div className="fixed z-10 inset-0 flex items-center justify-center overflow-y-auto bg-gray-500 bg-opacity-75">
            <div className="bg-white rounded-lg text-center p-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4">
                <svg
                  className="h-6 w-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                Registro exitoso
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Tu cuenta ha sido creada exitosamente.
              </p>
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                onClick={handleCloseModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-md mx-auto mt-8 bg-gray-300 bg-opacity-50">
        <div className="max-w-md mx-auto mt-8 bg-gray-300 bg-opacity-50">
          <h2 className="text-center text-2xl font-bold mb-4">
            Registrar usuario
          </h2>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Usuario
              </label>
              <input
                className={`border-b-2 border-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formik.touched.nombre && formik.errors.nombre
                    ? "border-red-500"
                    : ""
                }`}
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Ingrese su nombre de usuario"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombre}
              />
              {formik.touched.nombre && formik.errors.nombre && (
                <p className="text-red-500">{formik.errors.nombre}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="text"
              >
                Nombre
              </label>
              <input
                className={`border-b-2 border-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formik.touched.username && formik.errors.username
                    ? "border-red-500"
                    : ""
                }`}
                id="text"
                name="username"
                type="text"
                placeholder="Ingrese su nombre"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username && (
                <p className="text-red-500">{formik.errors.username}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="apellido"
              >
                Apellido
              </label>
              <input
                className={`border-b-2 border-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formik.touched.apellido && formik.errors.apellido
                    ? "border-red-500"
                    : ""
                }`}
                id="apellido"
                name="apellido"
                type="text"
                placeholder="Ingrese su apellido"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apellido}
              />
              {formik.touched.apellido && formik.errors.apellido && (
                <p className="text-red-500">{formik.errors.apellido}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`border-b-2 border-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
                id="email"
                name="email"
                type="email"
                placeholder="Ingrese su email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500">{formik.errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className={`border-b-2 border-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                }`}
                id="password"
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500">{formik.errors.password}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmarPassword"
              >
                Confirmar Contraseña
              </label>
              <input
                className={`border-b-2 border-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formik.touched.confirmarPassword &&
                  formik.errors.confirmarPassword
                    ? "border-red-500"
                    : ""
                }`}
                id="confirmarPassword"
                name="confirmarPassword"
                type="password"
                placeholder="Confirme su contraseña"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmarPassword}
              />
              {formik.touched.confirmarPassword &&
                formik.errors.confirmarPassword && (
                  <p className="text-red-500">
                    {formik.errors.confirmarPassword}
                  </p>
                )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pais"
              >
                País
              </label>
              <select
                className={`border-b-2 border-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formik.touched.pais && formik.errors.pais
                    ? "border-red-500"
                    : ""
                }`}
                id="pais"
                name="pais"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pais}
              >
                {Object.entries(paisesInvertidos).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
              {formik.touched.pais && formik.errors.pais && (
                <p className="text-red-500">{formik.errors.pais}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-customColor hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="bg-gray-200 py-4 fixed bottom-0 left-0 w-full">
        <div className="container mx-auto px-4 text-center">
          <div className="text-gray-600 text-sm">
            <Link to="/condition" className="text-gray-600 hover:text-gray-800">
              Términos y condiciones
            </Link>{" "}
            |{" "}
            <Link to="/manual" className="text-gray-600 hover:text-gray-800">
              Manual de usuario
            </Link>{" "}
            | Desarrollado por{" "}
            <span className="font-semibold">
              Esteban Muñoz y María Paz Valenzuela
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

//aquí hay que modificar para que redirija a la vista de usuario logueado

export default Registro;
