import React, { useState } from "react";
import { GrPlayFill } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import Styles from "../../../styles/Subject-curriculum.module.css";

export default function Preview({ subject }) {
  const [show, setShow] = useState(false);

  const showfunction = () => {
    setShow(true);
  };

  return (
    <>
      <div className="p-3 sm:p-6 lg:p-10 bg-white mt-4">
        <div className={Styles.preview_section}>
          {!show && (
            <div
              className={
                subject === "Science"
                  ? Styles.preview_img
                  : Styles.preview_img_maths
              }
            >
              <button className={`${Styles.playBtn}`} onClick={showfunction}>
                <FaPlay size="30px" color="#fff" />
              </button>
            </div>
          )}
          <div
            className={`${Styles.preview_video} ${show ? "block" : "hidden"}`}
          >
            <iframe
              className={Styles.video_iframe}
              src={`https://www.youtube.com/embed/Xy7ibZ53thg?${
                show && "autoplay=1"
              }`}
              title="YouTube video player"
              frameBorder="0"
              allow={`accelerometer; 
                ${
                  show && "autoplay;"
                } clipboard-write; encrypted-media; gyroscope; picture-in-picture`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
