import React from "react";
import { RiComputerFill } from "react-icons/ri";

function Service() {
  return (
    <>
      <div className="contanier px-6 mt-20" id="service">
        <div className="flex justify-between items-center">
          <div className="w-[40%] ml-[200px]">
            <h3 className="text-2xl text-blue-500 font-Quicksand font-semibold ">
              Our Service
            </h3>
            <h1 className="service-heading text-[55px]">
              Perfect and Fast Movement
            </h1>
            <p className=" service-paragraph text-[20px] text-gray-400 ">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
          </div>
          {/* <div className="w-[56%] my-6">
            <div className="flex gap-10 justify-center  ">
              <div>
                <div className="border-2 border-[#8181811] hover:shadow-lg rounded-[30px] w-[250px] h-[250px] mx-auto">
                 <img className="mt-6 ml-16" src="./Monitor.png"/>
                  <h3 className="box-management mt-6   ml-10  font-Quicksand font-semibold text-2xl">
                    Social Media Management
                  </h3>
                </div>
                <div className="border-2 border-[#8181811] hover:shadow-lg rounded-[30px] w-[250px] h-[250px] mx-auto mt-6">
                  <img className="mt-6 ml-16" src="./Design.png"/>
                  <h3 className="box-management  mt-6  ml-16 font-Quicksand font-semibold text-2xl">
               
                  Design
                  </h3>
                </div>
              </div>
              <div className="">
                <div className="border-2 border-[#8181811] hover:shadow-lg rounded-[30px] w-[250px] h-[250px] mx-auto">
                 <img className="mt-6 ml-16" src="./Setting.png"/>
                  <h3 className="box-management mt-6   ml-10  font-Quicksand font-semibold text-2xl">
                  Search Engine Opimization
                  </h3>
                </div>
                <div className="border-2 border-[#8181811] hover:shadow-lg rounded-[30px] w-[250px] h-[250px] mx-auto mt-6">
                 <img className="mt-6 ml-16" src="./Ads.png"/>
                  <h3 className="box-management mt-6   ml-20  font-Quicksand font-semibold text-2xl">
                    Ads
                  </h3>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </>
  );
}

export default Service;
