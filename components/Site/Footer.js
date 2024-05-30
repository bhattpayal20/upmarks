import React from "react";
import style from "../../styles/Home.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={`${style.bg_Footer} p-4 bg-white  shadow md:px-6 md:py-8 `}
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/">
          <a className="flex items-center mb-4 sm:mb-0 cursor-pointer">
            <img src="/um logo white.svg" className="w-60" />
          </a>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 ">
          <li>
            <Link href="/">
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About Us
              </a>
            </Link>
          </li>
          <li>
            <Link href="/OurApp">
              <a href="#" className="mr-4 hover:underline md:mr-6">
                OurApp
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Contactus">
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Contactus
              </a>
            </Link>
            <Link href="/PrivacyPolicy">
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Privacy Policy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Terms of Use
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <span className="block text-sm text-white sm:text-center ">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Upmarks
        </a>
        . All Rights Reserved.
      </span>
      <span className="block text-sm text-white sm:text-center ">
        Designed & Developed By{" "}
        <a
          className="underline	"
          href="https://ineptstudio.com/"
          target="_blank"
          rel="noreferrer"
        >
          Inept Studio Pvt. Ltd.
        </a>
      </span>
    </footer>
  );
}
