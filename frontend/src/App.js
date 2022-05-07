import React from "react";
import { NotificationContainer } from "react-notifications";

// import { AppContextProvider } from "./AppContext";

import Router from "./Router";

function App() {
  return (
    <>
      {/* <AppContextProvider> * shall we use context to manage state ?*/}
      <NotificationContainer />
      <Router />

      {/* </AppContextProvider> */}
    </>
  );
}
export default App;
