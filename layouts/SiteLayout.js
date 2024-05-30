import React, { Children } from "react";
import Footer from "../components/Site/Footer";
import Navbar from "../components/Site/Navbar/index";
import { useRouter } from "next/router";

export default function SiteLayout({ children, classes }) {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/login" ||
      router.pathname === "/Signup" ||
      router.pathname === "/terms" ||
      router.pathname === "/PrivacyPolicy" ? (
        ""
      ) : (
        <Navbar Allclass={classes} />
      )}
      {children}
      {router.pathname === "/login" || router.pathname === "/Signup" ? (
        ""
      ) : (
        <Footer />
      )}
    </>
  );
}
