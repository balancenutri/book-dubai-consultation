import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Congrates from "./components/Congrates";
import Home from "./components/Home";
import Workshop from "./workshop/Workshop";
import Consultation from "./consultation/Consultation";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/congrats" element={<Congrates />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/" element={<Consultation />} />
        </Routes>
      </Router>
    </>
  );
}
