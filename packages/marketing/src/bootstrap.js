import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in isolation call mount inmediatly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing_dev_root");

  if (devRoot) mount(devRoot);
}

// We are running throught container
// and we should export the mount function
export { mount };
