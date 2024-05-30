import React from "react";
import ChapterCard from "./Chapter";
import styles from "../../styles/AdminPannel/Chapter.module.css";

export default function Curriculam({ Chapter }) {
  return (
    <div className={`flex justify-center ${styles.main}`}>
      <div className={`block  bg-white  ${styles.maincard}`}>
        <div className={styles.banner}>
          <p>Curriculam</p>
        </div>

        <div className={styles.newcard}>
          <div
            className={styles.card11}
            // style={{
            //   marginTop: "-180px",
            //   backgroundColor: "white",
            //   position: "absolute",
            // }}
          >
            {Chapter.map((chapter, index) => (
              <ChapterCard key={index} chapter={chapter} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
