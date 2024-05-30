import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebase from "../../../firebase";

import { useRouter } from "next/router";
import Link from "next/link";

export default function VerifyPhone({ setVerified }) {
  const router = useRouter();
  const [otpSent, setOtpSent] = useState(false);
  const [resp, setResp] = useState({ loading: false, data: null, error: null });
  const configureCaptcha = (values) => {
    console.log("cap ", new Date());
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit(values);
          console.log("Recaptca varified");
        },
        defaultCountry: "IN",
      }
    );
  };

  const onSignInSubmit = (values) => {
    console.log("in sign in submit", values);
    if (!window.recaptchaVerifier) configureCaptcha(values);
    else if (window.recaptchaVerifier) return window.recaptchaVerifier;
    console.log("cap ", new Date());
    const phoneNumber = "+91" + values.phoneNo;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log("result => ", confirmationResult);
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent", new Date());
        setResp({ loading: false });
        setOtpSent(true);
      })
      .catch((error) => {
        console.log("aa", error, new Date());
        setResp({ loading: false, error: "Something went Wrong" });
        console.log("SMS not sent");
      });
  };

  const onSubmitOTP = (values) => {
    const code = values.otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        setVerified(true);
        // ...
      })
      .catch((error) => {
        console.log("error", error);
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  const formik = useFormik({
    initialValues: {
      phoneNo: "",
    },

    validationSchema: Yup.object({
      phoneNo: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(10)
        .required(),
    }),

    onSubmit: async (values) => {
      console.log("in form phone submit", values);
      setResp({ loading: true });
      onSignInSubmit(values);
    },
  });

  const formikOtp = useFormik({
    initialValues: {
      otp: "",
    },

    validationSchema: Yup.object({
      otp: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(6)
        .required(),
    }),

    onSubmit: async (values) => {
      onSubmitOTP(values);
    },
  });
  return (
    <div className="mt-2	 px-12 sm:px-24 md:px-48 lg:px-12  xl:px-24 xl:max-w-2xl">
      <h2
        className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
          xl:text-bold mb-8"
        style={{ color: "#3884FB" }}
      >
        Sign Up
      </h2>
      {resp.error && (
        <>
          <div className="p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg ">
            <span className="font-medium">{resp.error}</span>
          </div>
        </>
      )}
      <div className={` "mt-4" : "mt-12"`}>
        {otpSent ? (
          <form onSubmit={formikOtp.handleSubmit}>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide ">
                Otp
              </div>
              <input
                type=""
                className="w-full text-lg py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                name="otp"
                placeholder="Enter your Otp"
                required
                onChange={formikOtp.handleChange}
                onBlur={formikOtp.handleBlur}
                value={formikOtp.values.otp}
              />
              {formikOtp.touched.otp && formikOtp.errors.otp ? (
                <div className="text-rose-500 text-sm font-semibold">
                  {formikOtp.errors.otp}
                </div>
              ) : null}
            </div>
            <button
              className={`bg-[#3884FB] text-gray-100 p-4 w-full rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-[#1871ff]
                      shadow-lg flex items-center justify-center  mt-8
                      `}
              type="submit"
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
              Submit
            </button>
          </form>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <div id="sign-in-button"></div>

            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide ">
                Phone Number
              </div>
              <input
                className="w-full text-lg py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                type=""
                placeholder="Enter your Phone No"
                name="phoneNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNo}
                required
              />
              {formik.touched.phoneNo && formik.errors.phoneNo ? (
                <div className="text-rose-500 text-sm font-semibold">
                  {formik.errors.phoneNo}
                </div>
              ) : null}
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className={`bg-[#3884FB] text-gray-100 p-4 w-full rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-[#1871ff]
                      shadow-lg flex items-center justify-center 
                      `}
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
                Get Otp
              </button>
            </div>
          </form>
        )}
        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          Already have a Accoount ?{" "}
          {router.query.nextUrl ? (
            <Link
              href={{
                pathname: "/login",
                query: { nextUrl: router.query.nextUrl },
              }}
            >
              <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                Login
              </a>
            </Link>
          ) : (
            <Link href={{ pathname: "/login" }}>
              <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                Login
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
