import React from "react";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="bg-[#383638]">
        <div className="mx-auto py-20 px-5">
          <div className="justify-between flex">
            <div className="">
              <div className="bg-white w-[183px] h-[68px] rounded-lg px-4 py-2 flex gap-3 ">
                <img src="MainLogo.png" />
                <div>
                  <h3 className="font-bold font-Quicksand ">Agency</h3>
                  <h3>Creative</h3>
                </div>
              </div>
            </div>

            <div className="">
            <h2 className="text-white text-[22px] font-Quicksand font-bold">Terms & Policy</h2>
            <h3 className="text-white text-[20px] font-Quicksand font-bold mt-4">Terms of Service </h3>
            <h3 className="text-white text-[20px] font-Quicksand font-bold  mt-4">Privacy Policy</h3>
            </div>

            <div className="">

            <h2 className="text-white text-[22px] font-Quicksand font-bold">Company</h2>
            <h3 className="text-white text-[20px] font-Quicksand font-bold  mt-4">Home</h3>
            <h3 className="text-white text-[20px] font-Quicksand font-bold  mt-4">About</h3>
            <h3 className="text-white text-[20px] font-Quicksand font-bold  mt-4">Contact Us</h3>
            
            </div>

            <div className="">
            <h2 className="text-white text-[22px] font-Quicksand font-bold">Contact</h2>
            <h3 className="text-white text-[20px] font-Quicksand font-bold  mt-4">(+91) 99912657850</h3>
            <h3 className="text-white text-[20px] font-Quicksand font-bold  mt-4">akshara.skyrockets@gmail.com</h3>
            
            </div>

            <div className="">
            <h2 className="text-white text-[22px] font-Quicksand font-bold">Location</h2>
            <h3 className="text-white text-[20px] font-Quicksand font-bold  mt-4">PT Osiris Real Estate Internasional 
            <br></br>Jl. KH. Wahid Hasyim Kel No.10D Jakarta,<br></br> Indonesia </h3>
            <h3 className="text-white text-[20px] font-Quicksand font-bold  mt-4">team@OsirisRealEstate.com</h3>
            </div>
          </div>
          <div className="">
          <ul className="flex gap-10 pt-3 ml-[750px]  mt-24">
          <li> <img src="./Facebook.png"/></li>
          <li><img src="./instagram.png"/></li>
          <li><img src="./Linkdin.png"/></li>
          <li><img src="./Msg.png"/></li>
          <li><img src="./twitter.png"/></li>
          </ul>
          <hr className="w-[600px] mx-auto mt-4"></hr>
          <p className="text-white text-lg font-Quicksand mt-10 ml-[700px]"> Copyright @ 2022 Agency Creative. All Right Reserved </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Footer;
