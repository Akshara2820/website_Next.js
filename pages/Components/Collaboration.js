import React from "react";

function Collaboration() {
  return (
    <>
      <div className="service-contanier  mx-auto my-40 px-6 sm:px-1 ">
        <div className="flex justify-between gap-4 items-center">
          <div className="max-w-[44%]">
            <h1 className="service-heading text-[55px] font-semibold ">
            Interesting Collaboration With Us?
            </h1>
            <p className="text-xl  text-[#464646]  font-Quicksand">Help you to reach your business goal</p>
            <button className=" start-project mt-10">Get Started</button>
          </div>
          <div className="relative overflow-hidden min-h-[400px] flex ">
          
          <img className="h-fit mt-14 ml-12 " src="./Collabration1.png"/>
          <img className="h-fit" src="./Collabration2.png"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collaboration;
