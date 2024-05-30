import React, { useState, useContext } from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { BsQuestionSquare } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { RiFilePaper2Line } from "react-icons/ri";
import { BsPen } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { BiLogOut } from "react-icons/bi";
import { CgMenuBoxed } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { FaChevronCircleRight } from "react-icons/fa";
import styles from "../../styles/AdminPannel/Sidebar.module.css";
import Link from "next/link";
import { UserContext } from "../../providers/userContext";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";

export function Sidebar2({ isOpen }) {
  const [user] = useContext(UserContext);
  const router = useRouter();

  const arr = ["/Admin/Progress", "/Admin/Test", "/Admin/Progresstable"];

  const arr1 = ["/Admin/Chapter", "/Admin/Subjects"];

  return (
    <div
      className={`${
        isOpen ? "" : "sticky top-0 left-0 hidden h-screen bg-gray-100 lg:flex"
      }`}
    >
      <div className="flex flex-col w-64">
        <div
          className={`flex flex-col flex-grow overflow-y-auto bg-white ${
            isOpen ? "" : "border-r border-gray-200"
          }`}
        >
          <div className="flex flex-col flex-shrink-0 mt-5">
            <nav
              className="flex-1 mt-12 space-y-1 bg-white"
              aria-label="Sidebar"
            >
              <Link href="/Admin/Dashboard">
                <a
                  className={`${
                    router.pathname === "/Admin/Dashboard" &&
                    "bg-indigo-50 border-indigo-600 text-indigo-600"
                  } group border-transparent flex items-center px-3 py-2 text-sm font-medium border-l-4`}
                >
                  {/* <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-indigo-500 mr-3 h-6 w-6"
                  // height="1em"
                  // width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2 55.95 55.95 0 0 0 79.2 0 55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z"></path>
                </svg> */}
                  <MdOutlineDashboard
                    className={`${
                      router.pathname === "/Admin/Dashboard" &&
                      "text-indigo-500"
                    } mr-3 h-6 w-6`}
                    size={20}
                  />
                  Dashboard
                </a>
              </Link>
              <Link href="/Admin/Subjects">
                <a
                  className={`${
                    arr1.includes(router.pathname) &&
                    "bg-indigo-50 border-indigo-600 text-indigo-600"
                  } border-transparent group flex items-center px-3 py-2 text-sm font-medium border-l-4`}
                  href="/courses/view"
                >
                  {/* <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z"></path>
                </svg> */}
                  <MdOutlineSchool
                    // className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    className={`${
                      router.pathname === "/Admin/Subjects" && "text-indigo-500"
                    } mr-3 h-6 w-6`}
                    size={20}
                  />
                  My Class
                </a>
              </Link>
              {/* <Link href="/Admin/Ask">
                <a
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4"
                  href="/learning-paths"
                >
                  
                  <BsQuestionSquare
                    className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    size={20}
                  />
                  Ask a doubt
                </a>
              </Link> */}
              <Link href="/Admin/Test">
                <a
                  className={`${
                    arr.includes(router.pathname) &&
                    "bg-indigo-50 border-indigo-600 text-indigo-600"
                  }group border-transparent flex items-center px-3 py-2 text-sm font-medium border-l-4`}
                  href="/community"
                >
                  <VscGraph
                    // className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    className={`${
                      arr.includes(router.pathname) && "text-indigo-500"
                    } mr-3 h-6 w-6`}
                    size={20}
                  />
                  Progress
                </a>
              </Link>
              {/* <Link href="/Admin/Test">
                <a
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4"
                  href="/playgrounds"
                >
                  <RiFilePaper2Line
                    className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    size={20}
                  />
                  Test
                </a>
              </Link> */}
              {/* <a
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4"
                href="/projects/view"
              >
                
                <BsPen
                  className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                  size={20}
                />
                Meeting/Lecture
              </a> */}
              <Link
                href={{
                  pathname: "/Admin/BuyCourse",
                  query: {
                    id: user.myClass,
                  },
                }}
              >
                <a
                  className={`${
                    router.pathname === "/Admin/BuyCourse" &&
                    "bg-indigo-50 border-indigo-600 text-indigo-600"
                  } border-transparent group flex items-center px-3 py-2 text-sm font-medium border-l-4`}
                  href="/certificates"
                >
                  {/* <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"></path>
                </svg> */}

                  <ImProfile
                    // className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    className={`${
                      router.pathname === "/Admin/BuyCourse" &&
                      "text-indigo-500"
                    } mr-3 h-6 w-6`}
                    size={20}
                  />
                  <span>Buy Course</span>
                </a>
              </Link>
              <Link href="/Admin/Orders">
                <a
                  className={`${
                    router.pathname === "/Admin/Orders" &&
                    "bg-indigo-50 border-indigo-600 text-indigo-600"
                  } border-transparent group flex items-center px-3 py-2 text-sm font-medium border-l-4`}
                  href="/certificates"
                >
                  {/* <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"></path>
                </svg> */}

                  <ImProfile
                    // className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    className={`${
                      router.pathname === "/Admin/Orders" && "text-indigo-500"
                    } mr-3 h-6 w-6`}
                    size={20}
                  />
                  <span>My Orders</span>
                </a>
              </Link>
              <Link href="/Admin/Profile">
                <a
                  className={`${
                    router.pathname === "/Admin/Profile" &&
                    "bg-indigo-50 border-indigo-600 text-indigo-600"
                  } border-transparent group flex items-center px-3 py-2 text-sm font-medium border-l-4`}
                  href="/certificates"
                >
                  {/* <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"></path>
                </svg> */}

                  <ImProfile
                    // className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    className={`${
                      router.pathname === "/Admin/Profile" && "text-indigo-500"
                    } mr-3 h-6 w-6`}
                    size={20}
                  />
                  <span>Profile</span>
                </a>
              </Link>
              {/* <a
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4"
                href="/accelerators"
              > */}
              {/* <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0 0 58.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0 0 12.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0 0 24.4 59.8 73.36 73.36 0 0 0 53.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z"></path>
                </svg> */}
              {/* <div>
                  <BiLogOut size={20} />
                </div>
                Log out */}
            </nav>
          </div>
          <div className="flex-grow"></div>
          <nav
            className="flex-shrink-0 mt-5 space-y-1 bg-white"
            aria-label="Sidebar"
          >
            <a
              className="border-transparent cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-4"
              onClick={() => {
                deleteCookie("token"), router.reload();
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
              </svg>
              Logout
            </a>
          </nav>
          {/* <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
            <div className="flex items-center justify-between flex-shrink-0 w-full group">
              <div className="flex items-center">
                <div className="border-4 rounded-full flex items-center">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: "1",
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2736%27%20height=%2736%27/%3e"
                        style={{
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                        }}
                      />
                    </span>
                    <img
                      alt="user profile"
                      src={user.imageUrl}
                      decoding="async"
                      data-nimg="intrinsic"
                      className="inline-block rounded-full h-9 w-9"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                    />
                    <noscript></noscript>
                  </span>
                </div>
                <div className="ml-3">
                  <a
                    className="block text-sm font-medium text-gray-700 group-hover:text-gray-900"
                    href="/ranks?filter=allTime"
                  >
                    <span className="block">{user.name} </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
