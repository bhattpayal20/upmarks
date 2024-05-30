import React, { useState } from "react";
import styles from "../../styles/AdminPannel/Chapter.module.css";
import { TiLockClosed } from "react-icons/ti";
import { ImPointRight } from "react-icons/im";

export default function Chapter({ chapter }) {
  const [accordianopen, setAccordianopen] = useState(false);
  function setaccordianheight() {
    setAccordianopen(!accordianopen);
  }

  return (
    <>
      {/* <div style={{backgroundColor:"blue", height:"300px",width:"100%"}}></div> */}
      <div>
        <div
          id="main"
          onClick={setaccordianheight}
          className={`block p-6 rounded-lg shadow-lg  ${styles.card1}`}
        >
          {/* <div className={styles.icon}><TiLockClosed size={30} /></div> */}
          <div className={styles.number}>
            <p className={styles.numbernumber}>{chapter.module}</p>
          </div>
          <p className={styles.chapter}>Module{chapter.module}</p>

          {/* <div className={styles.icon}><TiLockClosed size={30} /></div> */}
          {accordianopen && (
            <>
              {chapter.chapters.map((SubTopic) => (
                <div
                  id="cardcard1"
                  key={SubTopic.chapterNumber}
                  className={`block p-6 rounded-lg shadow-lg bg-white   ${styles.cardcard1}`}
                >
                  <div className={styles.handicon}>
                    <ImPointRight size={30} />
                  </div>
                  <div className={styles.subtopic}>
                    {/* <ImPointRight size={20}/> */}
                    <p className={styles.subtopic1}>{SubTopic.chapterName}</p>
                    <p className={styles.Weightage}>
                      {SubTopic.totalWeightage}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className={styles.box}></div>
      </div>
    </>
  );
}
