import React, { useState } from "react";

const Toggle = () => {
  const [status, setStatus] = useState(true);

  return (
    <div>
      <div className="text-[20px] sm:text-[20px] md:text-[30px] pr-5">
        <button
          className="border-b-[4px] border-amber-600 font-bold text-amber-600"
          onClick={() => setStatus(false)}
        >
          Buyer
        </button>
        <button
          className="pl-[60px] sm:pl-[100px] font-bold text-white"
          onClick={() => setStatus(true)}
        >
          Supplier
        </button>
        {status ? (
          <div className="text-[15px] sm:text-[20px]">
            <div className="flex my-5">
              <span>
                <img className="w-[15px] sm:w-[15px] md:w-[20px]" src="./checked.png" />
              </span>{" "}
              <span className="mx-4 md:text-[100%] text-[100%] sm:text-[18px] text-white"> Post Your requiremnts.</span>
            </div>
            <div className="flex my-5">
              <span>
                <img className="w-[15px] sm:w-[25px] md:w-[20px]" src="./checked.png" />
              </span>{" "}
              <span className="mx-4 md:text-[100%] text-[100%] sm:text-[18px] text-white">
                Sit back for multiple suppliers to contact you.
              </span>
            </div>

            <div className="flex my-5">
              <span className="sm:pr-[10px]">
                <img className="w-[20px] sm:w-[35px] md:w-[20px]" src="./checked.png" />
              </span>{" "}
              <span className="mx-4 md:text-[100%] text-[100%] sm:text-[18px] text-white">
                Choose among the suppliers based on the ratings and reviews.
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Toggle;
