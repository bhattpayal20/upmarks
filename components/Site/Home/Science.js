import React, { useEffect } from "react";
import styles from "../../../styles/science.module.css";
import { GiProgression } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { IoMdSchool } from "react-icons/io";
import Image from "next/image";
import AOS from "aos";

export default function Science() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className={`block lg:flex md:flex ${styles.main2}`}>
        <div className={styles.div1}>
          <div>
            <p className={styles.heading}>Learn Science in an Exciting way</p>
          </div>
          {/* <div> */}
          {/* <Image alt="maths Gif" width={800} height={500} src="/maths.gif" /> */}
          <video
            autoPlay
            muted
            loop
            width={500}
            height={200}
            className="rounded-2xl lg:mt-16"
            data-aos="zoom-in"
          >
            <source src="/Science.mp4" type="video/mp4" />
          </video>

          {/* <video
              src="/maths-web.mp4"
              autoPlay
              muted
              loop
              width="500px"
              height="300px"
              controls={false}
            /> */}
          {/* </div> */}
        </div>
        <div className={styles.div2}>
          <ol className={`relative  border-black-200 ${styles.border1}`}>
            <li className="mb-10 ml-6">
              <span
                className={`flex absolute font-md font-extrabold -left-7 justify-center items-center w-14 h-14 bg-red-400 rounded-full ring-8 ring-white  ${styles.no}`}
              >
                {" "}
                01{" "}
              </span>
              <div
                className={`p-4 bg-white rounded-lg border border-gray-200 shadow-sm  ${styles.topic1}`}
              >
                <div className="justify-between items-center mb-3 sm:flex">
                  <div className=" font-bold mx-3.5  text-white-700 ">
                    Virtual Explorations and Experiments{" "}
                  </div>
                </div>
                <div
                  className={`p-3 text-sm  font-normal text-white-500 bg-white-100 rounded-lg   ${styles.subtopic1}`}
                >
                  {" "}
                  We provide virtual exploration and at the same time student
                  can perform experiment virtually.
                </div>
              </div>
            </li>

            <li className="mb-10 ml-6">
              <span
                className={`flex absolute -left-7 font-extrabold justify-center items-center w-14 h-14 bg-violet-400 rounded-full ring-8 ring-white  ${styles.no}`}
              >
                {" "}
                02{" "}
              </span>
              <div
                className={`p-4  rounded-lg border border-gray-200 shadow-sm  ${styles.topic2}`}
              >
                <div className="justify-between items-center mb-3 sm:flex">
                  <div className=" mx-3.5 font-bold text-black-500 ">
                    {" "}
                    Gamifying the Concepts & Test
                  </div>
                  {/* <div className={styles.icon1}><AiFillHome size={40}/></div> */}
                </div>
                <div
                  className={`p-3 text-sm  font-normal text-white-500 bg-white-100 rounded-lg   ${styles.subtopic2}`}
                >
                  {" "}
                  Learn concepts while playing and take our game based quizes
                  and test to become perfectionist.
                </div>
              </div>
            </li>

            <li className="mb-10 ml-6">
              <span
                className={`flex absolute -left-7 font-extrabold justify-center items-center w-14 h-14 bg-yellow-400 rounded-full ring-8 ring-white  ${styles.no}`}
              >
                {" "}
                03{" "}
              </span>
              <div
                className={`p-4 bg-white rounded-lg border border-gray-200 shadow-sm  ${styles.topic3}`}
              >
                <div className="justify-between items-center mb-3 sm:flex">
                  <div className=" mx-3.5 font-bold  text-black-500 ">
                    {" "}
                    Interactive Notes & Videos with Realtime Exploration
                  </div>
                </div>
                <div
                  className={`p-3 text-sm  font-normal text-white-500 bg-white-100 rounded-lg   ${styles.subtopic3}`}
                >
                  {" "}
                  Learn concepts interactively with 3d animations and videos &
                  revise all your concepts in a one go through our notes.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* science */}
      <div className={styles.main}>
        <div className={styles.div3}>
          <ol className={`relative  border-black-200  ${styles.border2}`}>
            <li className="mb-10 md:ml-6 lg:ml-6">
              <span
                className={`flex absolute font-md font-extrabold -left-7 justify-center items-center w-14 h-14 bg-red-400 rounded-full ring-8 ring-white  ${styles.no1}`}
              >
                {" "}
                01{" "}
              </span>
              <div
                className={`p-4 bg-white rounded-lg border border-gray-200 shadow-sm  ${styles.topic4}`}
              >
                <div className="justify-between items-center mb-3 sm:flex">
                  <div className=" font-bold mx-3.5  text-white-700 ">
                    Virtual Explorations and Experiments{" "}
                  </div>
                </div>
                <div
                  className={`p-3 text-sm  font-normal text-white-500 bg-white-100 rounded-lg   ${styles.subtopic4}`}
                >
                  {" "}
                  We provide virtual exploration and at the same time student
                  can perform experiment virtually.
                </div>
              </div>
            </li>

            <li className="mb-10 md:ml-6 lg:ml-6 ">
              <span
                className={`flex absolute -left-7 font-extrabold justify-center items-center w-14 h-14 bg-blue-400 rounded-full ring-8 ring-white  ${styles.no1}`}
              >
                {" "}
                02{" "}
              </span>
              <div
                className={`p-4  rounded-lg border border-gray-200 shadow-sm  ${styles.topic5}`}
              >
                <div className="justify-between items-center mb-3 sm:flex">
                  <div className=" mx-3.5 font-bold text-black-500 ">
                    {" "}
                    Gamifying the Concepts & Test
                  </div>
                  {/* <div className={styles.icon1}><AiFillHome size={40}/></div> */}
                </div>
                <div
                  className={`p-3 text-sm  font-normal text-white-500 bg-white-100 rounded-lg  `}
                >
                  {" "}
                  Learn concepts while playing and take our game based quizes
                  and test to become perfectionist.
                </div>
              </div>
            </li>

            <li className="mb-10 md:ml-6 lg:ml-6">
              <span
                className={`flex absolute -left-7 font-extrabold justify-center items-center w-14 h-14 bg-green-400 rounded-full ring-8 ring-white  ${styles.no1}`}
              >
                {" "}
                03{" "}
              </span>
              <div
                className={`p-4 bg-white rounded-lg border border-gray-200 shadow-sm  ${styles.topic6}`}
              >
                <div className="justify-between items-center mb-3 sm:flex">
                  <div className=" mx-3.5 font-bold  text-black-500 ">
                    {" "}
                    Interactive Notes & Videos with Realtime Exploration
                  </div>
                </div>
                <div
                  className={`p-3 text-sm  font-normal text-white-500 bg-white-100 rounded-lg   `}
                >
                  {" "}
                  Learn concepts interactively with 3d animations and videos &
                  revise all your concepts in a one go through our notes.
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className={styles.div4}>
          <div>
            <p className={styles.sci_heading}>Learn Maths in a Exciting way</p>
          </div>
          <div className="lg:mt-12" data-aos="zoom-in">
            {/* <img
              className={styles.sci}
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Azufre.gif"
              width={"65%"}
            /> */}
            {/* <Image alt="maths Gif" width={800} height={500} src="/maths.mp4" /> */}
            <video
              autoPlay
              muted
              loop
              width={500}
              height={200}
              className="rounded-2xl lg:mt-16"
            >
              <source src="/maths.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
