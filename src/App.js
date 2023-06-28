import Login from "./pages/Login";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectListDropdown from "./components/ProjectDrop/ProjectListDropdown";

function App() {

  
  return (
    <Router>
    {/* <Login/> */}
      <Navbar />
    </Router>
  );
}

export default App;
