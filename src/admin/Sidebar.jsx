import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const items = [
        {
          text: "Dashboard",
        },
        {
          text: "Orders",
        },
        {
          text: "Products",
        },
        {
          text: "Marketing",
        },
        {
          text: "Rates",
        },
        {
          text: "Reports",
        },
      ];
    return (
        <div className="sidebar">
           
          <div className="logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="nav__links">
            <ul>
              {items.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <Link to={`${item.text.toLowerCase()}`}>
                      <span>{item.text}</span>{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
    )
}

export default Sidebar
