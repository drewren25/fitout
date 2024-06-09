import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Create_A_Meet from "./pages/Create_A_Meet";
import View_More from "./pages/View_More";
import About from "./pages/About";
import How_It_Works from "./pages/How_It_Works";

import React, { useState } from "react";

function App() {
  let component = <Home />;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/Create_A_Meet":
      component = <Create_A_Meet />;
      break;
    case "/All_Meets":
      component = <View_More />;
      break;
    case "/About":
      component = <About />;
      break;
    case "/How_it_works":
      component = <How_It_Works />
  }
  return (
    <div>
      <Nav></Nav>
      {component}
      <Footer></Footer>
    </div>
  );
}

export default App;
