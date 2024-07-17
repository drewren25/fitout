import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Create_A_Meet from "./pages/Create_A_Meet";
import View_More from "./pages/View_More";
import About from "./pages/About";
import How_It_Works from "./pages/How_It_Works";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create_A_Meet" element={<Create_A_Meet />} />
          <Route path="/All_Meets" element={<View_More />} />
          <Route path="/About" element={<About />} />
          <Route path="/How_it_works" element={<How_It_Works />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
