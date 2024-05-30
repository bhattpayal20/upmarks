import React, { useEffect } from "react";
import AOS from "aos";
import style from "../../../styles/Subject-curriculum.module.css";
import Image from "next/image";

export default function About({ subject }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={`${style.about_subject}`}>
      <h2 className={`sm:ml-[50px] ${style.about_text}`}>
        There are a plenty of reasons why you should opt for this {subject}{" "}
        course. Some are listed below.
      </h2>

      <div className={`${style.subject_specifications} justify-items-center`}>
        <div className={style.specific_side1} data-aos="fade-up">
          <div className={style.specific_item}>
            <div className={style.specific_item_img}>
              <Image src="/exploreicon.png" width={110} height={125} />
            </div>

            <h2>
              <span className={style.specific_item_title}>
                Virtual Exploration &amp; Experiments
              </span>
              <span className={style.specific_item_info}>
                Virtual environment to explore what you learn.
              </span>
            </h2>
          </div>
          <div className={style.specific_item}>
            <div className={style.specific_item_img}>
              <Image src="/videosicon.png" width={75} height={60} />
            </div>

            <h2>
              <span className={style.specific_item_title}>150+ Video</span>
              <span className={style.specific_item_info}>
                Realtime Interactive Videos
              </span>
            </h2>
          </div>
          <div className={style.specific_item}>
            <div className={style.specific_item_img}>
              <Image src="/quizicon.png" width={108} height={130} />
            </div>
            <h2>
              <span className={style.specific_item_title}>
                Gamified Quizzes
              </span>
              <span className={style.specific_item_info}>
                Numerous quizes in each topic for better practice.
              </span>
            </h2>
          </div>
        </div>
        <div className={`${style.specific_image}`} data-aos="zoom-in">
          <Image
            src={subject === "Science" ? "/scienceHuman.svg" : "/mathHuman.svg"}
            alt="boy gril image"
            width={3000}
            height={3000}
            layout="responsive"
          />
        </div>
        <div className={style.specific_side2} data-aos="fade-up">
          <div className={style.specific_item}>
            <div className={style.specific_item_img}>
              <Image src="/gamifiedicon.png" width={161} height={125} />
            </div>
            <h2>
              <span className={style.specific_item_title}>
                Gamified learning
              </span>
              <span className={style.specific_item_info}>
                Brilliantly designed curriculum covering everything crucial.
              </span>
            </h2>
          </div>
          <div className={style.specific_item}>
            <div className={style.specific_item_img}>
              <Image src="/languageicon.png" width={116} height={112} />
            </div>
            <h2>
              <span className={style.specific_item_title}>
                Multilingual Support
              </span>
              <span className={style.specific_item_info}>
                Support of both English &amp; Hindi language.
              </span>
            </h2>
          </div>

          <div className={style.specific_item}>
            <div className={style.specific_item_img}>
              <Image src="/notesicons.png" width={120} height={115} />
            </div>
            <h2>
              <span className={style.specific_item_title}>Revision Notes</span>
              <span className={style.specific_item_info}>
                You can purchase how many module you want
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
