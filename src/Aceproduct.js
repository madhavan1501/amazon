import React from "react";

const Aceproduct = ({
  title1 = "title",
  title2 = "title",
  title3 = "title",
  title4 = "title",
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  heading = "title",
  linkTo1 = "/",
  linkTo2 = "/",
  linkTo3 = "/",
  linkTo4 = "/",
  linkTo5 = "/",
}) => {
  return (
    <div className="space-y-4 w-[300px] h-[360px] box-content bg-white p-6  shadow-2xl ">
      <h1 className="text-xl w-full h-16 font-bold overflow-hidden">
        {heading}
      </h1>
      <div className="grid grid-cols-2 h-[250px] w-[300px] gap-2 overflow-hidden">
        <a href={linkTo1}>
          <img
            src={imgSrc1}
            alt="image"
            className="object-contain object-center hover:cursor-pointer"
          />
          <p className="text-slate-800 h-6 text-xs ">{title1}</p>
        </a>
        <a href={linkTo2}>
          <img
            src={imgSrc2}
            alt="image"
            className="object-contain object-center hover:cursor-pointer"
          />
          <p className="text-slate-800 h-6 text-xs ">{title2}</p>
        </a>
        <a href={linkTo3}>
          <img
            src={imgSrc3}
            alt="image"
            className="object-contain object-center hover:cursor-pointer"
          />
          <p className="text-slate-800 h-6 text-xs ">{title3}</p>
        </a>
        <a href={linkTo4}>
          <img
            src={imgSrc4}
            alt="image"
            className="object-contain object-center hover:cursor-pointer"
          />
          <p className="text-slate-800 h-6 text-xs ">{title4}</p>
        </a>
      </div>
      <a
        href={linkTo5}
        className="inline-block text-blue-600  hover:text-orange-500 hover:cursor-pointer"
      >
        See all offers
      </a>
    </div>
    // <Outlet></Outlet>
  );
};

export default Aceproduct;
