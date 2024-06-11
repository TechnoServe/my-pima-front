import React, { useState } from "react";
import {
  MdOutlineDashboardCustomize,
  MdOutlineGroups,
  MdOutlineCalendarToday,
  MdOutlinePersonSearch,
  MdLogout,
  MdManageAccounts,
  MdPerson,
  MdAddChart,
} from "react-icons/md";
import { HiOutlineTruck, HiMenuAlt2 } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import Logo from "../Logo";
import { Chip } from "@mui/material";

/* Component */
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // const toggle = () => setIsOpen(!isOpen);
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
      name: "Focal Farmer Groups",
      icon: <MdOutlineGroups />,
    },
    {
      path: "/in/trainsession",
      name: "Training Sessions",
      icon: <MdOutlineCalendarToday />,
      subMenu: [
        {
          path: "/in/trainsession/",
          name: "All Sessions",
          icon: <MdOutlineCalendarToday />,
        },
        {
          path: "/in/trainsession/pending",
          name: "Image Approvals",
          icon: <MdOutlineCalendarToday />,
        },
      ],
    },
    {
      path: "/in/participants",
      name: "Registered Farmers",
      icon: <MdOutlinePersonSearch />,
    },
    {
      path: "/in/farmvisit",
      name: "Farm Visits",
      icon: <HiOutlineTruck />,
      subMenu: [
        {
          path: "/in/farmvisit/",
          name: "Farm Visits",
          icon: <MdOutlineCalendarToday />,
        },
        // {
        //   path: "/in/farmvisit/verification",
        //   name: "Farm Visit Verification",
        //   icon: <MdOutlineCalendarToday />,
        // },
      ]
    },
    {
      path: "/in/performance",
      name: "Field Team Performance",
      icon: <MdAddChart />,
      subMenu: [
        {
          path: "/in/performance/aa",
          name: "Agronomy Advisors",
          icon: <MdPerson />,
        },
        {
          path: "/in/performance/ft",
          name: "Farmer Trainers",
          icon: <MdPerson />,
        },
      ],
    },
    {
      path: "/in/manage",
      name: "Management",
      icon: <MdManageAccounts />,
      isPrivate:
        userDetails &&
        (userDetails.role === "super_admin" ||
          userDetails.role === "ci_leadership"),
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
          <div
            style={{
              display: isOpen ? "flex" : "none",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="logo"
          >
            <Logo />
          </div>
        </div>

        <div className="mid__section">
          {menuItem
            .filter((item) => item.isPrivate === undefined || item.isPrivate)
            .map((item, index) => (
              <div key={index} className="menu-item">
                {/* Render main menu item */}
                <NavLink to={item.path} className="link">
                  <div className="icon">{item.icon}</div>
                  <div className="link_text">{item.name}</div>
                </NavLink>

                {/* Render sub-menu items if available */}
                {item.subMenu && (
                  <div
                    className={`sub__menu ${
                      activeSubMenu === index ? "active" : ""
                    }`}
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className="link"
                        activeClassName="active"
                        onMouseEnter={() => setActiveSubMenu(index)}
                        onMouseLeave={() => setActiveSubMenu(null)}
                      >
                        <div className="icon">{subItem.icon}</div>
                        <div className="link_text">{subItem.name}</div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
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
      <main style={{ width: "100%" }}>{children}</main>
    </div>
  );
};

export default Sidebar;
