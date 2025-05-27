import React from "react";
import "./index.css";
import { TiWeatherSunny } from "react-icons/ti";

function Header() {
  return (
    <header>
      <div className='container ui block header'>
        <h1 className='title'>
          MAUSAM{" "}
          <span className='logo'>
            <TiWeatherSunny />
          </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
