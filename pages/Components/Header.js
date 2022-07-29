import React from "react";
import Link from "next/link";

function Header() {
  return (
    <>
      <section className="container mx-auto pt-5 ">
        <div className="flex items-center justify-between">
          <div className=" tittle-logo  w-[183px] h-[68px] rounded-lg px-4 py-2 flex gap-3 items-center">
            <div>
              <img className="tittle-logo box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%" src="./MainLogo.png"></img>
            </div>
            <div>
              <h3 className=" text-[#464646] dark:text-[#E2E2E2] text-base font-Quicksand  ">Agency</h3>
              <h3>Creative</h3>
            </div>
          </div>
          <div className="">
            <ul className=" flex gap-10 pt-3  ">
              <Link href="/">
                <a className="nav_link font-Quicksand text-lg text-[#1D1D1D] dark:text-[#fff] ease-in-out duration-300 hover:-mt-[2px]">
                  Home
                </a>
              </Link>
              <Link href="#about">
                <a className="nav_link font-Quicksand text-lg text-[#1D1D1D] dark:text-[#fff] ease-in-out duration-300 hover:-mt-[2px]">
                  About
                </a>
              </Link>
              <Link href="#service">
                <a className="nav_link font-Quicksand text-lg text-[#1D1D1D] dark:text-[#fff] ease-in-out duration-300 hover:-mt-[2px]">
                  Service
                </a>
              </Link>
              <Link href="#project">
                <a className="nav_link  font-Quicksand text-lg text-[#1D1D1D] dark:text-[#fff] ease-in-out duration-300 hover:-mt-[2px]">
                  Project
                </a>
              </Link>
            </ul>
          </div>

          <div className="">
            <h2 className="header-contact text-[#377DFF] dark:text-[#fff] border-[1.5px] border-[#377DFF] dark:border-[#fff] py-2 px-7 rounded-[50px] shadow-[0px 4px 8px rgba(55, 125, 255, 0.5)] w-[140px] ">
              contact us
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
