import React from "react";

import Header from "./components/header/main";
import AboutMe from "./components/aboutMe";
import FastSearch from "./components/fastSearch/main";
import FollowUpTicket from "./components/followUpTicket";

const App = () => {
  return (
    <div>
      <Header />
      <FastSearch />
      <AboutMe />
      <FollowUpTicket />
    </div>
  );
};

export default App;
