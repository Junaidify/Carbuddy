import { lazy } from "react";
import "./App.css";
import SuvCar from "./pages/SuvCar";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Convertible from "./pages/Convertible";
import Sedan from "./pages/Sedan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import Login from "./authentication/Login";
import "./styles/carousel.css";
const Homepage = lazy(() => import("./homepage/Homepage"));
import Offroad from "./pages/Offroad";
import ProductDetails from "./productpage/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Payment from "./pages/Payment";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <nav id="navbar">
          <div className="navbar_img">
            <NavLink className="navbar_img_child" to="/">
              CARBUDDY
            </NavLink>
          </div>
          <div className="navbar_car">
            <NavLink className="navlink" to="/suv">
              Suv
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

          <div className="navbar_login_wishlist">
            <button onClick={() => navigate("/login")}>
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button onClick={() => navigate("/wishlist")}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/suv" element={<SuvCar />} />
        <Route path="/convertible" element={<Convertible />} />
        <Route path="/offroad" element={<Offroad />} />
        <Route path="/sedan" element={<Sedan />} />
        <Route path={`/:category/:id`} element={<ProductDetails />} />
        <Route path={`/booking/:id`} element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;
