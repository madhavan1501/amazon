import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Link } from "react-router-dom";
const Header = ({ windowWidth }) => {
  return (
    <header
      className="bg-slate-900 text-white min-[400px]:grid min-[400px]:grid-cols-[2fr_1fr] capitalize py-1   flex  justify-between  min-[400px]:gap-4 w-full  h-[70px] px-2 box-border min-[700px]:px-8  min-[1000px]:px-4  min-[700px]:grid-cols-[3fr_1fr] min-[1000px]:grid-cols-[2fr_1fr]" //py-2 gap-12
    >
      <div
        className="flex justify-between items-center gap-2 min-[400px]:gap-x-5 h-[65px] min-[500px]:gap-x-10 px-2 min-[1500px]:gap-12 " //gap-12
      >
        <a
          href="/"
          className=" border-white p-1 w-16 min-[400px]:w-20 grid place-items-center hover:border-2 min-[1500px]:w-36 rounded-lg" //w-36 py-1
        >
          <img
            src="../assets/logo.webp"
            alt="logo"
            className="min-[400px]:h-6 cursor-pointer select-none min-[1500px]:h-10" //h-10
          />
        </a>
        <div
          className="min-[400px]:h-8 h-7 relative min-[400px]:min-w-[200px] flex-1 w-40 min-[500px]:min-w-[250px] min-[700px]:min-w-300px min-[1000px]:min-w-[250px] min-[1500px]:h-10" //h-10
        >
          <input
            type="text"
            className="h-full w-full rounded-lg text-black pl-4 py-1 pr-10 text-base font-semibold focus:ring-2 ring-orange-500 border-none outline-none mb-20"
            placeholder="Search Amazon.in"
          />
          <SearchIcon className="!h-full !w-10 absolute rounded-tr-lg rounded-br-lg text-black bg-orange-400 hover:bg-orange-500 right-0 top-0 cursor-pointer font-bold text-base bottom-0" />
        </div>
      </div>
      {(windowWidth > 1000 ? true : false) && (
        <div className="flex items-center justify-around ">
          <Link
            to={"/LoginPage"}
            className="h-full  text-lg font-semibold cursor-pointer   hover:border-2 p-1 rounded-lg"
          >
            <p className="text-sm select-none">hello, sign</p>
            <p className="font-bold select-none">account</p>
          </Link>
          <div className="h-full  text-lg font-semibold  cursor-pointer  hover:border-2 p-1 rounded-lg">
            <p className="text-sm select-none">returns</p>
            <p className="font-bold select-none">& orders</p>
          </div>
          <div className=" text-xl mt-3 cursor-pointer font-bold h-fit  hover:border-2 p-1 rounded-lg self-start">
            <a
              href="https://www.primevideo.com/"
              target="blank"
              className="select-none"
            >
              prime
            </a>
          </div>
          <div className=" grid items-center justify-end">
            <div className=" border-white min-[400px]:p-2 p-1 rounded-lg hover:border-2 ">
              <a
                href="/Cart"
                className="  text-base  flex items-center cursor-pointer "
              >
                <ShoppingCartSharpIcon />
                <p>Cart</p>
              </a>
            </div>
          </div>
        </div>
      )}
      {(windowWidth > 1000 ? false : true) && (
        <div className=" grid items-center justify-end">
          <div className="border-2 border-white min-[400px]:p-2 p-1 rounded-lg">
            <a
              href="/Cart"
              className="  text-base  flex items-center cursor-pointer "
            >
              <ShoppingCartSharpIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
