import { Route, Routes } from "react-router-dom";
import MovieForm from "./Components/MovieForm";
import "./index.css";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Components/LoginButton";
import Profile from "./Components/Profile";
import Logout from "./Components/Logout";

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
      </Routes>
      <h1>hola</h1>
      {isAuthenticated ? <Logout /> : <LoginButton />}
      <br />
      <Profile />
    </div>
  );
};

export default App;
