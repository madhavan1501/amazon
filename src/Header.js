import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
const Header = () => {
  return (
    <header className="bg-slate-900 text-white grid grid-cols-[2fr_1fr] capitalize py-2  gap-12 w-full  h-[68px] px-4 box-border">
      <div className="flex justify-between items-center gap-12">
        <a
          href="/"
          className=" border-white w-36 grid place-items-center hover:border-2 py-1"
        >
          <img
            src="../assets/logo.webp"
            alt="logo"
            className="h-10 cursor-pointer  "
          />
        </a>
        <div className="h-10 relative min-w-[200px] flex-1 ">
          <input
            type="text"
            className="h-full w-full rounded-lg text-black pl-4 py-1 text-base font-semibold focus:ring-2 ring-orange-500 border-none outline-none"
            placeholder="Search Amazon.in"
          />
          <SearchIcon className="!h-full !w-10 absolute rounded-tr-lg rounded-br-lg text-black bg-orange-400 hover:bg-orange-500 right-0 top-0 cursor-pointer font-bold text-base" />
        </div>
      </div>
      <div className="flex items-center justify-around ">
        <div className="h-full  text-lg font-semibold cursor-pointer   hover:border-2">
          <p className="text-sm">hello, sign</p>
          <p className="font-bold">account</p>
        </div>
        <div className="h-full  text-lg font-semibold  cursor-pointer  hover:border-2">
          <p className="text-sm">returns</p>
          <p className="font-bold">& orders</p>
        </div>
        <div className="h-full  text-xl mt-3 cursor-pointer font-bold   hover:border-2">
          <a href="https://www.primevideo.com/" target="blank">
            prime
          </a>
        </div>
        <a
          href="/Cart"
          className=" h-full  text-base  flex items-center cursor-pointer  hover:border-2"
        >
          <ShoppingCartSharpIcon />
          <p className="font-bold">cart</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
