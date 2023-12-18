import React from "react";

const ProductSliderOne = ({ sliderOne }) => {
  return (
    <div className="p-8 w-[100vw]">
      <div className="w-full bg-white shadow-2xl px-6 py-2 overflow-hidden ">
        <div className="flex  items-center">
          <h1 className="text-2xl font-semibold">Trending deals</h1>{" "}
          <a href="/" className="text-base text-blue-600 m-4 ">
            See all deals
          </a>
        </div>
        <div className="flex space-x-2 overflow-x-scroll ">
          {sliderOne.map((e, i) => (
            <div className="p-1 " key={i}>
              <div className="h-52 w-60 bg-slate-50 grid place-items-center">
                <img src={e.imgSrc} className="object-contain " alt="img" />
              </div>
              <div className="text-sm font-semibold">
                <div className="flex  items-center ">
                  <h1 className="text-white bg-red-600  p-1 text-xs rounded-sm ">
                    {e.price}
                  </h1>
                  <span className="text-red-600 m-2">
                    Great Indian Festival
                  </span>
                </div>
                <p className="text-xs">{e.heading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSliderOne;
