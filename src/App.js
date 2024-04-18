import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import BodyFile from "./components/BodyFile/BodyFile";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <BodyFile />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
