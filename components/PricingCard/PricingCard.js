import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
// import Styles from "./Pricing.module.css";

export default function PricingCard({ module, bool, subjectID }) {
  const router = useRouter();
  console.log("in pricing card =>", module.length, module);
  const [modulePrice, setmodulePrice] = useState(module.data);
  console.log("in mod price ", modulePrice);
  const [mod, setMod] = useState(module.data);
  console.log("refresh ", modulePrice);
  async function handleRedirect() {
    // let a= {
    //   "data":"738773"
    // }
    let Mod = [];
    modulePrice.forEach((element) => {
      Mod.push(element.module);
    });
    console.log("Mod", Mod);
    router.push({ pathname: "/login", query: { nextUrl: "/Checkout" } });
    let js = JSON.stringify(Mod);
    console.log("JSON stringify modules", js);
    setCookie(null, "subjectId", subjectID, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    setCookie(null, "modules", JSON.stringify(Mod), {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  }
  useEffect(() => {
    let Modules = [];
    Modules = module.data.map((mod) => {
      return { module: mod.module, price: mod.price };
    });
    setmodulePrice(Modules);
  }, []);

  return (
    <div
      className="shadow-lg rounded-2xl w-64 bg-indigo-500  p-4"
      style={{
        minWidth: "28vw",
        /* min-height: 23vh; */
        margin: "7em 0em",
        height: "70vh",
      }}
    >
      <div className="flex text-white  items-center justify-between">
        <p className="text-4xl font-medium mb-4">Pro</p>
        {bool ? (
          <p className="text-3xl font-bold flex flex-col">
            {module.data
              ? module.data.reduce((previousValue, currentValue) => {
                  return previousValue + currentValue.price;
                }, 0)
              : module.price}
          </p>
        ) : (
          <p className="text-3xl font-bold flex flex-col">
            ₹
            {modulePrice &&
              modulePrice.reduce((previousValue, currentValue) => {
                return previousValue + currentValue.price;
              }, 0)}
          </p>
        )}
      </div>
      <p className="text-white text-md mt-4">Plan include :</p>
      {bool ? (
        <ul className="text-sm text-white w-full mt-6 mb-6">
          {module.data ? (
            module.data.map((data, index) => (
              <li className="mb-3 flex items-center " key={index}>
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                  onClick={() => {
                    setmodulePrice(modulePrice.slice(index + 1));
                  }}
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Module -- {data.module}
              </li>
            ))
          ) : (
            <li className="mb-3 flex items-center ">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
                // onClick={() => {
                //   setmodulePrice(modulePrice.slice(index + 1));
                // }}
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Module -- {module.module}
            </li>
          )}
        </ul>
      ) : (
        <ul className="text-sm text-white w-full mt-6 mb-6">
          {mod &&
            mod.map((data, index) => (
              <ModuleRow
                modulePrice={modulePrice}
                setmodulePrice={setmodulePrice}
                index={index}
                data={data}
                key={index}
              />
            ))}
        </ul>
      )}
      <button
        type="button"
        className="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 bg-white hover:bg-gray-100 "
        // className="w-full px-3 py-3 text-base font-bold shadow rounded-lg text-[#2D52D1] bg-white hover:bg-gray-100 "
        onClick={handleRedirect}
        // disabled={true}
      >
        Buy Now
      </button>
    </div>
  );
}
function ModuleRow({ data, index, modulePrice, setmodulePrice }) {
  const [isChecked, setChecked] = useState(true);
  const handleUnCheck = () => {
    let arr = [];
    arr = modulePrice.filter((mod) => {
      return mod.module !== data.module;
    });
    console.log("arr", arr);
    setChecked(false);
    setmodulePrice(arr);
  };
  const handleRowCheck = () => {
    setChecked(true);
    setmodulePrice((old) => [
      ...old,
      { module: data.module, price: data.price },
    ]);
  };
  return (
    <li className="mb-3 flex items-center ">
      {isChecked ? (
        <svg
          className="h-6 w-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          stroke="currentColor"
          fill="white"
          viewBox="0 0 1792 1792"
          onClick={handleUnCheck}
          // onClick={() => {
          //   setmodulePrice(modulePrice.slice(index + 1));
          // }}
        >
          <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
        </svg>
      ) : (
        <FaCircle className="h-6 w-6 mr-2" onClick={handleRowCheck} />
      )}
      Module -- {data.module}
    </li>
  );
}
