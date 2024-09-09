import { lazy } from "react";
import "./App.css";
import SuvCar from "./pages/SuvCar";
import { NavLink, Route, Routes } from "react-router-dom";
import Convertible from "./pages/Convertible";
import Sedan from "./pages/Sedan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/logo.jpeg";

const Homepage = lazy(() => import("./homepage/Homepage"));
import "./styles/header.css";
import Offroad from "./pages/Offroad";
import ProductDetails from "./productpage/ProductDetails";

function App() {
  return (
    <>
      <nav>
        <NavLink className="logo_parent" to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div>
          <NavLink className="navlink" to="/suv">
            SUV{" "}
          </NavLink>
          <NavLink className="navlink" to="/sedan">
            Sedan
          </NavLink>
          <NavLink className="navlink" to="/convertible">
            Convertable
          </NavLink>
          <NavLink className="navlink" to="/offroad">
            Off-Road
          </NavLink>
        </div>

        <div>
          <p>
            <FontAwesomeIcon icon={faUser} />
          </p>
          <p>
            <FontAwesomeIcon icon={faHeart} />
          </p>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/suv" element={<SuvCar />} />
        <Route path="/convertible" element={<Convertible />} />
        <Route path="/offroad" element={<Offroad />} />
        <Route path="/sedan" element={<Sedan />} />
        <Route path={`/:category/:id`} element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
