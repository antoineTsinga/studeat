import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import Login from "./views/Auth/Login";
import Home from "./views/Home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Login />} path="/login" exact />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
