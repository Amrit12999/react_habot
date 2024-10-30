import React from 'react'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import Button from "./Button";
import SideButton from "./SideButton";
import ReactPlayer from "react-player";
import Buyer from "./Buyer";
import Supplier from "./supplier";
import Card from "./Card";
import { MdManageAccounts } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "./Footer";
import { HiArrowLongRight } from "react-icons/hi2";
import About from "./About";
import { BiFile } from "react-icons/bi";
import { FaFileSignature } from "react-icons/fa";
import Toggle from './Toggle';

const Home = () => {
  return (
  
        <>

        <div className="w-[1900px] ">
          <Navbar />
          <section
            className="bg-[url(/bg1.jpg)] bg-no-repeat bg-bottom h-[650px]
       relative"
          >
            <div className="bg-sky-200 h-[650px] brightness-[30%] opacity-70"></div>
            <div className="text-white absolute  top-[20%] left-[50%] translate-x-[-50%] font-medium text-center">
              <h1 className="text-[80px] flex-nowrap">Are You a Supplier?</h1>
              <h4 className="text-[65px] my-[0px] font-normal flex-nowrap font-roboto">
                Explore Mtching Opportunities.
              </h4>
            </div>
            <div className="absolute flex gap-2 top-[50%] w-[60%] mx-auto mt-20 left-[20%]">
              <span className="absolute top-[40%] left-[1%] text-orange-600">
                <BsBriefcaseFill />
              </span>
              <input
                className="p-4 px-8 w-[500px] rounded-md"
                type="text"
                placeholder="Search your required service here"
              />
              <span className="absolute top-[40%] left-[45%] text-orange-600">
                <FaLocationDot />
              </span>
              <input
                className="w-[500px] p-4 px-8 rounded-md"
                placeholder="Search your desired location here"
              />
              <button className="bg-green-700 text-white p-5 px-10 font-medium rounded-md hover:bg-white hover:text-green-700">
                Search
              </button>
            </div>
            <div className="absolute top-[80%] left-[37%] w-[800p] text-white ">
              <span className="font-medium text-[20px] mr-4">
                Are You a buyer?
              </span>
              <span className=" text-[20px] border-b-white border-b-[1px]">
                Click here if you are looking to pots a requirements
              </span>
            </div>
          </section>

          <section className="h-[1400px] bg-white">
            <div className="flex justify-evenly py-16">
              <div className="w-[40%] py-4">
                <h2 className="text-[40px] font-bold my-8 ">
                  Ready to dive into
                  <span className="text-violet-950">HABOT?</span>
                </h2>
                <p className="my-10 text-xl font-roboto">
                  Signing up with HABOT opens the door to the world of new
                  opportunities <br /> and potential for business growth.Gain
                  access to a vibrant community
                  <br /> of like-minded individuals, Unlock valuabl resources,
                  and take the first <br /> step towards realizing your
                  entrepreneurial dreams.
                </p>
                <Button
                  className="bg-black hover:bg-slate-400"
                  bgColor="#009E60"
                  tColor="white"
                  text="sign up Today!"
                  icon={<HiArrowLongRight />}
                />
              </div>
              <div className="w-[40%] my-10 gap-2 flex justify-evenly flex-wrap ">
                <SideButton name={(name = "Abu Dhabi")} />
                <SideButton name={(name = "Dubai")} />
                <SideButton name={(name = "Sharjah & Ajman")} />
                <SideButton name={(name = "Fujairah")} />
                <SideButton name={(name = "Ras Al Khaimah")} />
                <SideButton name={(name = "Umm Al Quwain")} />
              </div>
            </div>

            <div className="w-[84%] mr-44 rounded-md h-[800px]  bg-[#152f52] mx-auto flex items-center justify-evenly">
              <div className="ml-[30px] h-[450px]  w-[800px] rounded-md">
                <ReactPlayer
                  height="450px"
                  width="800px"
                  style={{ borderRadius: "20px" }}
                  url={"https://youtu.be/i8tgRHXx4oQ?si=hXJpfJ8RbCusUnl_"}
                />
              </div>

              <div className="w-[32%] ml-[20px] h-[45%]">
                
          
               {/* <Buyer/> */}
               <Toggle/>
          {/* <Supplier/> */}
                
              </div>
            </div>
          </section>

          <section className="h-[1550px] ">
            <div className="h-[300px] flex justify-around items-center bg-cyan-100">
              <h3 className="text-[40px] font-roboto font-bold">
                Lets Suppliers{" "}
                <span className="border-b-4 border-orange-600 ">Find You</span>
              </h3>
              <button className="border-2 font-medium text-white text-[20px] bg-amber-700 p-4 px-16 rounded-md hover:bg-amber-600 hover:text-white ">
                Get Verified
              </button>
            </div>

            <div className="mt-[150px]">
              <p className="text-center text-[40px] font-extrabold font-roboto">
                How it works?
              </p>
              <p className="text-center mt-[30px] text-[20px] font-[400] w-[900px] mx-auto">
                Buyer post their needs and review top suppliers, while suppliers
                complete profiles, connect with potential buyers, and build
                successful business relationship, sharing valuable feedback.
              </p>
            </div>
            <div className="w-[75%] flex flex-wrap mt-[80px]  mx-auto bg-gray-500">
              <Card
                icon=<MdManageAccounts />
                bgColor="#E0F7FA"
                text="Select your Role and Sign Up"
              />
              <Card
                icon=<BiFile />
                bgColor="white"
                text="Buyer Post Your Requirements"
              />
              <Card
                icon=<AiOutlineFileSearch />
                bgColor="#E0F7FA"
                text="Review,Select,and Contact the Best Suppliers"
              />
              <Card
                icon=<MdManageAccounts />
                bgColor="white"
                text="Suppliers Complete Your profile and get notified for opportunities"
              />
              <Card
                icon=<FaFileSignature />
                bgColor="#E0F7FA"
                text="Contact to Buyers and Share your Quote for the service"
              />
              <Card
                icon=<FaHandshake />
                bgColor="white"
                text="Both the Parties can Connect and Make Business Leave a Feedback"
              />
            </div>
          </section>
          <Footer />
        </div>
        <div> </div>
        </>
    
  )
}

export default Home