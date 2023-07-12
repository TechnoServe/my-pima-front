import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/navbar";
import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/*" element={<Navbar />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
