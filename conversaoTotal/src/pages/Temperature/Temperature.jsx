import React from "react";
import HomePage from "../../components/HomePage/HomePage";
import "./temperature.css";

function Temperature() {
  return (
    <div className="teste">
      <HomePage />
      <div className="calculationArea">
        <div className="calculator">Conversão de comprimento</div>
        <div className="divInput">
          <input type="text" />
          <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="black" d="M12.78 3.22a.75.75 0 1 0-1.06 1.06L13.44 6H4.75a.75.75 0 0 0 0 1.5h8.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06zm-4.5 7.56a.75.75 0 1 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06L6.56 14h8.69a.75.75 0 0 0 0-1.5H6.56z"/></svg></button>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default Temperature;
