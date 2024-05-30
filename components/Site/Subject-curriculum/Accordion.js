import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Styles from "../../../styles/Subject-curriculum.module.css";

export function Panel({ color, chapter }) {
  return (
    <>
      {chapter.map((data, index) => (
        <div className={Styles.accordion_panel} key={index}>
          <div
            className={Styles.accordion_topic}
            style={{
              borderLeft: `10px solid ${color}`,
            }}
          >
            <p className={Styles.accordion_topicName}>{data.chapterName}</p>
            {/* <h2
              className={Styles.accordion_topicWeightage}
              style={{
                background: color,
              }}
            >
              {data.totalWeightage} Marks
            </h2> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default function Accordion({ colors, curriculum }) {
  const [show, setShow] = useState(false);
  console.log("data=>", curriculum);

  return (
    <>
      <div
        className={Styles.accordion}
        style={{
          background: `linear-gradient(99deg, ${colors.color1}, ${colors.color2})`,
        }}
      >
        <div className={Styles.accordion_header} onClick={() => setShow(!show)}>
          <h2
            className={Styles.accordion_chapterNum}
            style={{
              color: colors.color1,
            }}
          >
            {curriculum.module}
          </h2>
          <p className={Styles.accordion_chapterName}>
            {/* Module-{curriculum.module} */}
            Topics
          </p>
          <span
            className={Styles.cheveron}
            style={{
              color: colors.color1,
            }}
          >
            {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
        {show && <Panel chapter={curriculum.chapters} color={colors.color2} />}
      </div>
    </>
  );
}
