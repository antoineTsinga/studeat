import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppContext } from "./AppContext";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import Aliments from "./views/Aspic/Aliments";
import Login from "./views/Auth/Login";
import Home from "./views/Home/Home";
import TestLogin from "./views/TestLogin";

export default function Router() {
  const { onConnect } = useAppContext();

  console.log(onConnect);
  return (
    <BrowserRouter>
      {onConnect ? <Navbar /> : null}
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route
          element={onConnect ? <Navigate to="/Accueil" /> : <Login />}
          path="/login"
          exact
        />
        <Route element={<TestLogin />} path="/test" exact />

        <Route
          path="/aliments"
          exact
          element={
            onConnect || onConnect == null ? (
              <Aliments />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
