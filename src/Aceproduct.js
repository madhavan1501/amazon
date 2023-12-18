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
    <div className="space-y-2 w-[250px] h-[300px] box-content bg-white p-4  shadow-2xl min-[500px]:w-[210px] min-[500px]:p-2 min-[700px]:w-[280px] min-[700px]:p-4 min-[1100px]:w-[320px] min-[1100px]:h-[350px] min-[1300px]:w-[380px] min-[1300px]:h-[380px] min-[1500px]:space-y-4 min-[1500px]:w-[300px] min-[1500px]:h-[360px] min-[1500px]:p-6">
      {/* space-y-4 w-[300px] h-[360px] box-content bg-white p-6  shadow-2xl */}
      <h1 className="text-lg w-full h-14 font-semibold overflow-hidden min-[500px]:text-sm min-[700px]:text-lg min-[1500px]:text-xl min-[1500px]:h-16">
        {/* text-xl w-full h-16 font-bold overflow-hidden */}
        {heading}
      </h1>
      <div className="grid grid-cols-2 h-[200px] w-[250px] gap-2 overflow-hidden min-[500px]:w-[200px] min-[500px]:place-items-center min-[700px]:w-[250px] min-[700px]:gap-0 min-[700px]:items-start  min-[1000px]:w-full  min-[1000px]:gap-2  min-[1000px]:justify-center min-[1100px]:w-[300px] min-[1100px]:h-[250px] min-[1300px]:w-full min-[1300px]:h-[280px] min-[1500px]:h-[250px] min-[1500px]:w-[300px]">
        {/* grid grid-cols-2 h-[250px] w-[300px] gap-2 overflow-hidden */}
        <a
          href={linkTo1}
          className="min-[500px]:w-20  min-[1000px]:w-full grid  min-[1000px]:justify-items-center "
        >
          <img
            src={imgSrc1}
            alt="img"
            className="object-contain object-center hover:cursor-pointer min-[500px]:h-14 min-[1100px]:h-20 "
          />
          <p className="text-slate-800 h-6 text-xs min-[700px]:text-sm min-[1100px]:font-semibold  ">
            {title1}
          </p>
        </a>
        <a
          href={linkTo2}
          className="min-[500px]:w-20  min-[1000px]:w-full grid  min-[1000px]:justify-items-center"
        >
          <img
            src={imgSrc2}
            alt="img"
            className="object-contain object-center hover:cursor-pointer min-[500px]:h-14 min-[1100px]:h-20"
          />
          <p className="text-slate-800 h-6 text-xs min-[700px]:text-sm min-[1100px]:font-semibold">
            {title2}
          </p>
        </a>
        <a
          href={linkTo3}
          className="min-[500px]:w-20  min-[1000px]:w-full grid  min-[1000px]:justify-items-center"
        >
          <img
            src={imgSrc3}
            alt="img"
            className="object-contain object-center hover:cursor-pointer min-[500px]:h-14 min-[1100px]:h-20"
          />
          <p className="text-slate-800 h-6 text-xs min-[700px]:text-sm min-[1100px]:font-semibold">
            {title3}
          </p>
        </a>
        <a
          href={linkTo4}
          className="min-[500px]:w-20  min-[1000px]:w-full grid  min-[1000px]:justify-items-center"
        >
          <img
            src={imgSrc4}
            alt="img"
            className="object-contain object-center hover:cursor-pointer min-[500px]:h-14 min-[1100px]:h-20"
          />
          <p className="text-slate-800 h-6 text-xs min-[700px]:text-sm min-[1100px]:font-semibold">
            {title4}
          </p>
        </a>
      </div>
      <a
        href={linkTo5}
        className="inline-block text-blue-600  hover:text-orange-500 hover:cursor-pointer min-[1100px]:text-lg"
      >
        See all offers
      </a>
    </div>
    // <Outlet></Outlet>
  );
};

export default Aceproduct;
