import React from "react";
import { Link } from "react-router-dom";

const LoginPage2 = () => {
  return (
    <>
      <div className="grid place-items-center pb-4">
        <div className=" grid place-items-center">
          <Link to={"/"} className="flex gap-1 py-5">
            <span>
              <img
                src="../assets/amazon-icon-2.png"
                alt="logo"
                className="h-8 w-min"
              />
            </span>
            <span className="text-md  font-semibold">.in</span>
          </Link>
        </div>
        <div
          style={{ boxShadow: "0 2px 5px -5px black" }}
          className="w-full grid place-items-center border-b-[1px] border-slate-300 pb-6"
        >
          <div className="grid place-items-center gap-y-6 w-min">
            <div className="border-[1px] border-gray-300 w-[345px] p-5 rounded-lg">
              <div>
                <h1 className="text-3xl tracking-tight mb-4">Sign in</h1>
              </div>
              <p className="pb-4 font-semibold">
                madhanraju@gmail.com
                <a
                  href="/LoginPage"
                  className="text-blue-500 hover:underline hover:text-orange-400 pl-1"
                >
                  Change
                </a>
              </p>
              <div className="grid ">
                <label htmlFor="signIn" className="text-sm font-bold">
                  Password
                </label>
                <input
                  type="text"
                  id="signIn"
                  className="border-slate-400 border-[1px] rounded-sm outline-none py-1 px-2"
                />
              </div>
              <div className="py-4">
                <button
                  className="bg-yellow-300 hover:bg-yellow-400 py-[2px] w-full rounded-lg text-lg px-4 p-y-4 "
                  style={{ boxShadow: "0px 0px 10px -7px black" }}
                >
                  Continue
                </button>
              </div>
              <div className="py-2">
                <p className="text-xs font-medium">
                  By continuing, you agree to Amazon's
                  <a
                    href=""
                    className="px-1 text-xs text-blue-700 font-medium hover:text-orange-700 hover:underline"
                  >
                    Conditions of Use
                  </a>
                  and
                  <a
                    href=""
                    className="text-xs px-1 text-blue-700 font-medium hover:text-orange-700 hover:underline"
                  >
                    Privacy Notice
                  </a>
                </p>
              </div>
              <div className=" py-4">
                <a
                  href=""
                  className="text-xs text-blue-700 font-medium hover:text-orange-700 hover:underline"
                >
                  Need help?
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid place-items-center pt-6 gap-y-4">
          <div className="flex justify-between w-full">
            <a
              href=""
              className=" text-xs text-blue-700 font-medium hover:text-orange-700 hover:underline"
            >
              Conditions of use
            </a>
            <a
              href=""
              className=" text-xs text-blue-700 font-medium hover:text-orange-700 hover:underline"
            >
              Privacy Notice
            </a>
            <a
              href=""
              className=" text-xs text-blue-700 font-medium hover:text-orange-700 hover:underline"
            >
              Help
            </a>
          </div>
          <div>
            <p className="text-xs">
              © 1996-2023, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage2;
