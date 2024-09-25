import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  MdOutlineDashboardCustomize,
  MdOutlineGroups,
  MdOutlineCalendarToday,
  MdOutlinePersonSearch,
  MdLogout,
  MdManageAccounts,
  MdPerson,
  MdAddChart,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi";
import "./Sidebar.css"; // Custom CSS file

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Track open submenu
  const navigate = useNavigate();

  // Fetch user details from localStorage
  const userDetails = JSON.parse(window.localStorage.getItem("myPimaUserData")) || {};

  // Menu items structure (using original paths you provided)
  const menuItems = [
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
      name: "Training Sessions",
      icon: <MdOutlineCalendarToday />,
      subMenu: [
        { path: "/in/trainsession", name: "All Sessions", icon: <MdOutlineCalendarToday /> },
        { path: "/in/trainsession/verification", name: "Image Approvals", icon: <MdOutlineCalendarToday /> },
      ],
    },
    {
      path: "/in/participants",
      name: "Registered Farmers",
      icon: <MdOutlinePersonSearch />,
    },
    {
      name: "Farm Visits",
      icon: <HiOutlineTruck />,
      subMenu: [
        { path: "/in/farmvisit", name: "All Visits", icon: <HiOutlineTruck /> },
        { path: "/in/farmvisit/verification", name: "Visit Verification", icon: <HiOutlineTruck /> },
      ],
    },
    {
      name: "Field Team Performance",
      icon: <MdAddChart />,
      subMenu: [
        { path: "/in/performance/aa", name: "Agronomy Advisors", icon: <MdPerson /> },
        { path: "/in/performance/ft", name: "Farmer Trainers", icon: <MdPerson /> },
      ],
    },
    {
      path: "/in/manage",
      name: "Management",
      icon: <MdManageAccounts />,
      isPrivate: userDetails.role === "super_admin" || userDetails.role === "ci_leadership",
    },
  ];

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Handle submenu toggle
  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("my-pima-token");
    window.localStorage.removeItem("myPimaUserData");
    navigate("/login");
  };

  return (
    <div className="sidebar-layout">
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">MyPima</h2>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              {/* If the item has a submenu, it acts as a toggle, not a link */}
              {item.subMenu ? (
                <>
                  <div className="submenu-toggle" onClick={() => toggleSubMenu(index)}>
                    <div className="icon">{item.icon}</div>
                    <span className={`menu-text ${!isOpen && "hide"}`}>{item.name}</span>
                  </div>
                  {activeSubMenu === index && isOpen && (
                    <div className="submenu">
                      {item.subMenu.map((subItem, subIndex) => (
                        <NavLink key={subIndex} to={subItem.path} className="submenu-link" activeclassname="active">
                          <div className="icon">{subItem.icon}</div>
                          <span className="submenu-text">{subItem.name}</span>
                        </NavLink>
                      ))}
                    </div> 
                  )}
                </>
              ) : (
                // If it's a simple link without a submenu
                <NavLink to={item.path} className="menu-link" activeclassname="active">
                  <div className="icon">{item.icon}</div>
                  <span className={`menu-text ${!isOpen && "hide"}`}>{item.name}</span>
                </NavLink>
              )}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="profile-section">
            <span className="profile-name">{userDetails.username || "N/A"}</span>
            <span className="profile-email">{userDetails.email || "N/A"}</span>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            <MdLogout />
            <span className="logout-text">Logout</span>
          </button>
        </div>
      </div>

      <main className={`main-content ${isOpen ? "open" : "closed"}`}>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
