import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const navLists = ["Account", "Profile", "Settings"];
  return (
    <div className="dropdown">
      <nav className="dashboard__nav">
        <ul className="navlists">
          {navLists.map((list, index) => {
            return (
              <li className="navlist" key={index}>
                <Link to={`/${list.toLowerCase()}`}>
                  {list}
                </Link>
              </li>
            );
          })}
          <li>Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default Dropdown;
