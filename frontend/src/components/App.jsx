import {Routes, Route} from "react-router-dom"
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;