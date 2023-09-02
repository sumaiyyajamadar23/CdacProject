import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import "./AdminSideBar.css";
import { IconContext } from "react-icons";

function AdminSideBar() {
  const [sidebar, setSidebar] = useState(false);

  const SidebarData = [
    {
      title: "Home",
      path: `/admin-welcome/admin`,
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text",
    },
    {
      title: "See Customers",
      path: `/customer-list`,
      icon: <IoIcons.IoMdPeople />,
      cName: "nav-text",
    },
    {
      title: "See Artists",
      path: "/artist-list",
      icon: <IoIcons.IoMdPeople />,
      cName: "nav-text",
    },
    {
      title: "See Orders",
      path: "/orders-list",
      icon: <FaIcons.FaCartPlus />,
      cName: "nav-text",
    },
    {
      title: "See Products",
      path: "/Admin-product",
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: "nav-text",
    },
  ];

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default AdminSideBar;
