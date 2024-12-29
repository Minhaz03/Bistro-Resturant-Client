import React from "react";

const BistroBanner = () => {
  return (
    <div className="my-10">
      <div
        className="hero bg-fixed h-[550px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/WHKzB1f/restaurant-1284351-1280.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="rounded-lg hero-content text-black p-10 bg-[#FFFFFF] text-center ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
            <p className="mb-5">
              Come dine with us & experience an authentic ______ meal in an
              intimate dining space. We look forward to serving you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistroBanner;
