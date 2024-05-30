import Image from "next/image";
import React from "react";
import Styles from "../../../styles/Classes.module.css";

export default function DescriptBox() {
  return (
    <div className="hidden sm:block">
      <div className={`${Styles.descript_outer}`}>
        <div className={Styles.descript_box}>
          <div className={Styles.descript_items}>
            <Image
              src="/users.gif"
              alt="students"
              // width={70}
              // height={45}
              width={100}
              height={80}
              className={Styles.descript_item_img}
              style={{
                marginTop: "8px",
              }}
            />
            <div className={Styles.descript_item_text}>
              <h2 className={Styles.descript_text_count}>1500+</h2>
              <h2 className={Styles.descript_text_title}>Student Enrolled</h2>
            </div>
          </div>

          <div className={Styles.descript_items}>
            {/* <Image
              src="/testube_1.gif"
              alt="experiments"
              width={100}
              height={70}
              className={Styles.descript_item_img}
            /> */}

            <video autoPlay muted loop width={80} height={80}>
              <source src="/experiment1.mp4" type="video/mp4" />
            </video>
            <div className={Styles.descript_item_text}>
              <h2 className={Styles.descript_text_count}>20+</h2>
              <h2 className={Styles.descript_text_title}>
                Virtual Experiments
              </h2>
            </div>
          </div>

          <div className={Styles.descript_items}>
            <video autoPlay muted loop width={80} height={80} className="m-2">
              <source src="/building 2.mp4" type="video/mp4" />
            </video>
            <div className={Styles.descript_item_text}>
              <h2 className={Styles.descript_text_count}>3</h2>
              <h2 className={Styles.descript_text_title}>Offline Institutes</h2>
            </div>
          </div>

          {/* <button style={{background: "blue", color: "#fff" }}>Buy Now</button> */}
        </div>
      </div>
    </div>
  );
}
