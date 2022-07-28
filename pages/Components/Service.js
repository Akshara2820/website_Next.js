import React from "react";
import { RiComputerFill } from "react-icons/ri";

function Service() {
  return (
    <>
      <div className="contanier px-6 mt-20" id="service">
        <div className="flex items-center justify-between service">
          <div className="w-[40%] service-main ">
            <h3 className="text-2xl text-blue-500  font-Quicksand font-semibold ">
              Our Service
            </h3>
            <h1 className="service-heading text-[55px] font-semibold ">
              Perfect and Fast <br></br> Movement
            </h1>
            <p className="service-paragraph font-Quicksand font-normal text-[14px] sm:text-[20px] text-[#464646] ">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
          </div>
          <div className='sm:w-[50%] sm:my-6 ' >
          <div className=''>
            
            <div className='flex service_card1 justify-center gap-7 my-6'>
              <div className='service_card animation-service'>
                <div className=' flex justify-center'><img src='./Monitor.png' alt='logind..' /></div>
                <div className='text-center mt-6  font-Quicksand font-bold  text-sm md:text-xl sm:text-2xl text-[#1D1D1D]'>Social Media Management</div>
              </div>
              
              <div className='service_card animation-service'>
                <div className=' flex justify-center'><img src='./Setting.png' alt='logind..' /></div>
                <div className='text-center mt-6  font-Quicksand font-bold  text-sm md:text-xl sm:text-2xl text-[#1D1D1D]'>Search Engine Optimization</div>
              </div>
            </div>
            
            <div className='flex service_card2 justify-center gap-7 my-6'>
              <div className='service_card animation-service'>
                <div className=' flex justify-center'><img src='./Design.png' alt='logind..' /></div>
                <div className='text-center mt-6  font-Quicksand font-bold  text-sm md:text-xl sm:text-2xl text-[#1D1D1D]'>Design</div>
              </div>
              
              <div className='service_card animation-service'>
                <div className=' flex justify-center'><img src='./Ads.png' alt='logind..' /></div>
                <div className='text-center mt-6  text-sm md:text-xl sm:text-2xl font-Quicksand font-bold  text-[#1D1D1D]'>Ads</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default Service;
