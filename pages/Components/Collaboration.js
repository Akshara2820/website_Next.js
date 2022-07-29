import React from "react";

function Collaboration() {
  return (
    <>
      <div className="contanier  mx-auto my-40 px-6 sm:px-1 ">
        <div className="flex justify-between gap-4 items-center">
          <div className="max-w-[44%] ml-[200px]">
            <h1 className="service-heading text-[55px] font-semibold ">
              Interesting Collaboration With Us?
            </h1>
            <p className="text-xl  text-[#464646]  font-Quicksand">
              Help you to reach your business goal
            </p>
            <button className=" start-project mt-10">Get Started</button>
          </div>
          <div className="relative overflow-hidden min-h-[200px] flex">
            <img className=" mt-14 " src="./Collabration1.png" />
            <img className="h-fit" src="./Collabration2.png" />
            <img className="blue_dots absolute z-10" src="./Animation2.png" />
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Collaboration;
