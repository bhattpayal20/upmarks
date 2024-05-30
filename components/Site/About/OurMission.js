import React from "react";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function OurMission() {
  return (
    <div className="p-8 sm:p-8 lg:px-24 sm:pt-4 sm:pb-8">
      <div className="flex flex-wrap gap-y-20 items-center">
        <div className="w-full sm:w-[50%]">
          <h1 className="text-[2.6rem] sm:text-5xl font-bold font-sans	">
            Our Mission
          </h1>
          <p className="text-base sm:text-lg mt-7 font-sans	sm:leading-[30px] font-medium">
            Our mission is to promote student achievement and preparation for
            global competitiveness by fostering educational excellence and
            ensuring equal access.
          </p>
        </div>
        <div className="w-full sm:w-[50%]">
          <Image src="/mission.jpg" width={400} height={300} />
        </div>
      </div>

      <div className="flex flex-wrap-reverse gap-y-20 mt-16 sm:mt-28 items-center">
        <div className="w-full sm:w-[50%]">
          <Image src="/vision.webp" width={400} height={300} />
        </div>
        <div className="w-full sm:w-[50%]">
          <h1 className="text-[2.6rem] sm:text-5xl font-bold font-sans	">
            Our Vision
          </h1>
          <p className="text-base sm:text-lg mt-7 font-sans	sm:leading-[30px] font-medium">
            Our Vision is to provide support to the traditional way of teaching
            by bringing engaging content , virtual labs , Experiments ,
            Exploration based learning that will provide students a better
            learning experience.
          </p>
        </div>
      </div>

      <div className="mt-16 sm:mt-28">
        {/* <div className="flex items-center justify-between h-[90%] w-[80%] absolute z-0 mt-24">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div> */}
        <div className="xl:px-20 2xl:mx-auto 2xl:container relative z-40">
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={3}
          >
            <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
              Our Team
              {/* <br /> */}
            </h1>
            {/* <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
              Our Team
            </h1> */}
            <Slider>
              <Slide index={0}>
                <div
                  className="flex relative"
                  style={{ transform: "translateX(0%)" }}
                >
                  <div className="mt-6 sm:mt-14 md:flex">
                    <div className="relative lg:w-[38%] sm:w-96 xl:h-96 h-80">
                      <img
                        src="/Jayant.jpg"
                        alt="image of profile"
                        className="grayscale w-full h-full flex-shrink-0 object-fit object-contain shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                          Great Teams make great product.
                        </h1>
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                          Everyday we strive to make out platform better &
                          better. Beside giving the best quality content, we
                          also pay attention to our customers feedback and do
                          time to time brainstorming in order to make our
                          product better.
                        </p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800">
                          Jayant Barthwal
                        </p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                          Unity Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1} tabIndex="null">
                <div className="flex">
                  <div className="mt-6 sm:mt-14 md:flex">
                    <div className="relative lg:w-[38%] sm:w-96 xl:h-96 h-80">
                      <img
                        src="/pankaj.jpg"
                        alt="image of profile"
                        className="grayscale w-full h-full flex-shrink-0 object-fit object-contain shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                          Great Teams make great product.
                        </h1>
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                          We continuosly try to make learning more fun and
                          fruitfull for our students. we always remember our
                          customers always comes first, the last thank you
                          should always comes from us.
                        </p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800">
                          Pankaj Rawat
                        </p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={2} tabIndex="2">
                <div className="flex">
                  <div className="mt-6 sm:mt-14 md:flex">
                    <div className="relative lg:w-[38%] sm:w-96 xl:h-96 h-80">
                      <img
                        src="/HarshDev.jpeg"
                        alt="image of profile"
                        className="grayscale w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                          Great Teams make great product.
                        </h1>
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                          Everyday we are giving our best efforts to make this
                          platform best in the world and affordable for all
                          students.This will benefit our students in long run by
                          helping them shape their future in a fun way.
                        </p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800">
                          Harsh Kumar
                        </p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <div className="flex items-center mt-8">
              <ButtonBack
                className="cursor-pointer "
                role="button"
                aria-label="previous slide"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                  alt="previous"
                />
              </ButtonBack>

              <ButtonNext
                role="button"
                aria-label="next slide"
                className="cursor-pointer ml-2"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                  alt="next"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}
