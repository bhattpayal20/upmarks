import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "../banner/banner.module.css";
import AOS from "aos";

export default function ClassesCard({ classDetail }) {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      // href="#"
      data-aos="fade-up"
      className={`block p-6    border  shadow-2xl    rounded-2xl  ${styles.classCard} `}
      style={{
        background:
          classDetail.class === "9" ||
          classDetail.class === "4" ||
          classDetail.class === "5" ||
          classDetail.class === "8"
            ? "linear-gradient(99deg, #df335f, #e97a54)"
            : "linear-gradient(99deg, #5474ED, #1BB8FC)",
      }}
    >
      <h5
        className={`mb-2  font-bold tracking-tight   text-3xl ${styles.clasCardH2}`}
        style={{
          color: "rgb(255, 255, 255)",
          marginTop: "17px",
          fontSize: "49px",
          fontWeight: "500",
          fontFamily: "Work Sans",
        }}
      >
        {/* {props.class1} */}
        Class {classDetail.class}th
      </h5>
      <p
        className={`font-normal text-white  py-2 ${styles.classCardPara}`}
        style={{ fontSize: "20px", marginTop: "16px" }}
      >
        Start your fun learning journey with Exploration, Experimental &#38;
        fully interactive learning.
      </p>
      <div className="flex" style={{ height: "87px" }}>
        <button
          className={`${styles.btn_slide_anim} ${styles.get_start_btn}`}
          style={{
            background: "#fff",
            color: "black",
            padding: "11px 26px",
            marginTop: "29px",
          }}
          onClick={() =>
            router.push({
              pathname: `/class/[id]`,
              query: {
                id: classDetail.class,
                classData: JSON.stringify(classDetail),
              },
            })
          }
        >
          Explore
        </button>

        <img
          src={
            classDetail.class === "9" ||
            classDetail.class === "4" ||
            classDetail.class === "5" ||
            classDetail.class === "8"
              ? "/class9.png"
              : "/girl.png"
          }
          className={`float-right ${styles.classCardImg}`}
        />
      </div>
    </div>
  );
}
