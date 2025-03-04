import React from "react";
import "./Header.css";
import OptionsHeader from "../OptionsHeader/OptionsHeader";
import IconSite from "../../assets/icons/IconSite.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="divNavBar">
      <Link to="/">
      <div className="tituloLogo">
        <div className="siteLogo">
          <img src={IconSite} alt="" />
        </div>
        <span>Conversão Total</span>
      </div>
      </Link>
      <div className="OptionsUnitHeader">
        <OptionsHeader />
      </div>
    </div>
  );
}

export default Header;
