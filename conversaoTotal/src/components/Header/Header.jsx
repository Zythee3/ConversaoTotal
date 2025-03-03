import React from "react";
import "./Header.css";
import OptionsHeader from "../OptionsHeader/OptionsHeader";
import IconSite from "../../assets/icons/IconSite.svg"

function NavBar() {
  return (
    <div className="divNavBar">
      <div className="tituloLogo">
        <div className="siteLogo">
          <img src={IconSite} alt="" />
        </div>
        <span>Conversão Total</span>
      </div>
      <div className="OptionsUnitHeader">
        <OptionsHeader />
      </div>
    </div>
  );
}

export default NavBar;
