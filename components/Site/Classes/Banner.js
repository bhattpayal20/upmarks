import React, { useEffect } from "react";
import AOS from "aos";
import Styles from "../../../styles/Classes.module.css";
import HomeStyle from "../../../styles/Home.module.css";
import Image from "next/image";
import { GiSmartphone } from "react-icons/gi";

import { useRouter } from "next/router";

export default function ClassBanner({ classData }) {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // classData = JSON.parse(classData);
  return (
    <div className={Styles.Banner}>
      <div className={Styles.bannerContent}>
        <h1>
          Explore upmarks for
          <br />
          curriculum of class{" "}
          <span className={Styles.animate_character}>{classData.class}</span>
        </h1>
        <p style={{ fontWeight: "semibold" }}>
          Explore our futuristic way of learning through our module based
          curriculum.
          <br /> Get UpMarks learning app for better understanding of concepts.
        </p>
        <button
          className={HomeStyle.btn_grad}
          onClick={() => router.push("/login")}
        >
          <GiSmartphone size={19} />
          <span style={{ marginLeft: "3px" }}>Download App</span>
        </button>
      </div>
      <div className={`mt-12 md:mt-0 ${Styles.bannerImg}`} data-aos="zoom-in">
        {/* <img src="study_kid.png" alt="class image" /> */}
        <Image src="/classtoon9.png" width={480} height={380} priority={true} />
      </div>
    </div>
  );
}
