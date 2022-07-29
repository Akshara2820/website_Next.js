import React from "react";

function Project() {
  return (
    <>
      <div className="contaner mx-auto my-40 " id="project">
        <div>
          <h3 className="text-center text-2xl sm:text-[28px] text-[#377DFF] dark:text-[#E2E2E2] font-[Quicksand] mt-44 font-bold">
            Our Portfolio
          </h3>
         
          <h1 className="heading-home mx-auto -mt-10">What do we do</h1>
          <h3 className="head2 mx-auto -mt-10">
            all projects that we have already done , proven can help to use more
            comfortable, then can used by client from our business
          </h3>
      {/*    <img className="Animation ml-[1200px] -mt-24" src="./Animation1.png"/> */}
          <div className="flex gap-16 items-center ml-96 mt-24">
            <div className="relative hover:rotate-3">
              <img src="./project1.png" />
              <h3 className="text-2xl -mt-14 ml-4 text-white font-semibold font-Quicksand"> Design Byte App </h3>
            </div>
            <div className="relative  hover:rotate-3">
              <img src="./project2.png" />
              <h3 className="text-2xl -mt-14 ml-4 text-white font-semibold font-Quicksand"> Cloud App </h3>
            </div>
            <div className="relative  hover:rotate-3">
              <img src="./project3.png" />
              <h3 className="text-2xl -mt-14 ml-4 text-white font-semibold font-Quicksand"> Design Furniture App </h3>
            </div>
            
          </div>
          <button className="project-button text-[#377DFF]  border-[1px] border-[#377DFF] py-3 px-10 rounded-full ">
          See All Portfolio
         </button>
         
        </div>
      </div>
    </>
  );
}

export default Project;
