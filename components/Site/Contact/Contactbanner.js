import React from "react";
import Styles from "../../../styles/Home.module.css";
import Image from "next/image";

export default function Contactbanner() {
  return (
    <>
      <div
        className="md:w-full lg:w-full bg-[#4737DA] "
        style={{
          backgroundImage:
            "radial-gradient(circle at 17% 77%, rgba(17, 17, 17,0.04) 0%, rgba(17, 17, 17,0.04) 50%,rgba(197, 197, 197,0.04) 50%, rgba(197, 197, 197,0.04) 100%),radial-gradient(circle at 26% 17%, rgba(64, 64, 64,0.04) 0%, rgba(64, 64, 64,0.04) 50%,rgba(244, 244, 244,0.04) 50%, rgba(244, 244, 244,0.04) 100%),radial-gradient(circle at 44% 60%, rgba(177, 177, 177,0.04) 0%, rgba(177, 177, 177,0.04) 50%,rgba(187, 187, 187,0.04) 50%, rgba(187, 187, 187,0.04) 100%),linear-gradient(19deg, rgb(28, 117, 250),rgb(34, 2, 159))",
        }}
      >
        {/* <div className={`absolute hidden w-full lg:block bg-[#4737DA] h-96`} /> */}
        <div className="p-8 md:p-0 md:flex" style={{ padding: "102px 11px" }}>
          <div className="md:w-3/5">
            <div className="mt-0 md:mt-24 lg:mt-12 md:p-8">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
                Contact us
              </h1>

              <p className="font-normal text-base md:text-xl text-white">
                Let&apos;s talk about your query or question. Just send us a
                message and we will be in touch within one day!!
              </p>
              {/* <p className="font-normal text-xl mb-8 text-white"> */}
              {/* will be in touch within one day!! */}
              {/* </p> */}
            </div>
            {/* <div className="left-0 w-10 h-12 rounded-full bg-[#88B2E4] mt-5"></div> */}
          </div>
          <div className={`md:w-2/5 m-auto`}>
            <Image
              src="/contactPage.svg"
              // sizes="50vw"
              width={413}
              height={297}
              // width={"100%"}
              // height={"60%"}
              // layout="responsive"
              // className={`${Styles.image}`}
              // objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
