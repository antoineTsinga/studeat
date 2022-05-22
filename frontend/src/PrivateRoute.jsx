import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAppContext } from "./AppContext";

export default function PrivateRoute({ children }) {
  const { onConnect } = useAppContext();

  return onConnect || onConnect == null ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  );
}
