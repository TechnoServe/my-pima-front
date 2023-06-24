import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Authentication pages */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
