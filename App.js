import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      { key: "h1", id: "heading" },
      "I'm a child1 h1 Tag"
    ),
    React.createElement(
      "h2",
      { key: "h2", id: "heading" },
      "I'm a child1 h2 Tag"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { key: "h1.", id: "heading" },
      "I'm a child2 h1 Tag"
    ),
    React.createElement(
      "h2",
      { key: "h2.", id: "heading" },
      "I'm a child2 h2 Tag"
    ),
  ]),
]); // Its an object and this object is a React Element

console.log(parent);

// ReactElement(Object) => HTML(Browser Understands)

// const heading = React.createElement(
//   "h1",
//   { id: "heading", abc: "abc" },
//   "Hello World from React !"
// ); // Its a react element and returns an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
