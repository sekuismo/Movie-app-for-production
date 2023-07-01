import React from "react";

const Registro = () => {
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
      
      };
    let paisesInvertidos = {
        "AF": "Afganistán",
        "AL": "Albania",
        "DZ": "Argelia",
        "AD": "Andorra",
        "AO": "Angola",
        "AG": "Antigua y Barbuda",
        "AR": "Argentina",
        "AM": "Armenia",
        "AU": "Australia",
        "AT": "Austria",
        "AZ": "Azerbaiyán",
        "BS": "Bahamas",
        "BH": "Baréin",
        "BD": "Bangladés",
        "BB": "Barbados",
        "BY": "Bielorrusia",
        "BE": "Bélgica",
        "BZ": "Belice",
        "BJ": "Benín",
        "BT": "Bután",
        "BO": "Bolivia",
        "BA": "Bosnia y Herzegovina",
        "BW": "Botsuana",
        "BR": "Brasil",
        "BN": "Brunéi",
        "BG": "Bulgaria",
        "BF": "Burkina Faso",
        "BI": "Burundi",
        "KH": "Camboya",
        "CM": "Camerún",
        "CA": "Canadá",
        "CV": "Cabo Verde",
        "CF": "República Centroafricana",
        "TD": "Chad",
        "CL": "Chile",
        "CN": "China",
        "CO": "Colombia",
        "KM": "Comoras",
        "CG": "Congo",
        "CR": "Costa Rica",
        "HR": "Croacia",
        "CU": "Cuba",
        "CY": "Chipre",
        "CZ": "República Checa",
        "DK": "Dinamarca",
        "DJ": "Yibuti",
        "DM": "Dominica",
        "DO": "República Dominicana",
        "EC": "Ecuador",
        "EG": "Egipto",
        "SV": "El Salvador",
        "GQ": "Guinea Ecuatorial",
        "ER": "Eritrea",
        "EE": "Estonia",
        "ET": "Etiopía",
        "FJ": "Fiyi",
        "FI": "Finlandia",
        "FR": "Francia",
        "GA": "Gabón",
        "GM": "Gambia",
        "GE": "Georgia",
        "DE": "Alemania",
        "GH": "Ghana",
        "GR": "Grecia",
        "GD": "Granada",
        "GT": "Guatemala",
        "GN": "Guinea",
        "GW": "Guinea-Bisáu",
        "GY": "Guyana",
        "HT": "Haití",
        "HN": "Honduras",
        "HU": "Hungría",
        "IS": "Islandia",
        "IN": "India",
        "ID": "Indonesia",
        "IR": "Irán",
        "IQ": "Iraq",
        "IE": "Irlanda",
        "IL": "Israel",
        "IT": "Italia",
        "JM": "Jamaica",
        "JP": "Japón",
        "JO": "Jordania",
        "KZ": "Kazajistán",
        "KE": "Kenia",
        "KI": "Kiribati",
        "KW": "Kuwait",
        "KG": "Kirguistán",
        "LA": "Laos",
        "LV": "Letonia",
        "LB": "Líbano",
        "LS": "Lesoto",
        "LR": "Liberia",
        "LY": "Libia",
        "LI": "Liechtenstein",
        "LT": "Lituania",
        "LU": "Luxemburgo",
        "MG": "Madagascar",
        "MW": "Malaui",
        "MY": "Malasia",
        "MV": "Maldivas",
        "ML": "Malí",
        "MT": "Malta",
        "MH": "Islas Marshall",
        "MR": "Mauritania",
        "MU": "Mauricio",
        "MX": "México",
        "FM": "Micronesia",
        "MD": "Moldavia",
        "MC": "Mónaco",
        "MN": "Mongolia",
        "ME": "Montenegro",
        "MA": "Marruecos",
        "MZ": "Mozambique",
        "MM": "Myanmar (Birmania)",
        "NA": "Namibia",
        "NR": "Nauru",
        "NP": "Nepal",
        "NL": "Países Bajos",
        "NZ": "Nueva Zelanda",
        "NI": "Nicaragua",
        "NE": "Níger",
        "NG": "Nigeria",
        "KP": "Corea del Norte",
        "MK": "Macedonia del Norte",
        "NO": "Noruega",
        "OM": "Omán",
        "PK": "Pakistán",
        "PW": "Palaos",
        "PA": "Panamá",
        "PG": "Papúa Nueva Guinea",
        "PY": "Paraguay",
        "PE": "Perú",
        "PH": "Filipinas",
        "PL": "Polonia",
        "PT": "Portugal",
        "QA": "Catar",
        "RO": "Rumania",
        "RU": "Rusia",
        "RW": "Ruanda",
        "KN": "San Cristóbal y Nieves",
        "LC": "Santa Lucía",
        "VC": "San Vicente y las Granadinas",
        "WS": "Samoa",
        "SM": "San Marino",
        "ST": "Santo Tomé y Príncipe",
        "SA": "Arabia Saudita",
        "SN": "Senegal",
        "RS": "Serbia",
        "SC": "Seychelles",
        "SL": "Sierra Leona",
        "SG": "Singapur",
        "SK": "Eslovaquia",
        "SI": "Eslovenia",
        "SB": "Islas Salomón",
        "SO": "Somalia",
        "ZA": "Sudáfrica",
        "KR": "Corea del Sur",
        "SS": "Sudán del Sur",
        "ES": "España",
        "LK": "Sri Lanka",
        "SD": "Sudán",
        "SR": "Surinam",
        "SZ": "Eswatini",
        "SE": "Suecia",
        "CH": "Suiza",
        "SY": "Siria",
        "TW": "Taiwán",
        "TJ": "Tayikistán",
        "TZ": "Tanzania",
        "TH": "Tailandia",
        "TL": "Timor Oriental",
        "TG": "Togo",
        "TO": "Tonga",
        "TT": "Trinidad y Tobago",
        "TN": "Túnez",
        "TR": "Turquía",
        "TM": "Turkmenistán",
        "TV": "Tuvalu",
        "UG": "Uganda",
        "UA": "Ucrania",
        "AE": "Emiratos Árabes Unidos",
        "GB": "Reino Unido",
        "US": "Estados Unidos",
        "UY": "Uruguay",
        "UZ": "Uzbekistán",
        "VU": "Vanuatu",
        "VA": "Ciudad del Vaticano",
        "VE": "Venezuela",
        "VN": "Vietnam",
        "YE": "Yemen",
        "ZM": "Zambia",
        "ZW": "Zimbabue"
      };
    return (
      <div className="max-w-md mx-auto mt-8 bg-gray-300 bg-opacity-50">
        <div className="max-w-md mx-auto mt-8 bg-gray-300 bg-opacity-50">
         <h2 className="text-center text-2xl font-bold mb-4">Registrar usuario</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre de usuario
            </label>
            <input
              className="border-b-2 border-red-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              type="text"
              placeholder="Ingrese su nombre de usuario"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
              Nombre
            </label>
            <input
              className="border-b-2 border-red-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="text"
              type="text"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
              Apellido 
            </label>
            <input
              className="border-b-2 border-red-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="apellido"
              type="text"
              placeholder="Ingrese su apellido"
            />
          </div>
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border-b-2 border-red-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Ingrese su email"
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
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">
            Avatar
          </label>
          <input
            className="border-b-2 border-red-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="imagen"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pais">
            País
          </label>
          <select
            className="border-b-2 border-red-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pais"
          >
            {Object.entries(paisesInvertidos).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
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
    );
};
  
export default Registro;