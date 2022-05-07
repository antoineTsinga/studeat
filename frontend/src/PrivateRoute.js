import React from "react";
import { Redirect, Route } from "react-router-dom";
// import { useAppContext } from "./AppContext";

function PrivateRoute({ children, ...all }) {
  // TODO: implement App state manager (Redux or Context ?)
  // const { onConnect } = useAppContext();

  const onConnect = true;

  return (
    <Route
      {...all}
      render={() =>
        onConnect || onConnect == null ? (
          <>{children}</>
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}

export default PrivateRoute;
