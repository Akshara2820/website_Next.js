import React from "react";

function About() {
  return (
    <>
      <div id="about">
        <h3 className="text-center text-2xl sm:text-[28px] text-[#377DFF] dark:text-[#E2E2E2] font-[Quicksand] mt-44 font-bold">
          About Us
        </h3>
        <h1 className=" font-[Nunito] text-center text-[55px]  text-[#1D1D1D]  py-7 "> Our Teammate</h1>
        <div className=" flex">
          <img
            className="w-[fit-content] ml-80"
            src="./About.png"
            alt="loading....."
          />
          <div className="about-paragrah">
            <p className="font-Quicksand text-[20px] text-[#464646] dark:text-[#E2E2E2]">
              We move with make a Creative Strategy for help your 
              business goal, we help to improve your income by a services
              we have. make your content look interesting and make
               people look for your business<br>
               </br>
               <br></br>
             
               We move with make a Creative Strategy for help your 
               business goal, we help to improve your income by a services
               we have. make your content look interesting and make
              people look for your business
              
            </p>
            <div>
              <button className=" start-project mt-10">About Us</button>
              <button className=" ml-6 text-[#377DFF]  border-[1px] border-[#377DFF] py-3 px-10 rounded-full ">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
