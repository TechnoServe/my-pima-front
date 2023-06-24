import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/*" element={<Navbar />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
