import React from "react";

function Peopletalk() {
  return (
    <>
      <div className="container  mx-auto my-12 sm:my-20 px-6">
        <div className="peropletalk_ font-Quicksand font-semibold text-2xl text-[#377DFF] text-center ">
          Testimonial
        </div>
        <div className="sm:flex">
          {/* <div className=" testimonial_dots_image dots_img">
            <img src="./blue_dots.png" alt="loding.."></img>
          </div> */}
          <div className="peopletalk-heading mx-auto">
            People Talk about us
          </div>
        </div>

        <div className="flex sm:gap-10 peopletalk">
          <div className="peopletalk_card shadow-lg rounded-2xl max-w-[370px]  px-10 py-4 sm:px-10 sm:py-12 bg-white peopletalk-hover">
            <div className="sm:flex  flex flex-col items-center gap-5">
              <div className="">
                <img src="./People.png" width={80} alt="logo-error" />
              </div>
              <div className="my-6 mx-4">
                <div className="text-xl font-semibold text-[#377DFF]">
                  Angel Rose
                </div>
                <div className=" text-[#464646] text-xs font-Quicksand">
                  Creative Manager
                </div>
              </div>
            </div>
            <div className=" text-[#464646] font-normal text-lg  font-Quicksand">
              There are many variations passages of Lorem Ipsum majority some by
              words which dont look .{" "}
            </div>
          </div>
          <div className="peopletalk_card shadow-lg rounded-2xl max-w-[370px]  px-10 py-4 sm:px-10 sm:py-12 bg-white peopletalk-hover">
            <div className="sm:flex  flex flex-col items-center gap-5">
              <div className="">
                <img src="./People.png" width={80} alt="logo-error" />
              </div>
              <div className="my-6 mx-4">
                <div className="text-xl font-semibold text-[#377DFF]">
                  Angel Rose
                </div>
                <div className=" text-[#464646] text-xs font-Quicksand">
                  Creative Manager
                </div>
              </div>
            </div>
            <div className="text-[#464646] font-normal text-lg  font-Quicksand">
              There are many variations passages of Lorem Ipsum majority some by
              words which dont look .
            </div>
          </div>
          <div className="peopletalk_card shadow-lg rounded-2xl max-w-[370px]  px-10 py-4 sm:px-10 sm:py-12 bg-white peopletalk-hover">
            <div className="sm:flex  flex flex-col items-center gap-5">
              <div className="">
                <img src="./People.png" width={80} alt="logo-error" />
              </div>
              <div className="my-6 mx-4">
                <div className="text-xl font-semibold text-[#377DFF]">
                  Angel Rose
                </div>
                <div className=" text-[#464646] text-xs font-Quicksand">
                  Creative Manager
                </div>
              </div>
            </div>
            <div className="text-[#464646] font-normal text-lg  font-Quicksand">
              There are many variations passages of Lorem Ipsum majority some by
              words which dont look .
            </div>
            {/* <div className="peopletalk_dots_image blue_dots_image">
              <img
                className="blue_dots"
                src="./blue_dots.png"
                alt="loding..."
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Peopletalk;
