import React from "react";
import { NavLink } from "react-router-dom";

const Buyer = () => {
  return (
    <div className=" mt-[2px]  h-[300px] ">
      <div className="text-[30px] flex gap-[200px]">
        <NavLink
          className={(isActive) => (isActive ? "active" : "")}
          to="/buyer"
        >
          Buyer
        </NavLink>
        <NavLink
          className={(isActive) => (isActive ? "active" : "")}
          to="/supplier"
        >
          Supplier
        </NavLink>
        {/* <NavLink to="/supplier">Supplier</NavLink> */}
      </div>

      <div>
        <p>Post Your requiremnts.</p>
        <p>Sit back for multiple suppliers to contact you.</p>
        <p>Choose among the suppliers based on the ratings and reviews.</p>
      </div>
    </div>
  );
};

export default Buyer;
