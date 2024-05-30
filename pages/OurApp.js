import Head from "next/head";
import React, { useEffect } from "react";
import BannerPage from "../components/Site/App/BannerPage";

function OurApp() {
  return (
    <>
      <Head>
        <title>Our App</title>
      </Head>
      <div>
        <BannerPage />;
      </div>
    </>
  );
}

export default OurApp;
