import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from './SearchParams.js';

const App = () => {

  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Kiana" animal="Dog" breed="Weimaraner" />
      <Pet name="Kaiser" animal="Dog" breed="Chihuahua" />
      <Pet name="Chispita" animal="Dog" breed="Chihuahua" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
