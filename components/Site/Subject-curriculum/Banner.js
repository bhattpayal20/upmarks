import React from 'react'
import style from "../../../styles/Subject-curriculum.module.css";

export default function Banner() {
  return (
    <div className={style.hero_banner}>
        <div className={style.hero_image}>
             <span>
                 <img
                   src='subj2-banner.jpeg'
                 />
             </span>
        </div> 

        <div className={style.content_outer}>
            <div className={style.content_box}>
                <div>
                <h1 className={style.content_subject}>Class IX (Science)</h1>
                <h2 className={style.content_intro}>Start your fun learning journey with Science.</h2>
                <p className={style.content_desc}>With multilingual video support and exploration based
                    teaching, science is fun.
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}
