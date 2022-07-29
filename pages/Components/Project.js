import React from "react";

function Project() {
  return (
<>
      <div className="service-contaner mx-auto my-40 " id="project">
        <div>
          <h3 className="text-center text-2xl sm:text-[28px] text-[#377DFF] dark:text-[#E2E2E2] font-[Quicksand] mt-44 font-bold">
            Our Portfolio
          </h3>
         
          <h1 className="heading-home mx-auto -mt-10">What do we do</h1>
          <h3 className="head2 mx-auto -mt-10">
            all projects that we have already done ,<br></br> proven can help to use more
            comfortable, then can used by client from our business
          </h3>
          <div className="project-card gap-10 mt-10 flex items-center  text-center">
            
            <div className="project-card2">
              <img src="./project1.png" />
              <h3 className="text-2xl -mt-14 ml-4 text-white font-semibold font-Quicksand"> Design Byte App </h3>
            </div>
            
            <div className="project-card2">
              <img src="./project2.png" />
              <h3 className="text-2xl -mt-14 ml-4 text-white font-semibold font-Quicksand"> Cloud App </h3>
            </div>
            
            <div className="project-card2">
              <img src="./project3.png" />
              <h3 className="text-2xl -mt-14 ml-4 text-white font-semibold font-Quicksand"> Design Furniture App </h3>
            </div>
            
          </div>
          
          {/* <div>
          <button className="project-button text-[#377DFF]  border-[1px] border-[#377DFF] py-3 px-10 rounded-full ">
          See All Portfolio
         </button>
          </div> */}
         
        </div>
      </div>
    </>
  );
}

export default Project;
