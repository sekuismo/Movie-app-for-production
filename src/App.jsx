import { Route, Routes } from "react-router-dom";
import MovieForm from "./Components/MovieForm";
import "./index.css";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Components/Profile";
import LoginUser from "./Components/LoginUser";
import Inicio from "./Components/Inicio";
import Registro from "./Components/Registro";
import MovieList from "./Components/MovieList";

const App = () => {
  const { isAuthenticated,isLoading } = useAuth0();
  if(isLoading) return <h1>cargando</h1>
  else
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/movieform" element={<MovieForm />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movielist" element={<MovieList/>} />
      </Routes>
      <Inicio />
      <LoginUser />
      <Registro />
  
      <br />
      <Profile />
    </div>
  );
};

export default App;
