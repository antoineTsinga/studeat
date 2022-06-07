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

import Restaurant from "./views/Aspic/Restaurant/Restaurant";

import Login from "./views/Auth/Login";
import LoginDeliverer from "./views/Auth/LoginDeliverer";
import Registration from "./views/Auth/Registration";
import RegistrationDeliverer from "./views/Auth/RegistrationDeliverer";
import Home from "./views/Home/Home";
import TestLogin from "./views/TestLogin";

export default function Router() {
  const { onConnect } = useAppContext();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Registration />} path="/Registration" exact />
        <Route element={<RegistrationDeliverer />} path="/RegistrationDeliverer" exact />

        <Route
          element={onConnect ? <Navigate to="/" /> : <Login />}
          path="/login"
          exact
        />
        <Route
           element={onConnect?<Navigate to={"/"}/> : <LoginDeliverer/>}
           path="/loginDeliverer"
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
        <Route
          path="/Restaurant/:id"
          exact
          element={
            <PrivateRoute>
              <Restaurant />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
