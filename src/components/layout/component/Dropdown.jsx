import React from "react";
import { DropdownData } from "./DropdownData";
import "../layout.css";

function Dropdown() {
  return (
    <div className="Dropdown">
      <ul className="Drp-list">
        {DropdownData.map((val, key) => {
          return (
            
              <li
                className="r"
                key={key}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
