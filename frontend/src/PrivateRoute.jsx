import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAppContext } from "./AppContext";

export default function PrivateRoute({ children, ...all }) {
  const { onConnect } = useAppContext();

  return (
    <Route
      {...all}
      element={
        onConnect || onConnect == null ? <>{children}</> : <Navigate to="/" />
      }
    />
  );
}
