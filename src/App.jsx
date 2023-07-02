import { Route, Routes } from "react-router-dom";
import MovieForm from "./Components/MovieForm";
import MovieList from "./Components/MovieList";
import "./index.css";
import NotFound from "./Components/NotFound";
import Profile from "./Components/Profile";
import Inicio from "./Components/Inicio";
import Registro from "./Components/Registro";
import LoginUser from "./Components/LoginUser";

const App = () => {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/movieform" element={<MovieForm />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movielist" element={<MovieList/>} />
      </Routes>
  
      <br />
      <Profile />
    </div>
  );
};

export default App;
