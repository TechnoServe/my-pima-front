import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  MdMenu,
  MdClose,
  MdOutlineDashboardCustomize,
  MdLogout,
} from "react-icons/md";
import "./Sidebar.css";

const SustainabilitySidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const userDetails = JSON.parse(localStorage.getItem("myPimaUserData")) || {};

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("my-pima-token");
    localStorage.removeItem("myPimaUserData");
    navigate("/login");
  };

  return (
    <div className="sidebar-layout">
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">
            {isOpen ? "Pima Sustainability" : "PS"}
          </h2>
          <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        <div className="menu-items">
          <NavLink to="/in/sustainability/summary" className="menu-link">
            <div className="icon">
              <MdOutlineDashboardCustomize />
            </div>
            <span className={`menu-text ${!isOpen ? "hide" : ""}`}>
              Summary
            </span>
          </NavLink>

          <NavLink to="/in/sustainability/wetmills" className="menu-link">
            <div className="icon">
              <MdOutlineDashboardCustomize />
            </div>
            <span className={`menu-text ${!isOpen ? "hide" : ""}`}>
              Wet Mills
            </span>
          </NavLink>

          <NavLink to="/in/sustainability/dashboards" className="menu-link">
            <div className="icon">
              <MdOutlineDashboardCustomize />
            </div>
            <span className={`menu-text ${!isOpen ? "hide" : ""}`}>
              Dashboards
            </span>
          </NavLink>
        </div>

        <div className="sidebar-footer">
          {isOpen && (
            <div className="profile-section">
              <span className="profile-name">
                {userDetails.username || "N/A"}
              </span>
              <span className="profile-email">
                {userDetails.email || "N/A"}
              </span>
            </div>
          )}
          <button className="logout-button" onClick={handleLogout}>
            <MdLogout />
            {isOpen && <span className="logout-text">Logout</span>}
          </button>
        </div>
      </div>

      <main className={`main-content ${isOpen ? "open" : "closed"}`}>
        {children}
      </main>
    </div>
  );
};

export default SustainabilitySidebar;
