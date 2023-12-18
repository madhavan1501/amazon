import React from "react";

const SingleProduct = ({ heading = "title", imgSrc = "hi", linkTo = "/" }) => {
  return (
    <div className="space-y-2 w-[250px] h-[260px] box-content bg-white p-4  shadow-2xl min-[500px]:w-[200px] min-[500px]:h-[280px] min-[700px]:w-[280px] min-[700px]:space-y-4 min-[700px]:h-[300px] min-[1100px]:w-[320px] min-[1100px]:h-[350px] min-[1100px]:space-y-6 min-[1300px]:w-[350px] min-[1300px]:h-[380px] min-[1400px]:w-[380px] min-[1500px]:w-[300px] min-[1500px]:h-[360px] min-[1500px]:p-6">
      {/* space-y-4 w-[300px] h-[360px] box-content bg-white p-6  */}
      <h1 className="text-lg  w-full h-14 font-semibold overflow-hidden min-[1500px]:text-xl min-[1500px]:h-16 min-[1500px]:font-bold">
        {/* text-xl  w-full h-16 font-bold overflow-hidden */}
        {heading}
      </h1>
      <a href={linkTo}>
        <img
          src={imgSrc}
          alt="image"
          className="object-contain object-center h-[180px] w-[300px] hover:cursor-pointer min-[700px]:h-[200px] min-[1100px]:h-[250px] min-[1300px]:h-[280px] min-[1300px]:w-full min-[1500px]:h-[250px]"
        />
      </a>
      <a
        href={linkTo}
        className="inline-block text-blue-600 hover:text-orange-500 hover:cursor-pointer min-[1100px]:text-lg"
      >
        See all offers
      </a>
    </div>
  );
};

export default SingleProduct;
