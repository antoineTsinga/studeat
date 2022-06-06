import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppContext } from "./AppContext";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import PrivateRoute from "./PrivateRoute";
import Aliments from "./views/Aspic/Aliments";
import Catalogue from "./views/Aspic/Catalogue/Catalogue";
import Panier from "./views/Aspic/Panier/Panier";
import ProfilEtudiant from "./views/Aspic/ProfilEtudiant/ProfilEtudiant";
import Login from "./views/Auth/Login";
import Registration from "./views/Auth/Registration";
import Home from "./views/Home/Home";
import TestLogin from "./views/TestLogin";

export default function Router() {
  const { onConnect } = useAppContext();

  console.log(onConnect);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Registration />} path="/Registration" exact />

        <Route
          element={onConnect ? <Navigate to="/" /> : <Login />}
          path="/login"
          exact
        />

        <Route element={<TestLogin />} path="/test" exact />
        <Route element={<ProfilEtudiant />} path="/profil" exact />
        <Route element={<Panier />} path="/panier" exact />

        <Route
          path="/aliments"
          exact
          element={
            <PrivateRoute>
              <Aliments />
            </PrivateRoute>
          }
        />
        <Route
          path="/Catalogue"
          exact
          element={
            <PrivateRoute>
              <Catalogue />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
