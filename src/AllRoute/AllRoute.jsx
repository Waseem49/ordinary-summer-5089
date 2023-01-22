import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Signup from "../components/Signup";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoute;
