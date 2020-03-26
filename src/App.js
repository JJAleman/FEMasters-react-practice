import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Kiana",
  //     animal: "Dog",
  //     breed: "Weimaraner"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Kaiser",
  //     animal: "Dog",
  //     breed: "Chihuahua"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Chispita",
  //     animal: "Dog",
  //     breed: "Chihuahua"
  //   })
  // ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Kiana" animal="Dog" breed="Weimaraner" />
      <Pet name="Kaiser" animal="Dog" breed="Chihuahua" />
      <Pet name="Chispita" animal="Dog" breed="Chihuahua" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
