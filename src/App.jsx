import { Route, Routes} from "react-router-dom";
import MovieForm from "./Components/MovieForm";
import MovieList from "./Components/MovieList";
import "./index.css";
import NotFound from "./Components/NotFound";
import Profile from "./Components/Profile";
import Inicio from "./Components/Inicio";
import Registro from "./Components/Registro";
import LoginUser from "./Components/LoginUser";
import Condition from "./Components/Condition";
import Manual from "./Components/Manual";
import SesionContext from "./context/SesionContext";
import { useState } from "react";

const App = () => {
  const [sesionInfo, setSesionInfo] = useState(null);

  return (
    <SesionContext.Provider value={{ sesionInfo, setSesionInfo }}>
       
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<Registro />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/movieform" element={<MovieForm />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/movielist" element={<MovieList />} />
        </Routes>
        <br />
        <Profile />
      </div>
      
    </SesionContext.Provider>
  );
};

export default App;
