import { Route, Routes, } from "react-router-dom";
import MovieForm from "./Components/MovieForm";
import "./index.css";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";


const App = () => {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/movieform"  element={<MovieForm/>} />
        <Route  path="*" element={<NotFound/>}  />
      </Routes>
      
    </div>
  );
};

export default App;
