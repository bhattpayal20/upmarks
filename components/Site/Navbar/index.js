import { RiArrowDropDownLine } from "react-icons/ri";
import style from "./nav.module.css";
import bannerStyles from "../Home/banner/banner.module.css";
// import { FaRegUser } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./nav.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Index({ Allclass }) {
  let arr = ["/Curriculum", "/about", "/PrivacyPolicy"];
  const router = useRouter();
  console.log(router.pathname);

  const [expand, setExpand] = useState(false);
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
    <>
      <nav
        className={` hidden md:hidden lg:block   ${
          arr.includes(router.pathname) ? "bg-white" : "bg-transparent"
        }`}
        style={{
          ...(arr.includes(router.pathname)
            ? {
                boxShadow: "0 3px 10px rgb(0 0 0 / 10%)",
                position: "absolute",
                // background: "#2435B8",
                width: "100%",
              }
            : {
                zIndex: "90",
                position: "absolute",
                // background: "#2435B8",
                width: "100%",
              }),
        }}
      >
        <div className="flex-1 flex items-center  sm:items-stretch sm:justify-start  ">
          <div className="flex-shrink-0 flex items-center  "></div>
        </div>
        <div className="container flex items-center  p-[1.2rem] mx-auhref text-gray-600 capitalize ">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={`${
                arr.includes(router.pathname)
                  ? "/um logo blue.svg"
                  : "/um logo white.svg"
              }`}
              width={300}
              height={arr.includes(router.pathname) ? 60 : 90}
              alt="Workflow"
              onClick={() => router.push("/")}
              style={{ width: "225px", marginLeft: "20px", cursor: "pointer" }}
            />
          </div>

          <div className="m-auto">
            <Link href="/">
              <a
                href="#"
                className={`${
                  arr.includes(router.pathname) && "text-black"
                } text-white font-bold border-b-2 border-transparent transition-colors duration-200 transform ${
                  router.pathname === "/" && " text-orange-400	"
                } hover:border-orangee  mx-1.5 sm:mx-6`}
              >
                home
              </a>
            </Link>

            <div className={style.dropdown} style={{ margin: "0" }}>
              <a
                href="#"
                className={`${style.dropbtn} ${
                  arr.includes(router.pathname) ? "text-black" : "text-white"
                } font-bold border-b-2 border-transparent transition-colors duration-200 transform  hover:border-blue-500 ${
                  router.pathname === "/class/[id]" && " text-orange-400	"
                } mx-1.5 sm:mx-6`}
                style={{
                  margin: "0",
                }}
              >
                Classes
                <span style={{ float: "right" }}>
                  <RiArrowDropDownLine size={25} />
                </span>
              </a>
              <div className={style.dropdownContent}>
                {Allclass &&
                  Allclass.data.map((MyClass) => (
                    <Link
                      key={MyClass.classId}
                      className={style.infraMenu}
                      href={{
                        pathname: `/class/[id]`,
                        query: {
                          id: MyClass.class,
                          classData: JSON.stringify(MyClass),
                        },
                      }}
                    >
                      <a>Class {MyClass.class}</a>
                    </Link>
                  ))}
              </div>
            </div>

            <Link href={"/OurApp"}>
              <a
                className={`${
                  arr.includes(router.pathname) ? `text-black` : "text-white"
                } font-bold border-b-2 border-transparent  transition-colors duration-200 ${
                  router.pathname === "/OurApp" && " text-orange-400	"
                } transform  hover:border-orangee mx-1.5 sm:mx-6`}
              >
                OurApp
              </a>
            </Link>

            <Link href={"/Contactus"}>
              <a
                href="#"
                className={`${
                  arr.includes(router.pathname) ? "text-black" : "text-white"
                } font-bold border-b-2 border-transparent  transition-colors ${
                  router.pathname === "/Contactus" && " text-orange-400	"
                } duration-200 transform  hover:border-orangee mx-1.5 sm:mx-6`}
              >
                Contact Us
              </a>
            </Link>
          </div>
          <button
            className={`${
              arr.includes(router.pathname)
                ? `${style.signin_btn_forsubject}`
                : `${style.signin_btn}`
            } ${bannerStyles.btn_slide_anim} `}
            style={{ display: "flex", alignItems: "center" }}
            // onClick={() => router.push("/login")}
          >
            <span>
              <GiSmartphone size={19} />
            </span>
            <span className="px-1  font-bold">DOWNLOAD APP</span>
          </button>
        </div>
      </nav>

      <nav className={`lg:hidden block flex ${styles.navigation}`}>
        <div className={styles.BigLogoDiv}>
          <a
            href="#"
            className={styles.navbar_logo}
            onClick={() => router.push("/")}
          >
            <Image
              src={`${
                arr.includes(router.pathname)
                  ? "/um logo blue.svg"
                  : "/um logo white.svg"
              }`}
              width={200}
              height={50}
            />
          </a>
        </div>
        <div>
          <span
            style={{
              fontSize: "30px",
              cursor: "pointer",

              ...(arr.includes(router.pathname)
                ? { color: "black" }
                : { color: "#fff" }),
              marginLeft: "-80px",
            }}
            onClick={openNav}
          >
            &#9776;{" "}
          </span>
          <div id="myNav" className="overlay">
            <a
              href="javascript:void(0)"
              className="closebtn cursor-pointer"
              style={{ zIndex: "60" }}
              onClick={closeNav}
            >
              &times;
            </a>
            <div className="overlay-content">
              <Link href={"/"}>
                <a onClick={closeNav}>Home</a>
              </Link>
              <a
                className="flex justify-center"
                style={{ display: "flex" }}
                href="#"
                onClick={() => setExpand(!expand)}
              >
                Classes{" "}
                <span>
                  <RiArrowDropDownLine size={45} />
                </span>
              </a>
              {expand && (
                <div>
                  {Allclass &&
                    Allclass.data.map((MyClass) => (
                      <Link
                        key={MyClass.classId}
                        className={style.infraMenu}
                        href={{
                          pathname: `/class/[id]`,
                          query: {
                            id: MyClass.class,
                            classData: JSON.stringify(MyClass),
                          },
                        }}
                      >
                        <a onClick={closeNav}>Class {MyClass.class}</a>
                      </Link>
                    ))}
                </div>
              )}

              <Link href={"/OurApp"}>
                <a onClick={closeNav}>OurApp</a>
              </Link>
              <Link href={"/Contactus"}>
                <a onClick={closeNav}>Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
