import React, { useState } from "react";
import BACC_Logo from "../../Assets/Home/bacc_logo.png";
import "./NavbarStyles.css";
import { MenuItems, MenuItems1 } from "./MenuItems";
import { Link } from "react-router-dom";
import Dropdown from "../Drop-Down-Menu/ActivityDropDown";
import Dropdown1 from "../Drop-Down-Menu/ActivityDropDown1";

function Navbar() {
  {
    const [dropdown, setDropdown] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [clicked, setClicked] = useState(false);
    return (
      <nav className="NavbarItems">
        <h2>
          <Link data-testid="link" to="/">
            <span>
              <img id="BACC-logo" src={BACC_Logo}></img>
            </span>
          </Link>
        </h2>
        <div className="menu-icons" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            if (item.title === "Membership") {
              return (
                <li
                  key={item.id}
                  className={item.CName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link id="activity-menu" to={item.url}>
                    <i className={item.icon}></i> {item.title}
                    <i className={item.ddIcon} id="activity-drop-menu"></i>
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={index}>
                <Link className={item.CName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                  <i className={item.ddIcon}></i>
                </Link>
              </li>
            );
          })}
          {MenuItems1.map((item, index) => {
            if (item.title === "Trade Missions") {
              return (
                <li
                  key={item.id}
                  className={item.CName}
                  onMouseEnter={() => setDropdown1(true)}
                  onMouseLeave={() => setDropdown1(false)}
                >
                  <Link id="activity-menu" to={item.url}>
                    <i className={item.icon}></i> {item.title}
                    <i className={item.ddIcon} id="activity-drop-menu"></i>
                  </Link>
                  {dropdown1 && <Dropdown1 />}
                </li>
              );
            }

            return (
              <li key={index}>
                <Link className={item.CName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                  <i className={item.ddIcon}></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
