import React from "react";
import { NavLink } from "react-router-dom";

const Supplier = () => {
  return (
    <div className="flex  gap-2">
      <div className="text-[30px]">
        <NavLink to="/buyer">Buyer</NavLink>
      </div>
      <div className="text-[30px]">
        {/* <NavLink
          className={(isActive) => (isActive ? "active" : "")}
          to="/supplier"
        >
          Supplier
        </NavLink> */}
      </div>
      <div>
        <p>lorem Your requiremnts.</p>
        <p>Sit back for multiple suppliers to contact you.</p>
        <p>Choose among the suppliers based on the ratings and reviews.</p>
      </div>
    </div>
  );
};

export default Supplier;
