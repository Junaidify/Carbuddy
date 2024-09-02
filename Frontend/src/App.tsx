import { lazy } from "react";
import "./App.css";
import SuvCar from "./pages/SuvCar";
import { Route, Routes } from "react-router-dom";
import Convertible from "./pages/Convertible";
import Hetchback from "./pages/Hetchback";
import Sedan from "./pages/Sedan";

const Homepage = lazy(() => import("./homepage/Homepage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/suv" element={<SuvCar />} />
        <Route path="/convertible" element={<Convertible />} />
        <Route path="/hetchback" element={<Hetchback />} />
        <Route path="/sedan" element={<Sedan />} />
      </Routes>
    </>
  );
}

export default App;
