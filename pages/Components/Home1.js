import React from "react";

function Home1() {
  return (
    <>
      <div className="container">
        <h1 className="heading-home  text-[#1D1D1D] dark:text-[#E2E2E2] font-extrabold text-center mx-auto">
          Make your dream <br></br>business goal <br></br>come true
        </h1>
        <h3 className="head2  ark:text-[#E2E2E2] font-extrabold text-center mx-auto">
          when you need us for imporve your business, <br></br>then come with us
          to help your business have reach it, you just sit and feel that goal
        </h3>

        <div className="mt-10 mx-auto text-center">
          <button className=" start-project bg-[#377DFF] dark:bg-[#E2E2E2] text-[#FFFFFF] dark:text-[#0E0E0E] block mx-auto mt-9 py-2 px-7 rounded-[50px] drop-shadow-blue">
            Start Project
          </button>
          {/*
          <span className="mx-auto bg-white py-5 px-4 rounded-2xl shadow-lg absolute z-10 -ml-[500px] mt-40">
            <div className="flex my-2">
              <img className="" src="./Star.png" alt="loding.." />
              <span className="mx-4 font-Quicsand font-bold text-lg opacity-50 text-[#1D1D1D]">
                GREAT PROJECT
              </span>
            </div>
            <div className="flex gap-1 items-center my-2">
              <p className="text-[24px] font-extrabold">800+</p>
              <p className="text-[24px] font-semibold">DONE</p>
            </div>
          </span>*/}

          {/*       <img className="blue_dots ml-[1300px] z-10" src="./Animation2.png"/>  */}
          <div className=''><img className="mx-auto  py-10 px-6 sm:py-20 sm:px-6" src='./Home.png' alt='home_img_error' /></div>
            

          {/*
          <span className=' homeCard mx-auto bg-white py-5 px-7 rounded-2xl shadow-lg absolute z-10 -mt-44 ml-[300px] '>
          <div className='flex'>
            <div className='mt-2 mx-2'><img src='./homeCard.png' alt='logo-error' /></div>
            <div>
              <h6 className="text-xs">Bill Adams</h6>
              <div className="text-xs"> ceo</div>
            </div>
          </div>
          <div className='mt-4 w-[125px] text-[10px] text-left'> This team is really the best in its field I don't regret working with them and will come back again thanks </div>
  </span> */}
        </div>
      </div>
    </>
  );
}

export default Home1;
