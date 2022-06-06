import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

import "./App.css";

import apple from "./사과.png";

function App() {
  return (
    <>
      <MobileView>
        <div className="apple">
          <img src={apple}></img>
          <h2>죄송합니다</h2>
          <h3>모바일은 아직 구축하지 못했습니다</h3>
        </div>
      </MobileView>

      <BrowserView>
        <Router>
          <Routes>
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </BrowserView>
    </>
  );
}

export default App;
