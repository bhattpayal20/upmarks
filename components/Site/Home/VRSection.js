import React, { useEffect } from "react";
import style from "../../../styles/Home.module.css";
import AOS from "aos";

export default function VRSection() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className={` w-full ${style.VrSection}`}>
      <h1
        className={`text-center text-3xl font-bold	 lg:text-6xl p-4 ${style.Heading_Span}`}
      >
        Upcoming Features
      </h1>

      <div className=" md:flex lg:flex p-6 md:p-14 lg:p-14">
        <div style={{ width: "35vw" }} data-aos="zoom-in">
          <h1 className={style.VrHeading}>
            Get Transported To The
            <span className={style.Heading_Span}> New World Through </span>
            <span className={`${style.Heading_Span} ${style.animation}`}>
              {" "}
              V.
            </span>
            <span className={`${style.Heading_Span} ${style.anim}`}> R.</span>
          </h1>

          {/* <button className={style.btn_grad}>Explore VR</button> */}
        </div>
        <div>
          <img src="vr.png" className={style.VrImage} />
        </div>
      </div>

      <div className={`${style.ArSection}`}>
        <div
          className={` block md:flex lg:flex md:pt-24 lg:pt-56  ${style.sectHeight}`}
        >
          <div className={style.ArImgDiv}>a</div>

          <div className="p-8 lg:p-0" data-aos="zoom-in">
            <h1 className={style.VrHeading}>
              <span className={style.Heading_Span}> Augmented Reality </span>
              {/* <span className={`${style.Heading_Span} ${style.animation}`}>
                {" "}
                V.
              </span>
              <span className={`${style.Heading_Span} ${style.anim}`}> R.</span> */}
            </h1>
            <p className={style.Ar_para}>
              Augmented reality (AR) is an enhanced version of the real physical
              world that is achieved through the use of digital visual elements,
              sound, or other sensory stimuli delivered via technology.
            </p>

            {/* <button className={style.btn_grad}>Explore Ar</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
