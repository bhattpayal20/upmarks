import React, { useState, useContext } from "react";
import Image from "next/image";
import Profilecard from "./Profilecard";
import { UserContext } from "../../providers/userContext";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import request from "../../utils/request";

export default function Myprofile() {
  let [user] = useContext(UserContext);
  console.log("user in profile", user);
  const [value, setValue] = React.useState({
    email: user.email,
    name: user.name,
    number: user.phoneNumber,
    address: user.address,
    gender: user.gender,
    newpassword: null,
    renewpassword: null,
    showPassword: false,
    // req: false,
  });

  const handleClickShowPassword = () => {
    setValue({
      ...value,
      showPassword: !value.showPassword,
    });
  };

  const handlechange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const changePassword = async (e) => {
    // setValue(!value.req);
    e.preventDefault();
    if (value.newpassword === value.renewpassword) {
      let [err, response] = await request("POST", "/auth/password/change", {
        newPassword: value.newpassword,
      });
      // console.log("password updated=>", response);
    }
  };

  const handlesubmit = async (e) => {
    // console.log("req", value.req);
    // setValue(value.req);
    e.preventDefault();
    let [error, resp] = await request("PUT", "/user/update", {
      name: value.name,
      address: value.address,
      gender: value.gender,
    });
    console.log("data updated successfully=>", resp);
  };

  return (
    <section className="w-full p-8 lg:p-4 xl:p-8  bg-gray-100 bg-opacity-50">
      <div className="flex flex-wrap gap-y-5 justify-center ">
        <div className="flex flex-col space-y-7 	">
          <Profilecard />
          <form onSubmit={changePassword}>
            <div className="items-center w-full md:w-[87%] lg:w-[90%] xl:w-full p-8 space-y-5 text-gray-500 bg-white rounded-2xl shadow-lg">
              <h2 className="text-black font-sans font-semibold text-center text-lg">
                Change password
              </h2>
              <div className="w-full max-w-sm mx-auto space-y-5">
                <div className=" relative flex flex-col space-y-4">
                  <div>
                    <input
                      type={value.showPassword ? "text" : "password"}
                      id="user-info-password"
                      style={{ boxShadow: "0px 0px 1px 1px #e5e5e7" }}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="New Password"
                      value={value.password}
                      name="newpassword"
                      onChange={handlechange}
                      required
                    />
                    {value.showPassword ? (
                      <div className="absolute right-0 -mt-7 mr-3 cursor-pointer">
                        <HiOutlineEyeOff onClick={handleClickShowPassword} />
                      </div>
                    ) : (
                      <div className="absolute right-0 -mt-7 mr-3 cursor-pointer">
                        <HiOutlineEye onClick={handleClickShowPassword} />
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      type={value.showPassword ? "text" : "password"}
                      id="user-info-password"
                      style={{ boxShadow: "0px 0px 1px 1px #e5e5e7" }}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Re-enter new Password"
                      value={value.password}
                      name="renewpassword"
                      onChange={handlechange}
                      required
                    />
                    {value.showPassword ? (
                      <div className="absolute right-0 -mt-7 mr-3 cursor-pointer">
                        <HiOutlineEyeOff onClick={handleClickShowPassword} />
                      </div>
                    ) : (
                      <div className="absolute right-0 -mt-7 mr-3 cursor-pointer">
                        <HiOutlineEye onClick={handleClickShowPassword} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  // onClick={changePassword}
                  className="py-2 px-4  bg-[#515edf] text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Change
                </button>
              </div>
            </div>
            <hr />
          </form>
        </div>
        <form
          className="container max-w-2xl mx-auto shadow-md md:w-[60%] lg:w-[59%] xl:w-[3/4]"
          onSubmit={handlesubmit}
        >
          <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <a href="#" className="block relative">
                  <Image
                    // alt="profil"
                    src={user.imageUrl ? user.imageUrl : "/avatar.jpg"}
                    width={60}
                    height={60}
                    // layout="responsive"
                    className="mx-auto object-cover rounded-full h-16 w-16 "
                  />
                </a>
                <h1 className="text-gray-600">{user.name}</h1>
              </div>
            </div>
          </div>
          <div className="space-y-6 bg-white ">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className=" relative ">
                  <input
                    type="text"
                    id="user-info-email"
                    style={{ boxShadow: "0px 0px 1px 1px #e5e5e7" }}
                    className="cursor-not-allowed rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                    name="email"
                    value={value.email}
                    onChange={handlechange}
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Personal info</h2>
              <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div>
                  <div className=" relative ">
                    <input
                      type="text"
                      id="user-info-name"
                      style={{ boxShadow: "0px 0px 1px 1px #e5e5e7" }}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Name"
                      value={value.name}
                      name="name"
                      onChange={handlechange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className=" relative ">
                    <input
                      type="text"
                      id="user-info-phone"
                      style={{ boxShadow: "0px 0px 1px 1px #e5e5e7" }}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent cursor-not-allowed"
                      placeholder="Phone number"
                      value={value.number}
                      name="number"
                      onChange={handlechange}
                      required
                      disabled
                    />
                  </div>
                </div>
                <div>
                  <div className=" relative ">
                    <textarea
                      id="user-info-phone"
                      style={{ boxShadow: "0px 0px 1px 1px #e5e5e7" }}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Address"
                      name="address"
                      value={value.address}
                      onChange={handlechange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className=" relative ">
                    <input
                      type="text"
                      style={{ boxShadow: "0px 0px 1px 1px #e5e5e7" }}
                      id="user-info-phone"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Gender"
                      name="gender"
                      value={value.gender}
                      onChange={handlechange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button
                type="submit"
                className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
