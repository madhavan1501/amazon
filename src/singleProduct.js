import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ heading = "title", imgSrc = "hi", linkTo = "/" }) => {
  return (
    <div className="space-y-4 w-[300px] h-[360px] box-content bg-white p-6  shadow-2xl ">
      <h1 className="text-xl  w-full h-16 font-bold overflow-hidden">
        {heading}
      </h1>
      <a href={linkTo}>
        <img
          src={imgSrc}
          alt="image"
          className="object-contain object-center h-[250px] w-[300px] hover:cursor-pointer"
        />
      </a>
      <a
        href={linkTo}
        className="inline-block text-blue-600 hover:text-orange-500 hover:cursor-pointer"
      >
        See all offers
      </a>
    </div>
  );
};

export default SingleProduct;
