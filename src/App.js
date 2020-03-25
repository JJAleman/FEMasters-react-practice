import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Kiana",
      animal: "Dog",
      breed: "Weimaraner"
    }),
    React.createElement(Pet, {
      name: "Kaiser",
      animal: "Dog",
      breed: "Chihuahua"
    }),
    React.createElement(Pet, {
      name: "Chispita",
      animal: "Dog",
      breed: "Chihuahua"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
