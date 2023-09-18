import Login from "./pages/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/navbar";
import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <TitleUpdater />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/in/*" element={<Navbar />} />
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgot" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname; // Get the current path
    const pageName = path === "/" ? "Home" : path.substring(1).toUpperCase(); // Extract page name from path
    document.title = `My PIMA - ${pageName}`; // Update the title
  }, [location]);

  return null;
}

export default App;
