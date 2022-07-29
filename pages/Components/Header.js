import React from "react";
import Link from "next/link";

function Header() {
  return (
    <>
      <section className="container mx-auto pt-5 ">
        <div className="flex items-center justify-between">
          <div className=" w-[183px] h-[68px] rounded-lg px-4 py-2 flex gap-3 items-center">
            <div>
              <img className="w-12 h-12" src="./MainLogo.png"></img>
            </div>
            <div>
              <img className="tittle-logo box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%" src="./MainLogo.png"></img>
            </div>
            <div>
              <h3 className=" text-[#464646] dark:text-[#E2E2E2] text-base font-Quicksand  ">Agency</h3>
              <h3>Creative</h3>
            </div>
          </div>
          <div>
            <ul className=" Link flex gap-10 pt-3 ">
              <Link href="/">
                <a className="nav_link font-Quicksand text-lg text-[#0e0d0d] hover:-mt-[2px]">
                  Home
                </a>
              </Link>
              <Link href="#about">
                <a className="nav_link font-Quicksand text-lg text-[#1D1D1D] hover:-mt-[2px]">
                  About
                </a>
              </Link>
              <Link href="#service">
                <a className="nav_link font-Quicksand text-lg text-[#1D1D1D] hover:-mt-[2px]">
                  Service
                </a>
              </Link>
              <Link href="#project">
                <a className="nav_link font-Quicksand text-lg text-[#1D1D1D]  hover:-mt-[2px]">
                  Project
                </a>
              </Link>
            </ul>
          </div>

          <div>
            <h2 className=" text-[#377DFF]  border-[1px] border-[#377DFF] py-2 px-7 rounded-full ">
              contact us
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
