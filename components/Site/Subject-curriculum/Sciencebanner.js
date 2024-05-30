import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

export default function Sciencebanner({ bool, data }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="pt-32 p-8 sm:pt-24 sm:p-8 md:pt-24 md:p-4 lg:p-24 flex flex-wrap items-center	">
      <div className="pt-4 md:pt-12 w-full sm:w-1/2">
        <h1
          style={{
            fontSize: "22px",
            lineHeight: "32px",
            letterSpacing: "-0.5px",
            fontWeight: "700",
            marginBottom: "25px",
            color: "#2435b8",
            fontFamily: "'Work Sans', sans-serif",
          }}
        >
          {data && <>Class {data.class}</>} {data && data.subject}
        </h1>
        <h2
          style={{
            letterSpacing: "-0.5px",
            fontWeight: "700",
            marginBottom: "25px",
            maxWidth: "464px",
            color: "#282626",
            fontFamily: "'Work Sans', sans-serif",
          }}
          className="text-[2.6rem] leading-[1] sm:text-[56px] sm:leading-[56px]"
        >
          {data && "Start your fun learning journey with "}
          {data && data.subject}
          {bool && "About Us"}
        </h2>
        <p
          style={{
            // fontSize: "18px",
            // lineHeight: "30px",
            letterSpacing: "-0.2px",
            marginBottom: "16px",
            maxWidth: "409px",
            color: "#50585a",
            fontWeight: "500",
          }}
          className="text-base sm:text-lg sm:leading-[30px]"
        >
          {bool
            ? "Upmarks is one of the virtual learning application for class 9th 10th students. Our module based curriculum includes NCERT syllabus and it is designed in such a way that the students can get clarity of all the concepts virtually. We have fully interactive and fun ways of learning for each subjects."
            : "With multilingual video support and exploration based teaching."}
        </p>
      </div>
      <div className="w-full sm:w-1/2 pt-12" data-aos="zoom-in">
        {bool ? (
          <Image
            width={600}
            height={450}
            alt="about us Image"
            src={"/about.webp"}
          />
        ) : (
          <Image
            src={
              data && data.subject === "Science"
                ? "/scienceSub.svg"
                : "/mathSub.svg"
            }
            alt="subject image"
            width={775}
            height={706}
          />
        )}
      </div>
    </div>
  );
}

Sciencebanner.defaultProps = {
  bool: false,
};
// 2px 2px 5px 2px #767171
