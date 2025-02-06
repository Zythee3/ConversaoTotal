import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="divNavBar">
      <div className="tituloLogo">
        <div className="siteLogo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 5h-7L8 19l-3-6H3m11 0l6 6m-6 0l6-6"
            />
          </svg>
        </div>
        <span>Conversão Total</span>
      </div>
{/*  */}
      
    </div>
  );
}

export default NavBar;
