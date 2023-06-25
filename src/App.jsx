import React from "react";

import Header from "./components/header/main";
import AboutMe from "./components/aboutMe";
import FastSearch from "./components/fastSearch/main";

const App = () => {
  return (
    <div>
      <Header />
      <FastSearch />
      <AboutMe />
    </div>
  );
};

export default App;
