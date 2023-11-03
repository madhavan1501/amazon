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
}) => {
  return (
    <div className="space-y-4 w-[300px] h-[360px] box-content bg-white p-6  shadow-2xl ">
      <h1 className="text-xl w-full h-16 font-bold overflow-hidden">
        {heading}
      </h1>
      <div className="grid grid-cols-2 h-[250px] w-[300px] gap-2 overflow-hidden">
        <div>
          <img
            src={imgSrc1}
            alt="image"
            className="object-contain object-center"
          />
          <p className="text-slate-800 h-6 text-xs ">{title1}</p>
        </div>
        <div>
          <img
            src={imgSrc2}
            alt="image"
            className="object-contain object-center"
          />
          <p className="text-slate-800 h-6 text-xs ">{title2}</p>
        </div>
        <div>
          <img
            src={imgSrc3}
            alt="image"
            className="object-contain object-center"
          />
          <p className="text-slate-800 h-6 text-xs ">{title3}</p>
        </div>
        <div>
          <img
            src={imgSrc4}
            alt="image"
            className="object-contain object-center"
          />
          <p className="text-slate-800 h-6 text-xs ">{title4}</p>
        </div>
      </div>
      <a className="block">See all offers</a>
    </div>
  );
};

export default Aceproduct;
