import React, { useState } from "react";
import {
  MdOutlineDashboardCustomize,
  MdOutlineGroups,
  MdOutlineCalendarToday,
  MdOutlinePersonSearch,
  MdLogout,
  MdManageAccounts,
} from "react-icons/md";
import { HiOutlineTruck, HiMenuAlt2 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../Logo";

/* Component */
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const userDetails = JSON.parse(window.localStorage.getItem("myPimaUserData"));

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdOutlineDashboardCustomize />,
    },
    {
      path: "/traingroup",
      name: "Training Groups",
      icon: <MdOutlineGroups />,
    },
    {
      path: "/trainsession",
      name: "Training Sessions",
      icon: <MdOutlineCalendarToday />,
    },
    {
      path: "/participants",
      name: "Participants",
      icon: <MdOutlinePersonSearch />,
    },
    {
      path: "/farmvisit",
      name: "Farm Visits",
      icon: <HiOutlineTruck />,
    },
    {
      path: "/manage",
      name: "Management",
      icon: <MdManageAccounts />,
    },
  ];
  const bottomitem = [
    {
      path: "/profile",
      name: userDetails && (userDetails.username || "N/A"),
      email: userDetails && (userDetails.email || "N/A"),
      icon: <MdOutlinePersonSearch />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <MdLogout />,
    },
  ];

  const handleLogout = (e) => {
    e.preventDefault();

    window.localStorage.removeItem("my-pima-token");
    window.localStorage.removeItem("myPimaUserData");
    window.location.href = "/login";
  };

  return (
    <div className="nav__container">
      <div
        style={{
          alignItems: isOpen ? "unset" : "center",
          transition: "max-width 0.3s ease",
        }}
        className="sidebar"
      >
        <div className="top_section">
          <div style={{ display: isOpen ? "block" : "none" }} className="logo">
            <Logo />
          </div>
          <div
            style={{
              marginLeft: isOpen ? "70px" : "0px",
              paddingTop: isOpen ? "" : "15px",
              marginRight: isOpen ? "10px" : "0",
              transition: "margin 0.3s ease",
            }}
            className="bars"
          >
            <HiMenuAlt2 onClick={toggle} color="white" />
          </div>
        </div>
        <div className="mid__section">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <div className="bottom__section">
          <NavLink
            to={bottomitem[0].path}
            className="link"
            activeclassname="active"
          >
            <div>{bottomitem[0].icon}</div>
            <div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="profile__text"
              >
                {bottomitem[0].name}
              </div>{" "}
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="profile__text"
              >
                {bottomitem[0].email}
              </div>
            </div>
          </NavLink>
          <NavLink
            to={bottomitem[1].path}
            className="link"
            activeclassname="active"
            onClick={handleLogout}
          >
            <div className="icon">{bottomitem[1].icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {bottomitem[1].name}
            </div>
          </NavLink>
        </div>
      </div>
      <main style={{ width: "100%", marginLeft: isOpen ? "220px" : "60px" }}>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
