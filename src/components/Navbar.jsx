import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div className="w-[100vw]">
      <nav className="w-[100%] flex items-center justify-between bg-white h-[100px]">
        <div>
          <img
            className="h-[70px] my-2 mx-[100px]"
            src="./logo.jpg"
            alt="logo"
          />
        </div>
        <div className="flex absolute right-[90px] gap-7 items-center">
          <ul className="text-stone-500 font-[400] text-[18px] flex gap-8 ">
            <li><NavLink to="/findSuppliers">Find Suppliers</NavLink></li>

            <li>
              <label>Find Service </label>
              <select>
                <option>Tags</option>
                <option>vdd</option>
              </select>
            </li>
          </ul>
          <Button text="Login / Sign up"/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
