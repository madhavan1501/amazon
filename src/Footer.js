import React from "react";

const Footer = () => {
  return (
    <>
      <div className="grid place-items-center space-y-1 py-8">
        <p className="text-sm ">See personalized recommendations</p>
        <button className="bg-yellow-500 text-sm font-bold py-1 px-28 rounded-md">
          Sign In
        </button>
        <p className="text-xs font-semibold">
          New costumer?
          <span className="text-xs font-semibold text-blue-600 ml-2">
            Start here
          </span>
        </p>
      </div>
      <button className="py-3 bg-gray-700 hover:bg-gray-600 text-white w-full">
        Back to top
      </button>
      <div className="bg-gray-800 w-full text-white grid place-items-center">
        <div className="flex gap-40">
          <div>
            <h1>Get to Know Us</h1>
          </div>
          <div>
            <h1>Connect with Us</h1>
          </div>
          <div>
            <h1>Make Money with Us</h1>
          </div>
          <div>
            <h1>Let Us Help You</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
