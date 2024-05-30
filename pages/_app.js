import "../styles/globals.css";
import "aos/dist/aos.css";

import Head from "next/head";

import AdminLayout from "../layouts/AdminLayout";
import SiteLayout from "../layouts/SiteLayout";
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect, useContext } from "react";
import getClasses from "../utils/adapters/get/get";
import { redirectUser } from "../utils/redirectUser";
import { getUserByToken } from "../utils/user";
import { UserProvider, UserContext } from "../providers/userContext";
// import GlobalStyle from "../styles/global.css";

function MyApp({ Component, pageProps, router, classes, user }) {
  const [progress, setProgress] = useState(0);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
      // hideContent;
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
      // authCheck;
    });
    // return () => {
    //   router.events.off("routeChangeStart", hideContent);
    //   router.events.off("routeChangeComplete", authCheck);
    // };
  }, []);

  // function authCheck(url) {
  //   // redirect to login page if accessing a private page and not logged in
  //   // setUser(userService.userValue);
  //   const publicPaths = [
  //     "/",
  //     "/Contactus",
  //     "/Curriculim",
  //     "/login",
  //     "/OurApp",
  //     "/Register",
  //     "/Signup",
  //     "/class/8",
  //     "/Admin/Checkout",
  //   ];
  //   const path = url.split("?")[0];
  //   if (!publicPaths.includes(path)) {
  //     setAuthorized(false);
  //     console.log("in protect cond");
  //     router.push({
  //       pathname: "/",
  //     });
  //   } else {
  //     setAuthorized(true);
  //   }
  // }

  if (router.pathname.startsWith("/Admin/")) {
    return (
      <>
        {/* <GlobalStyle /> */}
        <LoadingBar
          color="#007aff"
          progress={progress}
          waitingTime={400}
          onLoaderFinished={() => setProgress(0)}
        />
        <UserProvider userData={user}>
          <AdminLayout pageProps router>
            <Component {...pageProps} />
          </AdminLayout>
        </UserProvider>
      </>
    );
  }
  return (
    <>
      <LoadingBar
        color="#FF8008"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <SiteLayout classes={classes}>
        <Head>
          <title>Upmarks</title>
          <link rel="shortcut icon" href="/favicon.png" sizes="32x32" />
        </Head>
        <Component {...pageProps} />
      </SiteLayout>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { parseCookies } = require("nookies");

  const publicPaths = [
    "/",
    "/Contactus",
    "/Curriculum",
    "/login",
    "/OurApp",
    "/Register",
    "/Signup",
    "/class/[id]",
    "/about",
  ];
  const privatePaths = [
    "/Admin/Dashboard",
    "/Admin/Checkout",
    "/Admin/Courses",
    "/Admin/BuyCourse",
    "/Admin/Orders",
    "/Admin/Subjects",
    "/Admin/Ask",
    "/Admin/Profile",
    "/Admin/Progress",
    "/Admin/Chapter",
    "/Admin/Progresstable",
    "/Admin/Test",
  ];

  var cookie = require("cookie");
  const { token } = parseCookies(ctx);

  let resp;
  let UserData;
  if (UserData) {
    console.log("in user data Condition", UserData);
    return { user: UserData };
  } else if (!UserData) {
    if (typeof window === "undefined") {
      if (!token) {
        if (privatePaths.includes(ctx.pathname)) {
          redirectUser(ctx, "/");
        }
      }
      if (token) {
        console.log("in token api");
        let [err, response] = await getUserByToken(token);
        if (response && response.success) {
          UserData = response.data;

          if (ctx.query.nextUrl)
            redirectUser(ctx, `/Admin${ctx.query.nextUrl}`);
          else if (publicPaths.includes(ctx.pathname)) {
            redirectUser(ctx, "/Admin/Dashboard");
          }
        }
      } else if (privatePaths.includes(ctx.pathname)) {
        redirectUser(ctx, "/");
      }
    }
  }
  if (publicPaths.includes(ctx.pathname)) {
    console.log("in if condition of class");
    resp = await getClasses();
  }

  console.log("User=>", UserData);
  return { classes: resp, user: UserData };
};

export default MyApp;
