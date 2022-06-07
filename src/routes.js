import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Rules from "./pages/tutor-rate/rules/rules";
import Simulator from "./pages/tutor-rate/simulator/simulator";

function Routescomponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tutor-rate/rules" element={<Rules />} />
      <Route path="/tutor-rate/simulator" element={<Simulator />} />
    </Routes>
  );
}

export default Routescomponent;
