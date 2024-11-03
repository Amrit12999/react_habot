import React, { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  function ToggleButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <button className=" sm:hidden  " onClick={toggleMenu} >
        {isOpen ? <RxCross2  size={20}/> : <FiAlignJustify size={20} />}
        {isOpen ? (
          <div className="fixed right-[42px] ease-linear duration-200 h-[60px] mt-6 z-10 text-center rounded-sm bg-black bg-opacity-20">
            <div className="mx-4 mr-14">
              <NavLink to="/findSuppliers">Find Suppliers</NavLink>
            </div>
            <div>
              <label>Find Service </label>
              <select>
                <option>Tags</option>
                <option>vdd</option>
              </select>
            </div>
          </div>
        ) : (
          <div className="fixed right-[-100px]"></div>
        )}
      </button>
    );
  }

  return (
    <div className="w-[100vw]">
      <nav className="h-[50px]  w-[100%] flex items-center justify-between bg-white z-30 sm:z-0 sm:h-[100px] md:h-[100px]">
        <div>
          <img
            className="h-[30px] mb-1 my-[1px] mx-[20px] md:h-[70px] sm:mx-[10px] sm:my-2 md:mx-[100px] sm:h-[50px]"
            src="./logo.jpg"
            alt="logo"
          />
        </div>
        <div className="gap-[14px] right-4 flex absolute sm:right-[90px] sm:gap-7 items-center">
          <ul className="text-[12px] hidden ml-8 mt-10 gap-[10px] text-stone-500 font-[400] sm:mt-0 sm:text-[18px] sm:flex sm:gap-8 ">
            <li>
              <NavLink to="/findSuppliers">Find Suppliers</NavLink>
            </li>

            <li className="">
              <label>Find Service </label>
              <select>
                <option>Tags</option>
                <option>vdd</option>
              </select>
            </li>
          </ul>
          <Button text="Login / Sign up" />
          <ToggleButton />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
