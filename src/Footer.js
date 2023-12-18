import React from "react";

const Footer = ({ backToTop }) => {
  return (
    <>
      <div className="grid place-items-center space-y-1 py-8 border-t-[1px] border-slate-400">
        <p className="text-sm ">See personalized recommendations</p>
        <a href="/LoginPage">
          <button className="bg-yellow-400 text-sm font-semibold py-1 px-28 rounded-md">
            Sign In
          </button>
        </a>
        <p className="text-xs font-semibold">
          New costumer?
          <a href="/LoginPage">
            <span className="text-xs font-semibold text-blue-600 ml-2">
              Start here
            </span>
          </a>
        </p>
      </div>

      <a
        href={backToTop}
        className="py-3 block text-center bg-gray-700 hover:bg-gray-600 text-white w-full"
      >
        Back to top
      </a>

      <div className="bg-gray-800 w-full text-white grid place-items-center py-2 border-b-[1px] border-b-slate-700">
        {/* <div className="bg-gray-800 w-full text-white grid place-items-center py-12 border-b-[1px] border-b-slate-700"> */}
        <div className="flex gap-2 px-2">
          {/* <div className="flex gap-32"> */}
          <div>
            <ul className="text-sm text-gray-300 space-y-2 font-semibold">
              <li className="font-bold text-base text-white ">
                Get to Know Us
              </li>
              <li className="hover:cursor-pointer hover:underline">About Us</li>
              <li className="hover:cursor-pointer hover:underline">Careers</li>
              <li className="hover:cursor-pointer hover:underline">
                Press Releases
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Amazon Science
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-sm text-gray-300 space-y-2 font-semibold">
              <li className="font-bold text-base text-white ">
                Connect with Us
              </li>
              <li className="hover:cursor-pointer hover:underline">Facebook</li>
              <li className="hover:cursor-pointer hover:underline">Twitter</li>
              <li className="hover:cursor-pointer hover:underline">
                Instagram
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-sm text-gray-300 space-y-2 font-semibold">
              <li className="font-bold text-base text-white ">
                Make Money with Us
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Sell on Amazon
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Sell under Amazon Accelerator
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Protect and Build Your Brand
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Amazon Global Selling
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Become an Affiliate
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Fulfilment by Amazon
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Advertise Your Products
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Amazon Pay on Merchants
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-sm text-gray-300 space-y-2 font-semibold">
              <li className="font-bold text-base text-white ">
                Let Us Help You
              </li>
              <li className="hover:cursor-pointer hover:underline">
                COVID-19 and Amazon
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Your Account
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Return center
              </li>
              <li className="hover:cursor-pointer hover:underline">
                100% Purchase Protection
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Amazon App Download
              </li>
              <li className="hover:cursor-pointer hover:underline">Help-</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 grid place-items-center py-2">
        <div className="grid place-items-center space-y-6">
          <a href="/">
            <img
              src="../assets/logo.webp"
              alt="logo"
              className=" h-8 cursor-pointer"
            />
          </a>
          <div className="text-white grid place-items-start text-xs space-y-1 font-semibold w-80 overflow-hidden p-5 min-[500px]:w-full  min-[850px]:place-items-center">
            {/* <div className="text-white grid place-items-center text-xs space-y-1 font-semibold "> */}
            <ul className="flex space-x-2  text-gray-300 ">
              <li className="hover:cursor-pointer hover:underline">
                Australia
              </li>
              <li className="hover:cursor-pointer hover:underline">Brazil</li>
              <li className="hover:cursor-pointer hover:underline">Canada</li>
              <li className="hover:cursor-pointer hover:underline">France</li>
              <li className="hover:cursor-pointer hover:underline">China </li>
              <li className="hover:cursor-pointer hover:underline">Germany</li>
              <li className="hover:cursor-pointer hover:underline">Italy</li>
              <li className="hover:cursor-pointer hover:underline">Japan</li>
              <li className="hover:cursor-pointer hover:underline">Mexico</li>
              <li className="hover:cursor-pointer hover:underline">
                Netherlands
              </li>
              <li className="hover:cursor-pointer hover:underline">Poland</li>
              <li className="hover:cursor-pointer hover:underline">
                Singapore
              </li>
              <li className="hover:cursor-pointer hover:underline">Spain</li>
              <li className="hover:cursor-pointer hover:underline">Turkey</li>
              <li className="hover:cursor-pointer hover:underline">
                United Arab Emirates
              </li>
            </ul>
            <ul className="flex space-x-2 text-gray-300 ">
              <li className="hover:cursor-pointer hover:underline">
                United Kindom
              </li>
              <li className="hover:cursor-pointer hover:underline">
                United States
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid place-items-center bg-[#131A22] text-gray-200 space-y-10 py-8">
        <div className="grid grid-cols-4 text-xs gap-2 px-2  ">
          <ul className="text-gray-400 hover:cursor-pointer hover:underline">
            <li className="text-gray-200 font-semibold">AbeBooks</li>
            <li>Books, art</li>
            <li>& collectibles</li>
          </ul>
          <ul className="text-gray-400 hover:cursor-pointer hover:underline">
            <li className="text-gray-200 font-semibold">Amazon Web Services</li>
            <li>Scalable Cloud</li>
            <li>Computing Services</li>
          </ul>
          <ul className="text-gray-400 hover:cursor-pointer hover:underline">
            <li className="text-gray-200 font-semibold">Audible</li>
            <li>Download</li>
            <li>Audio Books </li>
          </ul>
          <ul className="text-gray-400 hover:cursor-pointer hover:underline">
            <li className="text-gray-200 font-semibold">IMDb</li>
            <li>Movies, TV</li>
            <li>& Celebrities</li>
          </ul>
          <ul className="text-gray-400 hover:cursor-pointer hover:underline">
            <li className="text-gray-200 font-semibold">Shopbop</li>
            <li>Designer</li>
            <li>Fashion Brands</li>
          </ul>
          <ul className="text-gray-400 hover:cursor-pointer hover:underline">
            <li className="text-gray-200 font-semibold">Amazon Business</li>
            <li>Everything For</li>
            <li>Your Business</li>
          </ul>
          <ul className="text-gray-400 hover:cursor-pointer hover:underline">
            <li className="text-gray-200 font-semibold">Prime Now</li>
            <li>2-Hour Delivery</li>
            <li>on Everyday Items</li>
          </ul>
          <ul className="text-gray-400 hover:cursor-pointer hover:underline">
            <li className="text-gray-200 font-semibold">Amazon Prime Music</li>
            <li>100 million songs, ad-free</li>
            <li>Over 15 million podcast episodes</li>
          </ul>
        </div>
        <div className="grid place-items-center text-xs space-y-1 p-2">
          <p className="space-x-2">
            <span className="font-semibold hover:cursor-pointer hover:underline">
              Conditions of Use & Sale
            </span>
            <span className="font-semibold hover:cursor-pointer hover:underline">
              Privacy Notice
            </span>
            <span className="font-semibold hover:cursor-pointer hover:underline">
              Interest-Based Ads
            </span>
          </p>
          <p className="font-semibold">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
