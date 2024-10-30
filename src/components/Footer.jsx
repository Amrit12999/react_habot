import React from "react";
import About from "./About";
import { NavLink,Link, Routes } from "react-router-dom";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import FAQ from "./FAQ";

const Footer = () => {
  return (

    
    <>
  
      <footer className="h-[280px] bg-[#152f52] mb-3 flex items-center">
        <div className="w-[75%] h-[70%] flex justify-between mx-auto  border-y-2 border-gray-500">
          <div className="w-[60%] text-white">
            <div className="mt-6 flex justify-evenly">
              <div className="mt-5 ml-[-40px]">
                <img src="./logo.png" className="bg- h-[90px]" />
                <div className="text-gray-300 pl-4">&copy; R Singhania</div>
              </div>

              <div className="mt-4">
                <p>Company</p>
                <ul className="text-gray-300">
                  <li className="my-2"><NavLink to='/about'>About</NavLink></li>
                  <li><NavLink to="faq">FAQ</NavLink></li>
                </ul>
              </div>
              <div className="mt-4">
                <p>Terms</p>
                <ul className="text-gray-300">
                  <li className="my-2"><NavLink to="/data">Data Privacy </NavLink></li>
                  <li className="mb-2"><NavLink to="/terms">Terms</NavLink></li>
                  <li><NavLink to="/accessbility">Accessibility</NavLink></li>
                </ul>
              </div>
              <div className="mt-4">
                <p>Related</p>
                <ul className="text-gray-300">
                  <li className="my-2"><NavLink to="/find">Find Buyer</NavLink></li>
                  <li className="mb-2"><NavLink to="/feedback">Feedback</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center"><ul className="flex text-white  gap-4">
            <li className="border-[1px]  border-gray-500 rounded-full p-2"><NavLink to="https://in.linkedin.com/company/habot-connect"><BiLogoLinkedin /></NavLink></li>
            <li className="border-[1px] border-gray-500 rounded-full p-2"><NavLink  to="https://x.com/Varalconsult/status/1499316147669381130"><FaTwitter /></NavLink></li>
            <li className="border-[1px] border-gray-500 rounded-full p-2"><NavLink to="https://www.facebook.com/habotconnect/"><FaFacebookF /></NavLink></li>
            <li className="border-[1px] border-gray-500 rounded-full p-2"><NavLink to="https://www.instagram.com/habotconnect/"><FaInstagram /></NavLink></li>
          </ul></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
