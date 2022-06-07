import React from "react";
import { NotificationContainer } from "react-notifications";
import "./App.css";
import { AppContextProvider } from "./AppContext";

import Router from "./Router";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <NotificationContainer />
        <Router />
      </AppContextProvider>
    </div>
  );
}
export default App;
