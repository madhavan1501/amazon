import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mobile from "./mobile";
import Laptop from "./Laptop";
import LaptopAccessories from "./LaptopAccessories";
import AirpodsAndWatch from "./AirpodsAndWatch";
import HomeProducts from "./HomeProducts";
import HomeApplications from "./HomeApplications";
import KitchenProducts from "./KitchenProducts";
import ShoesAndBags from "./ShoesAndBags";
import DailyNeeds from "./DailyNeeds";
import Grocery from "./Grocery";
import Toys from "./Toys";
import Fasion from "./Fasion";
import Cart from "./Cart";
import { Context } from "./Context";
import LoginPage from "./LoginPage";
import { useState, useEffect } from "react";
import LoginPage2 from "./LoginPage2";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, [windowWidth]);
  return (
    <>
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home windowWidth={windowWidth} />} />
            <Route path="/mobiles" element={<Mobile />} />
            <Route path="/laptops" element={<Laptop />} />
            <Route path="/laptopsAccessories" element={<LaptopAccessories />} />
            <Route path="/AirpodsAndWatch" element={<AirpodsAndWatch />} />
            <Route path="/HomeProducts" element={<HomeProducts />} />
            <Route path="/HomeAppliances" element={<HomeApplications />} />
            <Route path="/KitchenProducts" element={<KitchenProducts />} />
            <Route path="/ShoesAndBags" element={<ShoesAndBags />} />
            <Route path="/DailyNeeds" element={<DailyNeeds />} />
            <Route path="/Grocery" element={<Grocery />} />
            <Route path="/Toys" element={<Toys />} />
            <Route path="/Fasion" element={<Fasion />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/LoginPage">
              <Route index element={<LoginPage />} />
              <Route path="LoginPage2" element={<LoginPage2 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
