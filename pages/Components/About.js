import React from "react";

function About() {
  return (
    <>
      <div id="about">
        <h3 className="about-blue text-2xl text-center  text-[#377DFF] font-[Nunito] font-bold mt-10 ">
          About Us
        </h3>
        <h1 className=" heading-about font-[Nunito] text-center text-[50px]  text-[#1D1D1D]  py-7 ">
          Our Teammate
        </h1>
        <div className="about-paragraph container flex justify-center mx-auto gap-12 flex.5  ">
           <div className="">
            <img className=" " src="./About.png" alt="loading....." />
          </div> 

          <div className="flex.5 unset">
            <p className="">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <br></br>
            <p className="">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <div className="flex justify-center gap-3">
              <button className=" start-project mt-10">About Us</button>
              <button className=" start-project1 mt-10  ">Our Story</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
