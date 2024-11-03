import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Button from "./Button";
import SideButton from "./SideButton";
import ReactPlayer from "react-player";
import Card from "./Card";
import { MdManageAccounts } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "./Footer";
import { HiArrowLongRight } from "react-icons/hi2";
import { BiFile } from "react-icons/bi";
import { FaFileSignature } from "react-icons/fa";
import Toggle from "./Toggle";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden w-[370px] sm:w-[100vw]">
        <Navbar />
        <section
          className="bg-[url(/bg1.jpg)] bg-no-repeat bg-bottom h-[600px] sm:h-[650px]
       relative"
        >
          <div className="bg-sky-200 h-[600px] sm:h-[650px] brightness-[30%] opacity-70"></div>
          <div className="text-white absolute ml-0 sm:ml-0 md:ml-[110px] top-[20%] left-[46%] translate-x-[-50%] font-medium text-center">
            <h1 className="text-[20px] sm:text-[40px] md:text-[80px] flex-nowrap">
              Are You a Supplier?
            </h1>
            <h4 className="text-[13px] flex-nowrap sm:text-[28px] md:text-[65px] my-[0px] font-normal sm:flex-nowrap font-roboto">
              Explore Mtching Opportunities.
            </h4>
          </div>
          <div className="left-[8%] top-[30%] absolute sm:flex gap-2 sm:top-[50%] sm:w-[86%] md:w-[60%] w-[60%] mx-auto mt-20 sm:left-[7%] md:left-[20%]">
            <span className="absolute top-[11%] left-[2%] sm:top-[40%] sm:left-[1%] text-orange-600">
              <BsBriefcaseFill />
            </span>
            <input
              className="mb-[12px] w-[300px] p-3 sm:pl-8 md:p-4 px-8 sm:w-[500px] md:text-[15px] sm:text-[13px] sm:mb-0 rounded-md"
              type="text"
              placeholder="Search your required service here"
            />
            <span className="absolute top-[46%] left-[2%] sm:top-[40%] sm:left-[42%] md:left-[45%] text-orange-600">
              <FaLocationDot />
            </span>
            <input
              className="w-[300px] p-3 sm:pl-8 md:p-4 px-8 sm:w-[500px] rounded-md sm:text-[13px] md:text-[15px]"
              placeholder="Search your desired location here"
            />
            <button className="p-3 px-[126px] mt-4 bg-green-700 text-white sm:p-5 sm:px-10 sm:mt-0 font-medium rounded-md hover:bg-white hover:text-green-700">
              Search
            </button>
          </div>
          <div className="absolute top-[80%] left-[15%] sm:left-[16%] md:left-[37%] w-[800p] text-white ">
            <span className="font-medium ml-14 text-[15px] sm:text-[20px] sm:ml-0 mr-4">
              Are You a buyer?
            </span>
            <span className=" block ml-[-42px] text-[14px] sm:text-[] md:text-[20px] sm:inline border-b-white sm:ml-0 border-b-[1px]">
              Click here if you are looking to pots a requirements
            </span>
          </div>
        </section>

        <section className="mb-10 sm:mb-0 h-[1400px] mt-[-50px] sm:mt-0 bg-white">
          <div className="sm:flex justify-evenly py-16">
            <div className="w-[40%] py-4 mr-[-50px]">
              <h2 className="pl-5 w-[400px] text-[25px] sm:pl-0 sm:text-[25px] md:text-[40px] sm:w-full font-bold my-8 ">
                Ready to dive into
                <span className="text-violet-950"> HABOT?</span>
              </h2>
              <p className=" pl-5 w-[300px] flex-nowrap text-sm my-10 mt-0 md:-mt-0 sm:mt-[-22px] sm:text-md md:text-xl sm:pl-0 sm:w-full font-roboto">
                Signing up with HABOT opens the door to the world of new
                opportunities <br /> and potential for business growth.Gain
                access to a vibrant community
                <br /> of like-minded individuals, Unlock valuabl resources, and
                take the first <br /> step towards realizing your
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
            <div className="flex flex-wrap ml-4 w-[320px] sm:w-[58%] md:w-[40%] h-[200px] sm:ml-0 my-10 gap-2 sm:flex justify-evenly sm:flex-wrap ">
              <SideButton name={(name = "Abu Dhabi")} />
              <SideButton name={(name = "Dubai")} />
              <SideButton name={(name = "Sharjah & Ajman")} />
              <SideButton name={(name = "Fujairah")} />
              <SideButton name={(name = "Ras Al Khaimah")} />
              <SideButton name={(name = "Umm Al Quwain")} />
            </div>
          </div>

          <div className="w-[330px] h-[580px] sm:w-[84%] mr-44  rounded-md sm:h-[55 0px] md:h-[800px]  bg-[#152f52] ml-4 sm:mx-auto sm:flex items-center justify-evenly">
            <div className="ml-2 px-4 pt-8 sm:ml-[10px] md:ml-[30px] h-[300px] w-[320px] sm:h-[350px] md:h-[450px] sm:w-[300px] md:w-[800px] sm:rounded-md">
              <ReactPlayer
                className="react"
                height="100%"
                width="100%"
                style={{ borderRadius: "20px" }}
                url={"https://youtu.be/i8tgRHXx4oQ?si=hXJpfJ8RbCusUnl_"}
              />
            </div>

            <div className="mt-8 ml-10 w-[100%] sm:w-[42%] md:w-[32%] sm:ml-[10px] md:ml-[20px] h-[45%]">
              {/* <Buyer/> */}
              <Toggle />
              {/* <Supplier/> */}
            </div>
          </div>
        </section>

        <section className="h-[2250px] mt-0 md:mt-0 sm:mt-[-150px] sm:h-[1500px] md:h-[1550px] ">
          <div className="h-[150px] sm:h-[300px] grid sm:flex justify-around items-center bg-cyan-100">
            <h3 className="text-[20px] sm:text-[30px] md:text-[40px] font-roboto font-bold">
              Lets Suppliers{" "}
              <span className="border-b-4 border-orange-600 ">Find You</span>
            </h3>
            <button className="border-2 font-medium text-white text-[15px] sm:text-[20px] bg-amber-700 p-3 sm:p-4 px-6 sm:px-16 rounded-md hover:bg-amber-600 hover:text-white ">
              Get Verified
            </button>
          </div>

          <div className="mt-[90px] sm:mt-[80px] md:mt-[150px]">
            <p className="text-center text-[28px] sm:text-[30px] md:text-[40px] font-extrabold font-roboto">
              How it works?
            </p>
            <p className="text-center mt-[30px] text-[14px] sm:text-[16px] md:text-[20px] font-[400]  w-[320px] sm:w-[700px] md:w-[900px] mx-auto">
              Buyer post their needs and review top suppliers, while suppliers
              complete profiles, connect with potential buyers, and build
              successful business relationship, sharing valuable feedback.
            </p>
          </div>
          <div className="w-[88%] sm:h-0 sm:w-[80%] md:w-[75%] flex flex-wrap mt-[80px]  mx-auto bg-white">
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
  );
};

export default Home;
