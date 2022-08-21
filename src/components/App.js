import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/App.scss";

import GroupPage from "../pages/GroupPage";
import KnockoutPage from "../pages/KnockoutPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<GroupPage />} />
          <Route path="/knockout" element={<KnockoutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
