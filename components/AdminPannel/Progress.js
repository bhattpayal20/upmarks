import React from "react";
import styles from "../../styles/AdminPannel/Pro.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Progress({ progress }) {
  const router = useRouter();
  let { data } = router.query;
  data = JSON.parse(data);

  return (
    <>
      <div>
        <div className="m-auto p-4 pb-0">
          <h1 className="text-3xl sm:text-4xl tracking-wide font-bold text-center">
            Chapter - {data.chapterName}
          </h1>
          <h2 className="text-2xl sm:text-3xl mt-3 tracking-wide text-[#5278EE]	font-bold text-center">
            Topics Progress
          </h2>
        </div>
        <div className={` p-6 rounded-lg ${styles.main}`}>
          {progress.map((chapter_progress) => (
            <>
              <div
                className={`relative block p-6 sm:w-[80%] md:w-[48%] lg:w-[48%] xl:w-[49%] border-t-4 border-[#5278EE] rounded-sm shadow-xl m-auto`}
                // style={{ borderTopColor: `${chapter_progress.color}` }}
              >
                <h5 className="text-base font-semibold">
                  Topic number - {chapter_progress.topicNumber}
                </h5>
                <p className="mt-2 text-2xl font-bold text-black">
                  Topic Name - {chapter_progress.name}
                </p>

                <div className="flex justify-between mt-2">
                  <div>
                    <h2 className="text-base font-semibold ">Point scored</h2>
                    <h2
                      className="text-base font-semibold p-1.5 text-center bg-[#5278EE] rounded-full text-white mt-3"
                      // style={{ backgroundColor: `${chapter_progress.color}` }}
                    >
                      {chapter_progress.pointScored} /{" "}
                      {chapter_progress.totalPoints}
                    </h2>
                  </div>
                  <div className="flex mt-6">
                    {chapter_progress.pointScored >=
                      (85 * chapter_progress.totalPoints) / 100 && (
                      <>
                        <span>
                          <AiFillStar size={30} color="#5278EE" />
                        </span>{" "}
                        <span>
                          <AiFillStar size={30} color="#5278EE" />
                        </span>{" "}
                        <span>
                          <AiFillStar size={30} color="#5278EE" />
                        </span>
                      </>
                    )}
                    {chapter_progress.pointScored >=
                      (65 * chapter_progress.totalPoints) / 100 &&
                      chapter_progress.pointScored <
                        (85 * chapter_progress.totalPoints) / 100 && (
                        <>
                          <span>
                            <AiFillStar size={30} color="#5278EE" />
                          </span>{" "}
                          <span>
                            <AiFillStar size={30} color="#5278EE" />
                          </span>{" "}
                          <span>
                            <AiOutlineStar size={30} color="#5278EE" />
                          </span>
                        </>
                      )}
                    {chapter_progress.pointScored >=
                      (35 * chapter_progress.totalPoints) / 100 &&
                      chapter_progress.pointScored <
                        (65 * chapter_progress.totalPoints) / 100 && (
                        <>
                          <span>
                            <AiFillStar size={30} color="#5278EE" />
                          </span>
                          <span>
                            <AiOutlineStar size={30} color="#5278EE" />
                          </span>
                          <span>
                            <AiOutlineStar size={30} color="#5278EE" />
                          </span>
                        </>
                      )}
                    {chapter_progress.pointScored <
                      (35 * chapter_progress.totalPoints) / 100 && (
                      <>
                        <span>
                          <AiOutlineStar size={30} color="#5278EE" />
                        </span>
                        <span>
                          <AiOutlineStar size={30} color="#5278EE" />
                        </span>
                        <span>
                          <AiOutlineStar size={30} color="#5278EE" />
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
