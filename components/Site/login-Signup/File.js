import React, { Suspense } from "react";
import { useRouter } from "next/router";
import Loginform from "./Loginform";
import Signupform from "./Signupform";

export default function File() {
  const router = useRouter();
  return (
    <div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-6 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div
            className="cursor-pointer flex items-center"
            onClick={() => router.push("/")}
          >
            {/* <div style={{ display: "flex", alignItems: "center" }}> */}
            {/* <img src="/favicon.png" alt="logo" style={{ width: "100px" }} /> */}
            <img
              // className="hidden lg:block"
              // src="https://eduvibe.react.devsvibe.com/images/logo/logo.png"
              src="/um logo blue.svg"
              alt="Workflow"
              style={{ width: "400px", marginLeft: "20px" }}
            />
            {/* </div> */}
          </div>
        </div>
        {router.pathname === "/login" ? <Loginform /> : <Signupform />}
      </div>
      <div
        className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen"
        style={{
          backgroundImage: "url(/login.png)",
          // https://elements-cover-images-0.imgix.net/6e855666-1764-4019-be9e-998505bd3fdf?auto=compress%2Cformat&fit=max&w=900&s=4f4ecf1eb453e7d6cafb101dc8965218
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <></>
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer"></div>
      </div>
    </div>
  );
}
