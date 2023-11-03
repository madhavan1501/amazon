import React from "react";

const SingleProduct = ({ heading = "title", imgSrc = "hi" }) => {
  return (
    <div className="space-y-4 w-[300px] h-[360px] box-content bg-white p-6  shadow-2xl ">
      <h1 className="text-xl  w-full h-16 font-bold overflow-hidden">
        {heading}
      </h1>
      <img
        src={imgSrc}
        alt="image"
        className="object-contain object-center h-[250px] w-[300px]"
      />
      <a className="block">See all offers</a>
    </div>
  );
};

export default SingleProduct;
