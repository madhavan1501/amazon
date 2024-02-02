import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ heading = "title", imgSrc = "hi", linkTo = "/" }) => {
  return (
    <div className="space-y-2 w-[250px] h-[260px] box-content bg-white p-4  shadow-2xl min-[500px]:w-[200px] min-[500px]:h-[280px] min-[700px]:w-[250px] min-[700px]:space-y-4 min-[700px]:h-[300px]    min-[880px]:w-[200px] min-[1000px]:w-[250px]  min-[1200px]:h-[350px] min-[1400px]:w-[300px] min-[1400px]:h-[360px] min-[1400px]:p-6">
      {/* space-y-4 w-[300px] h-[360px] box-content bg-white p-6  */}
      <h1 className="text-lg  w-full h-14 font-semibold overflow-hidden min-[1400px]:text-xl min-[1400px]:h-16 min-[1400px]:font-bold">
        {/* text-xl  w-full h-16 font-bold overflow-hidden */}
        {heading}
      </h1>
      <Link to={linkTo}>
        <img
          src={imgSrc}
          alt="img"
          className="object-contain object-center h-[180px] w-[300px] hover:cursor-pointer min-[700px]:h-[200px] min-[1200px]:h-[250px] min-[1300px]:w-full min-[1400px]:h-[250px]"
        />
      </Link>
      <Link
        to={linkTo}
        className="inline-block text-blue-600 hover:text-orange-500 hover:cursor-pointer min-[1400px]:text-lg"
      >
        See all offers
      </Link>
    </div>
  );
};

export default SingleProduct;
