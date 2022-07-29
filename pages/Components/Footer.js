import React from "react";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className=" bg-[#383638] sm:pt-16">
        <div className="mx-auto px-6 pt-2 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between gap-12 flex-wrap my-6">
            <div className="w-[fit-content] flex bg-white rounded-lg mt-4 px-6 py-3 sm:mb-[230px]">
              <div className="mt-2 mr-3">
                <img src="./MainLogo.png" width={40} alt="logo-error" />
              </div>
              <div>
                <div className="font-semibold text-[20px] font-Quicksand">
                  Agency
                </div>
                <div className="font-Quicksand">Creative</div>
              </div>
            </div>
            <div>
              <div className="text-white text-[22px] font-bold font-Quicksand py-3">
                Terms & Policies
              </div>
              <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
                Terms & Policies
              </div>
              <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
                Privacy Policy
              </div>
            </div>
            <div>
              <div className="text-white text-[22px] font-bold font-Quicksand py-3">
                Company
              </div>
              <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
                Home
              </div>
              <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
                About Us
              </div>
              <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
                Contact Us
              </div>
            </div>
            <div>
              <div className="text-white text-[22px] font-bold font-Quicksand py-3">
                ContactContact{" "}
              </div>
              <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
                {" "}
                (+62) 893912392190
              </div>
              <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
                agecnycr@gmail.com
              </div>
            </div>
            <div>
              <div className="text-white text-[22px] font-bold font-Quicksand py-3">
                Location
              </div>
              <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
                PT Osiris Real Estate Internasional
              </div>
              <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
                Jl. KH. Wahid Hasyim Kel No.10D
              </div>
              <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
                Jakarta, Indonesia
              </div>
              <div className="text-gray-300 text-[18px] font-bold font-Quicksand py-3">
                team@OsirisRealEstate.com
              </div>
            </div>
          </div>
          <div className="">
            <div className="footer_icon flex justify-center gap-6 ">
              <ul className="flex gap-10 pt-3 mt-24">
                <li>
                  
                  <img src="./Facebook.png" />
                </li>
                <li>
                  <img src="./instagram.png" />
                </li>
                <li>
                  <img src="./Linkdin.png" />
                </li>
                <li>
                  <img src="./Msg.png" />
                </li>
                <li>
                  <img src="./twitter.png" />
                </li>
              </ul>
            </div>

            <hr className="w-[500px] mx-auto  mt-4 footer_hr" />
            <div className="text-gray-300 text-[18px]  pb-20 mt-6 font-Quicksand text-center">
              Copyright @ 2022 Agency Creative. All Right Reserve
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
