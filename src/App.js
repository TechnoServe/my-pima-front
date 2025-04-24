// import Login from "./pages/Login";
// import { Routes, Route, useLocation } from "react-router-dom";
// import React from "react";
// import Navbar from "./components/Navbar/navbar";
import theme from "./components/Theme";
// import { ThemeProvider } from "@mui/material";
// import { useEffect } from "react";
// import NotFound from "./pages/NotFound";
// import ForgotPassword from "./pages/ForgotPassword";

// function App() {
//   return (
//     <div className="App">
//       <TitleUpdater />
//       <ThemeProvider theme={theme}>
//         <Routes>
//           <Route exact path="/in/*" element={<Navbar />} />
//           <Route exact path="/" element={<Navbar />} />
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/forgot" element={<ForgotPassword />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </ThemeProvider>
//     </div>
//   );
// }

// function TitleUpdater() {
//   const location = useLocation();

//   useEffect(() => {
//     const path = location.pathname; // Get the current path
//     const pageName = path === "/" ? "Home" : path.substring(1).toUpperCase(); // Extract page name from path
//     document.title = `My PIMA - ${pageName}`; // Update the title
//   }, [location]);

//   return null;
// }

// export default App;

import React, { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { appRoutes } from './routes/routes';
import { ThemeProvider } from '@mui/material';
// import theme from './app/theme';
import LoadingBoundary from './components/LoadingBoundary/LoadingBoundary.js';

function App() {
  const location = useLocation();
  const routes = useRoutes(appRoutes);

  useEffect(() => {
    const path = location.pathname;
    const pageName = path === '/' ? 'Home' : path.substring(1).toUpperCase();
    document.title = `My PIMA - ${pageName}`;
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <LoadingBoundary>
        {routes}
      </LoadingBoundary>
    </ThemeProvider>
  );
}

export default App;
