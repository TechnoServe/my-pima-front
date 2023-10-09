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
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import Logo from "../Logo";
import { Chip } from "@mui/material";

/* Component */
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const userDetails = JSON.parse(window.localStorage.getItem("myPimaUserData"));

  const menuItem = [
    {
      path: "/in/dashboard",
      name: "Dashboard",
      icon: <MdOutlineDashboardCustomize />,
    },
    {
      path: "/in/traingroup",
      name: "Training Groups",
      icon: <MdOutlineGroups />,
    },
    {
      path: "/in/trainsession",
      name: "Training Sessions",
      icon: <MdOutlineCalendarToday />,
    },
    {
      path: "/in/participants",
      name: "Participants",
      icon: <MdOutlinePersonSearch />,
    },
    {
      path: "/in/farmvisit",
      name: "Farm Visits",
      icon: <HiOutlineTruck />,
    },
    {
      path: "/in/manage",
      name: "Management",
      icon: <MdManageAccounts />,
    },
  ];
  const bottomitem = [
    {
      path: "/in/profile",
      name: userDetails && (userDetails.username || "N/A"),
      email: userDetails && (userDetails.email || "N/A"),
      role_name: userDetails && (userDetails.role || "N/A"),
      icon: <MdOutlinePersonSearch />,
    },
    {
      path: "/in/logout",
      name: "Logout",
      icon: <MdLogout />,
    },
  ];

  const handleLogout = (e) => {
    e.preventDefault();

    window.localStorage.removeItem("my-pima-token");
    window.localStorage.removeItem("myPimaUserData");

    navigate("/login");
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
            <NavLink to={item.path} key={index} className="link">
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
            onClick={(e) => e.preventDefault()}
            style={{
              cursor: "default",
            }}
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
              <div
                style={{
                  display: isOpen ? "block" : "none",
                  marginTop: "10px",
                }}
                className="profile__text"
              >
                <Chip
                  label={
                    bottomitem[0].role_name
                      ? bottomitem[0].role_name.includes("_")
                        ? bottomitem[0].role_name
                            .split("_")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")
                        : bottomitem[0].role_name.charAt(0).toUpperCase() +
                          bottomitem[0].role_name.slice(1)
                      : "N/A"
                  }
                  variant="contained"
                  size="small"
                  color="secondary"
                />
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
