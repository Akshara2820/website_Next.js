import React from "react";

function Home1() {
  return (
    <>
      <div>
        <h1 className="heading-home mx-auto">
          Make your dream <br></br>business goal come true
        </h1>
        <h3 className="head2 mx-auto -mt-10">
          when you need us for imporve your business, <br></br>then come with us to help
          your business have reach it, you just sit and feel that goal
        </h3>

        <div className="mt-10 mx-auto text-center">
          <button className=" start-project ">Start Project</button>
          <img
            className="home-img w-[fit-content] mx-auto relative mt-14"
            src="./Home.png"
            alt="Loading...."
          />
        </div>
      </div>
    </>
  );
}

export default Home1;
