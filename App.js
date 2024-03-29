import React from "react";
import ReactDOM from "react-dom/client";

// JSX - This is not a pure javascript code
// It is transpiled by babel
const jsxHeading = (
  <div>
    <h1 id="heading">Namaste React using JSX</h1>
    <h2>Multiple Tags</h2>
  </div>
);

// Functional Components
const TitleComponent = (props) => (
  <div>
    <h1>Namaste React {props?.title} Functional Component.</h1>
  </div>
);

const HeadingComponent = () => (
  <div>
    {jsxHeading}
    {TitleComponent({ title: "Calling Functiion" })}
    {/* This is also called Component Composition - A component inside another component is called Component Composition */}
    <TitleComponent title={"Title"} />
    <h1>Namaste React Heading Functional Component.</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
