import React, { useEffect } from "react";
import style from "./PhoneLap.module.css";
import AOS from "aos";

export default function Phone() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* // <section className="px-8 py-10">
    //   <PhoneDiv>
    //     <img
    //       src="https://github.githubassets.com/images/modules/site/home/iphone-notch.svg"
    //       width={"17%"}
    //       style={{ position: "absolute" }}
    //     />
    //     <video style={{ borderRadius: "1.75rem" }}>
    //       <source
    //         src="https://github.githubassets.com/images/modules/site/home/gh-mobile.h264.mp4"
    //         type="video/mp4"
    //       />
    //     </video>
    //   </PhoneDiv>
    // </section> */}

      {/* <section
        style={{ paddingTop: "90px", paddingLeft: "130px", display: "flex" }}
        className="lapPhone"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div style={{ width: "550px" }} className={style.devices}>
          <div className={`${style.laptops}`}>
            <div className={style.laptops__img}>
              <img
                src="https://images.prismic.io/madbox/26398bd9-8592-4bfb-92a3-b3c8834c0786_numbers.png?auto=compress,format&w=1920"
                alt="Laptop Project"
              />
            </div>
            <div className={style.laptops__bg}>
              <img
                src="https://furkankoseoglu.com/content/images/project/laptop/device.png"
                alt="Laptop"
              />
            </div>
          </div>
          <div style={{ marginBottom: "110px" }} className={`${style.phones} `}>
            <div className={style.phones__img}>
              <img
                style={{ height: "180px", marginTop: "-10px" }}
                src="https://images.prismic.io/madbox/814dfad8-b932-4577-86cc-fb8ecfbc747c_SlingRacer_picture.png?auto=compress,format&w=640"
                alt="Phone Project"
              />
            </div>
            <div className={style.phones__bg}>
              <img
                src="https://furkankoseoglu.com/content/images/project/mobile/device.png"
                alt="Phone"
              />
            </div>
          </div>
          <div
            style={{
              top: "-141px",
              left: "18px",
              zIndex: "10",
              width: "270px",
              height: "170px",
            }}
            className={style.tablet}
          >
            <img
              style={{ width: "900px", height: "160px" }}
              // className={style.browser}
              src="https://images.prismic.io/madbox/6f5e6afe-1e28-4846-9583-48437e24550a_community.png?auto=compress,format&w=1280"
              alt=""
            />
          </div>
        </div>

        <div>
          <span className={style.spanColor}>
            THERE'S NO BETTER TIME <br />{" "}
            <span style={{ marginLeft: "170px" }}>TO GET STARTED </span> <br />{" "}
            <span style={{ marginLeft: "40px" }}>DOWNLOAD THE APP NOW</span>
          </span>
          <br />
          <br />
          <div style={{ marginLeft: "220px", display: "flex" }}>
            <div
              style={{
                background: "black",
                width: "150px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              {" "}
              <img
                style={{ width: "190px", height: "30px" }}
                src="https://static-cf.toppr.com/marketing/6cfbc5a/images/home/app-links/play-store.png"
                alt=""
              />{" "}
            </div>

            <div
              style={{
                background: "black",
                width: "150px",
                padding: "10px",
                borderRadius: "10px",
                marginLeft: "20px",
              }}
            >
              {" "}
              <img
                style={{ width: "190px", height: "30px" }}
                src="https://static-cf.toppr.com/marketing/6cfbc5a/images/home/app-links/brand-apple.png"
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </section> */}

      <section className={style.DwnlAppSection}>
        <h1 className={style.DwnldAppSect_Head}>
          Available on <span>Laptop</span>,<span>Tablet</span> and{" "}
          <span>Mobile</span>
        </h1>

        <img
          className="m-auto"
          style={{ width: "80vw" }}
          src="app.png"
          data-aos="zoom-in"
        />
      </section>
    </>
  );
}
