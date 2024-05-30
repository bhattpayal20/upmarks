import React, { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
import Banner from "../../components/Site/Classes/Banner";
import DescriptBox from "../../components/Site/Classes/DescriptBox";

import Style from "../../styles/Classes.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

function Class() {
  const router = useRouter();
  const { id, classData } = router.query;
  const object = JSON.parse(classData);
  const classId = object.classId;

  const [state, setState] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>Class</title>
      </Head>

      <Banner classData={object} />
      <DescriptBox />

      <div
        className={`pt-20 m-2 sm:m-6 md:m-10 lg:m-[52px] xl:m-[86px] flex justify-center item-center bg-[#eee] flex-col	rounded-md ${Style.chooseSub}	`}
      >
        <h1 className={Style.head_Text} data-aos="zoom-in">
          Subject we <span>Teach</span>
        </h1>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>{" "}
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>{" "}
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <p className={`${Style.para_text}`}>
          Upmarks is one of the virtual learning application for class 3rd to
          10th students. Our module based curriculum includes NCERT syllabus and
          it is designed in such a way that the students can get clarity of all
          the concepts virtually. We have fully interactive and fun ways of
          learning for each subjects. Our comprehensive modules based curriculum
          have unlimited virtual exploration, experiments &amp; games access
          that helps student to get better understanding of each &amp; every
          concepts.
        </p>
        <div className="m-auto flex">
          {object &&
            object.subjects.map((sub) => (
              <div style={{ margin: "20px" }} key={sub.subjectId}>
                {console.log("sub", sub)}
                <Image
                  // placeholder="blur"
                  // blurDataURL="/science-card.png"
                  src={
                    sub.subject === "Science"
                      ? "/science-card.png"
                      : "/mathsCard.png"
                  }
                  alt={"subject Image"}
                  width={320}
                  height={320}
                  className="m-4 cursor-pointer"
                  // key={sub.subjectId}
                  onClick={() =>
                    router.push({
                      pathname: "/Curriculum",
                      query: {
                        data: JSON.stringify({
                          subjectId: sub.subjectId,
                          classId: classId,
                          subject: sub.subject,
                          class: object.class,
                        }),
                      },
                    })
                  }
                />
              </div>
            ))}
        </div>
      </div>

      <div className=" py-12 flex flex-col ">
        <h1 className={Style.head_Text} data-aos="zoom-in">
          Right Way To <span>Learn</span>
        </h1>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>{" "}
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>{" "}
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <div className="m-auto lg:p-16">
          <Image
            src="/eduInfo.svg"
            alt="How It Works "
            width={1000}
            height={1600}
            priority={true}
          />
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col  justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 py-10">
            <div className="max-w-xl mb-6">
              <h2
                className={`${Style.AppDwnld_head} font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none  mb-6`}
              >
                There is No Better Time To get Started
                {/* <br className="hidden md:block" /> */}
                <span className="inline-block text-deep-purple-accent-400">
                  Download the Beta App Now for Free
                </span>
              </h2>
              <p className="text-black text-base md:text-lg">
                Get an UpMarks Learning App and explore new virtue of learning
                for Free.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <a className="w-32 transition duration-300 hover:shadow-lg">
                <img
                  src="https://kitwind.io/assets/kometa/app-store.png"
                  className="object-cover object-top w-full h-auto mx-auto"
                  alt=""
                />
              </a>
              <a className="w-32 transition duration-300 hover:shadow-lg">
                <img
                  src="https://kitwind.io/assets/kometa/google-play.png"
                  className="object-cover object-top w-full h-auto mx-auto"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div
            className="flex items-center justify-center lg:w-1/2"
            // data-aos="fade-left"
          >
            <Image width={320} height={420} src="/app2.png" alt="app" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Class;
