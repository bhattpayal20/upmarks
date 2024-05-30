import React, { useEffect } from "react";
import app from "../../../styles/App.module.css";
import Image from "next/image";
import Style from "../../../styles/Classes.module.css";
import AOS from "aos";

export default function BannerPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className={app.Main}>
        <div className={app.bannerFlexDiv}>
          <div className={app.bannerDiv}>
            <p className={app.bannerText}>
              Now is the <span className={app.imp}>time</span> to{" "}
              <span className={app.imp}>explore</span> the new <br /> virtue of{" "}
              <span className={app.imp}>education</span>
            </p>
            <p className={`${app.bannerSubText} my-8`}>
              India&apos;s First Exploration and Experimental learning App.
            </p>

            <div className={`${app.dwnldBtnDiv} mt-16`}>
              <img
                className={`${app.dwnldBtn} `}
                src="playstoreIcon.png"
                alt=""
              />
              <img className={app.dwnldBtn} src="appStoreIcon.png" alt="" />
            </div>
          </div>
          <div className={app.imgDiv} data-aos="zoom-in">
            {/* <img className={app.yellowBlob} src="yellowBlob.png" alt="" /> */}
            <Image
              className={app.bannerImg}
              src="/ourApp.png"
              alt=""
              height="1300"
              width="1300"
              style={{ marginTop: "-50px" }}
              // sizes="(max-width: 1300px) 100vw, 1300px"
            />
          </div>
        </div>

        <div className={app.nextDiv}>
          <div className="  overflow-hidden relative lg:flex lg:items-center mt-16 ">
            <div
              className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 lg:w-[800px]"
              // style={{ width: "800px" }}
            >
              <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                  Exploration
                </p>
                <span className={`block`}>
                  Learn Concept By Exploring Virtually
                </span>
              </h2>
              <p className=" text-black mt-4 text-lg leading-6">
                Explore concepts virtually by interacting with videos, playing
                games, quizzes and clear your concepts as you have full control
                over your own learnings. Learn at your own pace and have fun
                while learning new concepts.
              </p>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow"></div>
              </div>
            </div>
            <div
              className="flex items-center gap-8 "
              // p-8 lg:p-24"
              data-aos="fade-left"
            >
              <video autoPlay muted loop width={500} height={200}>
                <source src="/virtual exploration video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div
            className={` p-4  mx-auto px-4 sm:px-6 lg:px-8 relative py-26 mt-16 ${Style.bgImage} flex-col-reverse lg:flex-row md:flex-row `}
          >
            <div className="relative">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                  <h2 className="text-3xl font-extrabold text-black overflow-hidden">
                    <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                      Exploration
                    </p>
                    <span className={`block`}>
                      Virtual Experiments/Practicals/Activities
                    </span>
                  </h2>

                  <p className="mt-4 text-lg leading-6">
                    We provide the Virtual Lab where you can perform all the
                    practicals/experiment/ activities virtually just like you do
                    in your labs. Selecting all the equipments you need to
                    perform the experiment or activities on your own and then
                    perform the experiment and see the results.Easy to perform
                    and the fun way to learn while playing.
                  </p>
                  <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                    <li className="mt-6 lg:mt-0">
                      <div className="flex">
                        <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 ">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-4 text-base leading-6 font-medium text-black">
                          In Between Activities
                        </span>
                      </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                      <div className="flex">
                        <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 ">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-4 text-base leading-6 font-medium text-black">
                          100+ Experiments
                        </span>
                      </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                      <div className="flex">
                        <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 ">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-4 text-base leading-6 font-medium text-black">
                          Multiple Virtual Labs
                        </span>
                      </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                      <div className="flex">
                        <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800  ">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-4 text-base leading-6 font-medium text-black">
                          Hints to perform Practicals
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                  <div className="relative space-y-4">
                    <div
                      className="flex items-end justify-center lg:justify-start space-x-4"
                      data-aos="fade-right"
                    >
                      <video autoPlay muted loop width={500} height={200}>
                        <source
                          src="/virtual experiment lab.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative lg:flex mt-16">
            <div className="w-full py-12 px-4 sm:px-6 lg:py-24 lg:px-8 z-20  ">
              <h2 className="text-3xl font-extrabold text-black">
                <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                  Interactive
                </p>
                <span className={`block`}>Realtime Interactive Learning.</span>
              </h2>
              <p className=" mt-4 text-black  text-lg leading-6">
                Learn concepts interactively with 3D animations and interactive
                videos and proper explanation.
              </p>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow"></div>
              </div>
            </div>
            <div
              className="flex items-center gap-8 p-8 lg:p-24"
              data-aos="zoom-in"
            >
              <video autoPlay muted loop width={1800} height={700}>
                <source src="/interactive learning.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="  overflow-hidden relative lg:flex lg:items-center flex flex-col-reverse lg:flex-row md:flex-row  ">
            <video
              autoPlay
              muted
              loop
              width={600}
              height={200}
              data-aos="fade-right"
            >
              <source src="/gamify.mp4" type="video/mp4" />
            </video>
            <div
              className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
              // style={{ width: "800px" }}
            >
              <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                  Gamifying
                </p>
                <span className={`block`}>Learn Concepts While Playing.</span>
              </h2>
              <p className="text-lg mt-4 text-black">
                The easiest way of learning concept is here.. clearing and
                learning concepts in a fun way without getting bored is by
                playing games related to your concept. Play and learn at same
                time to improve your knowledge.
              </p>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow"></div>
              </div>
            </div>
            <div
              className="flex items-center gap-8 "
              // p-8 lg:p-24"
            >
              {/* <video autoPlay muted loop width={500} height={200} >
                <source src="/gamify.mp4" type="video/mp4" />
              </video> */}
            </div>
          </div>

          <div className="  overflow-hidden relative lg:flex lg:items-center mt-16  ">
            <div
              className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 lg:w-[800px]"
              // style={{ width: "800px" }}
            >
              <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                  Study Material
                </p>
                <span className={`block`}>Learn Through Revision Notes</span>
              </h2>
              <p className="text-lg mt-4 text-black">
                Go through the interactive notes and revise all your concepts in
                one go. No need to worry about language as l the notes are
                available in multi-language. Easy to understand which will also
                gonna save your time.
              </p>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow"></div>
              </div>
            </div>
            <div
              className="flex items-center gap-8 "
              // p-8 lg:p-24"
              data-aos="fade-left"
            >
              <video autoPlay muted loop width={600} height={300}>
                <source src="/InteractiveNotes.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="overflow-hidden relative lg:flex lg:items-center mt-16 flex flex-col-reverse lg:flex-row md:flex-row  ">
            <video
              autoPlay
              muted
              loop
              width={600}
              height={300}
              data-aos="zoom-in"
            >
              <source src="/quiz (2).mp4" type="video/mp4" />
            </video>
            <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
              <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                  Gamifying + Exercises
                </p>
                <span className={`block`}>
                  Take our Game Based Quizzes & tests to Become perfectionist.
                </span>
              </h2>
              <p className="text-lg mt-4 text-black">
                Discover revision test in a fun way by having our game based
                quizzes. Test your knowledge playing quiz. This will let you
                know your current grasp at the topics and tells you where you
                need improvement.
              </p>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow"></div>
              </div>
            </div>
            <div
              className="flex items-center gap-8 "
              // p-8 lg:p-24"
            >
              {/* <video autoPlay muted loop width={900} height={400} >
                <source src="/quiz (2).mp4" type="video/mp4" />
              </video> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
