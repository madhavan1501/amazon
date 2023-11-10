import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mobile from "./mobile";
import Laptop from "./Laptop";
import LaptopAccessories from "./LaptopAccessories";
import AirpodsAndWatch from "./AirpodsAndWatch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobiles" element={<Mobile />} />
          <Route path="/laptops" element={<Laptop />} />
          <Route path="/laptopsAccessories" element={<LaptopAccessories />} />
          <Route path="/AirpodsAndWatch" element={<AirpodsAndWatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
