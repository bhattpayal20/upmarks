import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import request from "../../../utils/request";

import { MdPersonOutline, MdOutlineMessage } from "react-icons/md";
import Contactbanner from "./Contactbanner";

export default function Contact() {
  const [resp, setResp] = React.useState({
    loading: false,
    data: "",
    error: null,
  });

  //for validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      text: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().min(3).max(15).required("Please Enter Your Name"),
      email: Yup.string()
        .min(3)
        .max(255)
        .email()
        .required("Please Enter your Email"),
      text: Yup.string().min(3).max(500).required("Please Enter Your Message"),
    }),

    onSubmit: async (values, { resetForm }) => {
      setResp({ loading: true });
      let [err, response] = await request("POST", "/admin/contact-us", {
        name: values.name,
        userEmail: values.email,
        text: values.text,
      });
      resetForm();

      if (!response.success) {
        setResp({ data: false, error: response.error.message, loading: false });
      } else if (response.success) {
        setResp({ loading: false, data: response.data, error: null });
        toast.success("Thanks! For Contacting Us", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        {/* bg-[#88B2E4] */}
        <Contactbanner />
        <div className="-mt-[94px] p-2 md:pb-24 relative">
          <div
            className="bg-white md:flex lg:p-6 xl:p-12 md:max-w-xl lg:max-w-3xl xl:max-w-4xl	md:m-auto rounded-xl"
            style={{
              boxShadow: "0px 0px 17px 2px #9d9999",
              //  0px 0px 20px 2px #545151
            }}
          >
            {/* left side div */}
            <div className="p-4 md:mt-3">
              {/* heading */}
              <div className="mb-4">
                <h2
                  className="text-[#3884FB]  text-3xl font-semibold mb-2"
                  style={{
                    fontFamily: "Roboto, HelveticaNeue, Arial, sans-serif",
                  }}
                >
                  Get in Touch
                </h2>
                <p
                  className="text-gray-500 text-lg"
                  style={{
                    fontFamily: "Roboto, HelveticaNeue, Arial, sans-serif",
                  }}
                >
                  Feel free to drop us a line below!
                </p>
              </div>

              {/* form */}
              <div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="flex relative mt-5">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-[#3884FB] border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <MdPersonOutline size={20} color="white" />
                    </span>
                    <input
                      type="text"
                      id="email-with-icon"
                      className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-52 lg:w-[17rem] xl:w-80 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#6352fb] focus:border-transparent"
                      name="name"
                      placeholder="Your name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      required
                    />
                  </div>
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-rose-500 text-sm font-semibold">
                      {formik.errors.name}
                    </div>
                  ) : null}

                  <div className="flex relative mt-5">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-[#3884FB] border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <HiOutlineMail size={20} color="white" />
                    </span>
                    <input
                      type="text"
                      id="email-with-icon"
                      className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-52 lg:w-[17rem] xl:w-80 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#6352fb] focus:border-transparent"
                      name="email"
                      placeholder="Your email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      required
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-rose-500 text-sm font-semibold">
                      {formik.errors.email}
                    </div>
                  ) : null}

                  <div className="flex relative mt-5">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-[#3884FB] border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <MdOutlineMessage size={20} color="white" />
                    </span>
                    <textarea
                      id="email-with-icon"
                      className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-52 lg:w-[17rem] xl:w-80 lg:h-24 xl:h-28 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#6352fb] focus:border-transparent"
                      name="text"
                      placeholder="Type your message here...."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.text}
                      required
                    />
                  </div>
                  {formik.touched.text && formik.errors.text ? (
                    <div className="text-rose-500 text-sm font-semibold">
                      {formik.errors.text}
                    </div>
                  ) : null}

                  {/* <div className="text-center"> */}
                  <button
                    type="submit"
                    style={{
                      fontFamily: "Roboto, HelveticaNeue, Arial, sans-serif",
                      height: "2.5rem",
                      // boxShadow: "0px 0px 13px 2px #aadafb",
                      // boxShadow: "3px 4px 2px 1px #ada8a8",
                    }}
                    className={`items-center justify-center p-2 w-full font-medium tracking-wide bg-[#3884FB] text-sm text-white transition duration-200 shadow-md mt-5 flex items-center justify-center  ${
                      resp.loading && "cursor-not-allowed"
                    }`}
                  >
                    {resp.loading && (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                    Send Message
                  </button>
                  {/* </div> */}
                </form>
              </div>
            </div>

            {/* right side div */}
            <div
              className="bg-white rounded-xl hidden md:block md:mt-3 lg:mt-0"
              style={{ fontFamily: "Roboto, HelveticaNeue, Arial, sans-serif" }}
            >
              <div>
                <Image width={360} height={250} src="/contact page.svg" />
              </div>

              <div className="pl-[52px] md:pt-4 lg:pt-0">
                <div className="flex items-center">
                  <div
                    className="p-1 rounded-full"
                    style={{ border: "1px solid #3884FB" }}
                  >
                    <HiOutlineLocationMarker color="#3884FB" size={22} />
                  </div>
                  <div className="pl-4">
                    <p
                      className="text-black"
                      style={{
                        fontFamily: "Roboto, HelveticaNeue, Arial, sans-serif",
                      }}
                    >
                      Santnagar, Burari
                    </p>
                  </div>
                </div>

                <div className="flex items-center md:mt-6 lg:mt-2 ">
                  <div
                    className="p-1 rounded-full"
                    style={{ border: "1px solid #3884FB" }}
                  >
                    <HiOutlineMail color="#3884FB" size={22} />
                  </div>
                  <div className="pl-4">
                    <p
                      className="text-black"
                      style={{
                        fontFamily: "Roboto, HelveticaNeue, Arial, sans-serif",
                      }}
                    >
                      contact@upmarks.in
                    </p>
                  </div>
                </div>

                {/* <div className="mb-4 flex items-center">
                  <div className="p-2">
                    <HiOutlineOfficeBuilding color="#76bcef" size={22} />
                  </div>
                  <div className="p-2">
                    <p
                      className="text-black"
                      style={{
                        fontFamily: "Roboto, HelveticaNeue, Arial, sans-serif",
                      }}
                    >
                      Upmarks
                    </p>
                  </div>
                </div> */}

                <div className="flex items-center md:mt-6 lg:mt-2">
                  <div
                    className="p-1 rounded-full"
                    style={{ border: "1px solid #3884FB" }}
                  >
                    <HiOutlinePhone color="#3884FB" size={22} />
                  </div>
                  <div className="pl-4">
                    <p
                      className="text-black"
                      style={{
                        fontFamily: "Roboto, HelveticaNeue, Arial, sans-serif",
                      }}
                    >
                      +91 9625781411
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="mb-6">
                <h2 className="text-3xl font-semibold text-white">
                  Contact us
                </h2>
              </div>
              
              

                
                <div className="flex mt-9 justify-around	">
                  <div>
                    <TiSocialInstagram color="white" size={28} />
                  </div>

                  <div>
                    <TiSocialTwitter color="white" size={28} />
                  </div>

                  <div>
                    <TiSocialLinkedin color="white" size={28} />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
