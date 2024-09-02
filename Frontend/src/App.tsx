import { lazy } from "react";
import "./App.css";
import SuvCar from "./pages/SuvCar";
import { Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./homepage/Homepage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/suvcar" element={<SuvCar />} />
      </Routes>
    </>
  );
}

export default App;
