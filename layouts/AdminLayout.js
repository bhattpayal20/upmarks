import React, { useState, useContext } from "react";
import Sidebar, { Sidebar2 } from "../components/AdminPannel/Sidebar";
import { useRouter } from "next/router";
import Drawer from "../components/AdminPannel/Drawer";
import { UserContext } from "../providers/userContext";

export default function AdminLayout({ children, pageProps }) {
  const [user] = useContext(UserContext);
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const [Margin, setMargin] = useState(false);
  return (
    <>
      <Header setIsOpen={setIsOpen} />

      <div className="flex">
        {router.pathname === "/Admin/Checkout" ? (
          <div className="lg:block">
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Sidebar2 />
            </Drawer>
          </div>
        ) : (
          <>
            <div className=" block  lg:hidden">
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <Sidebar2 isOpen={isOpen} />
              </Drawer>
            </div>

            <Sidebar2 />
          </>
        )}

        {/* <div
        className="content "
        style={{
          ...(Margin ? { marginLeft: "100px" } : { marginLeft: "320px" }),
        }}
      > */}
        <div className="w-full " style={{ paddingTop: "57px" }}>
          {children}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export function Header({ setIsOpen }) {
  const [user] = useContext(UserContext);

  return (
    <header
      className="z-[51] relative cd-morph-dropdown  text-gray-900 !fixed left-0 right-0 bg-white shadow "
      style={{ position: "fixed", zIndex: "10" }}
    >
      <div className="relative py-2 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 group">
        <div className="flex items-center  duration-1000 transition-opacity opacity-100">
          <button
            type="button"
            className={`bg-white text-gray-400 hover:bg-gray-100 rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white shrink-0 mr-3  `}
            // style={{ display: "none" }}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                className="jsx-b35e882c88056c79"
              />
            </svg>
          </button>
        </div>
        <a
          className="flex flex-grow lg:flex-grow-0 sm:space-x-2 items-center"
          href="/Admin/Dashboard"
        >
          <div className="hidden sm:block" />
          <span className="font-semibold text-xl mr-1">Upmarks</span>
        </a>

        <div className="hidden lg:flex lg:items-center lg:mx-4 justify-end transition-opacity opacity-100">
          <button
            type="button"
            data-bypassmenuclose="true"
            className=" text-gray-400 hover:bg-gray-100 mr-1 relative rounded-md p-2 inline-flex items-center justify-center text-gray-400"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              className="text-xl lg:text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM184 352V232h64v207.6a91.99 91.99 0 0 1-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z" />
            </svg>
          </button>
          <button
            type="button"
            data-bypassmenuclose="true"
            className=" text-gray-400 hover:bg-gray-100 mr-1 relative rounded-md p-2 inline-flex items-center justify-center text-gray-400 shrink-0"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              className="text-xl lg:text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z" />
            </svg>
            <span className="absolute text-xs h-4 w-4 flex justify-center items-center rounded-full bg-red-700 text-white top-0 right-0">
              1
            </span>
          </button>
          <div className="ml-4 relative flex-shrink-0">
            <div className="jsx-b35e882c88056c79">
              <button
                type="button"
                id="user-menu"
                data-bypassmenuclose="true"
                className="bg-white text-gray-400 hover:bg-gray-100 bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shrink-0"
                onClick={() => setIsOpen}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
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
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                    />
                  </span>
                  <img
                    alt="Ansh Aggarwal"
                    // srcSet="//images.weserv.nl/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAATXAJzwZmK9VDT3ssdU8Vk3Q3c84dMdFdpxYXV9BDy5&w=32&q=80 1x, //images.weserv.nl/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAATXAJzwZmK9VDT3ssdU8Vk3Q3c84dMdFdpxYXV9BDy5&w=32&q=80 2x"
                    src={user.imageUrl}
                    decoding="async"
                    data-nimg="intrinsic"
                    className="rounded-full"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </span>
              </button>
            </div>
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
              className="hidden max-w-none origin-top-right absolute right-0 mt-4 w-48 rounded-md shadow-lg py-1 bg-white text-black focus:outline-none z-[51]"
            >
              <a
                href="/user/anshAggarwal"
                target="_blank"
                role="menuitem"
                rel="noreferrer"
                className="block px-4 py-2 text-sm"
              >
                View your public profile
              </a>
              <a
                href="https://discord.gg/brtAY92J2r"
                target="_blank"
                role="menuitem"
                rel="noreferrer nofollow"
                className="block px-4 py-2 text-sm"
              >
                Join discord community
              </a>
              <a
                role="menuitem"
                className="block px-4 py-2 text-sm"
                href="/settings"
              >
                Account Settings
              </a>
              <a
                role="menuitem"
                className="block px-4 py-2 text-sm"
                href="/logout"
              >
                Log out
              </a>
            </div>
          </div>
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="lg:hidden block" />
      <div className="lg:hidden block" />
    </header>
  );
}
