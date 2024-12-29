import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

import banner from "../../../src/assets/home/featured.jpg";

import "../Featured/Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed my-28 text-white pt-10">
      <SectionTitle
        heading="Featured Item"
        subHeading="Check it Out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-opacity-45">
        <div>
          <img src={banner} alt="" />
        </div>
        <div className="md:ml-10">
          <p>April 06, 2025</p>
          <p className="uppercase">Where Can i get Some?</p>
          <p className="text-wrap">
            To showcase your restaurant's culinary delights on your website, you
            need high-quality food photography. You can hire a professional food
            photographer for exceptional quality and creative direction, but
            this can be costly. DIY food photography is cost-effective and gives
            you creative control, but requires time and technical skills.
          </p>
          <button className="mt-4 btn btn-outline btn-primary border-0 border-b-8">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
