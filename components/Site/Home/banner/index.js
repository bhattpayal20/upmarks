import React, { Suspense } from "react";
import { AiFillRightCircle } from "react-icons/ai";
// import Boy from "../../../Meshs/Boy";
import styles from "./banner.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Banner() {
  const router = useRouter();
  return (
    <>
      <div className={` ${styles.outer_div}`}>
        <div className={styles.main_div}>
          <div className={styles.text_div}>
            <div>
              <h2 className={styles.banner_head_title}>
                Explore education
                <br></br>
                in an exciting way
              </h2>
            </div>
            <div>
              {/* <p className={styles.banner_description_text}>
              No more cramming, learn anything at anytime in a fun and easy way.{" "}
            </p> */}
            </div>
            <button
              className={`${styles.btn_slide_anim} ${styles.get_start_btn}`}
              // onClick={() => router.push("/login")}
            >
              Download App
              <span style={{ float: "right", marginLeft: "10px" }}>
                <AiFillRightCircle size={25}></AiFillRightCircle>
              </span>
            </button>
          </div>

          <div className={styles.banner_image}></div>
        </div>
      </div>
    </>
  );
}
