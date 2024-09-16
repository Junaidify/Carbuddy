import { lazy } from "react";
import "./App.css";
import SuvCar from "./pages/SuvCar";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Convertible from "./pages/Convertible";
import Sedan from "./pages/Sedan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/logo.jpeg";
import Payment from "./productpage/payment";
import Login from "./authentication/Login";

const Homepage = lazy(() => import("./homepage/Homepage"));
import "./styles/header.css";
import Offroad from "./pages/Offroad";
import ProductDetails from "./productpage/ProductDetails";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div id="navigation">
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
            <p onClick={() => navigate("/login")}>
              <FontAwesomeIcon icon={faUser} />
            </p>
            <p>
              <FontAwesomeIcon icon={faHeart} />
            </p>
          </div>
        </nav>
        <div></div>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/suv" element={<SuvCar />} />
        <Route path="/convertible" element={<Convertible />} />
        <Route path="/offroad" element={<Offroad />} />
        <Route path="/sedan" element={<Sedan />} />
        <Route path={`/:category/:id`} element={<ProductDetails />} />
        <Route path="/booking" element={<Payment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
