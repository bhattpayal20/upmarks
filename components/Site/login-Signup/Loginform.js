import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { setCookies } from "cookies-next";

import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import request from "../../../utils/request";
import { useRouter } from "next/router";

export default function Loginform() {
  const router = useRouter();
  const [queryShow, setQeryShow] = useState(router.query.nextUrl);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [values, setValues] = useState({
    loginIfDataexist: true,
    forgotpassword: false,
    verifyOtpIfentered: false,
    resetpassword: false,
  });

  const forgotCredential = () => {
    setValues({
      ...values,
      loginIfDataexist: false,
      forgotpassword: true,
      // verifyOtpIfentered: true
    });
  };

  const backtologin = () => {
    setValues({
      ...values,
      loginIfDataexist: true,
      forgotpassword: false,
      verifyOtpIfentered: false,
    });
  };

  const nextToenterOtp = () => {
    setValues({
      ...values,
      loginIfDataexist: false,
      forgotpassword: false,
      verifyOtpIfentered: true,
    });
  };

  const resetPasswordIfForgot = () => {
    setValues({
      ...values,
      loginIfDataexist: false,
      forgotpassword: false,
      verifyOtpIfentered: false,
      resetpassword: true,
    });
  };

  const redirecttologin = () => {
    setValues({
      ...values,
      loginIfDataexist: true,
      forgotpassword: false,
      verifyOtpIfentered: false,
      resetpassword: false,
    });
  };

  //loading
  const [resp, setResp] = React.useState({
    loading: false,
    data: "",
    error: null,
  });

  //for validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .min(3)
        .max(255)
        .email()
        .required("Please Enter your Email"),
      password: Yup.string()
        .min(8, "Password must be 8 characters long.")
        // .matches(
        //   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        //   "Must contain 8 characters, One Uppercase, One lowercase, One number and one special case Character"
        // )
        .required("Please Enter your Password"),
    }),

    onSubmit: async (values) => {
      setResp({ loading: true });
      let [err, response] = await request("POST", "/auth/password-login", {
        accountId: values.email,
        password: values.password,
        platformName: "User_Web_Platform",
      });
      if (!response.success) {
        setResp({ data: false, error: response.error.message, loading: false });
      } else if (response.success) {
        setResp({ loading: false, data: response.data, error: null });

        setCookies("token", response.data.token);
        if (router.query.nextUrl) {
          router.reload(`/Admin${router.query.nextUrl}`);
        }

        router.reload("/Admin/Dashboard");
      }
    },
  });

  return (
    <div className="mt-8 px-12 sm:px-24 md:px-48 lg:px-12  xl:px-24 xl:max-w-2xl">
      <h2
        className="text-center text-4xl text-[#3884FB]  font-display font-semibold lg:text-left xl:text-5xl
        xl:text-bold"
      >
        Welcome Back
      </h2>
      {resp.error && (
        <>
          <div className="p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg ">
            <span className="font-medium">{resp.error}</span>
          </div>
        </>
      )}
      <div className={`${resp.error ? "mt-4" : "mt-12"}`}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Email Address
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type=""
              placeholder="mike@gmail.com"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-rose-500 text-sm font-semibold">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Password
              </div>
              <div>
                <a
                  className="text-xs font-display font-semibold text-[#3884FB] hover:text-indigo-800
                            cursor-pointer"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-rose-500 text-sm font-semibold">
              {formik.errors.password}
            </div>
          ) : null}
          <div className="mt-10">
            <button
              type="submit"
              className={`bg-[#3884FB] text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                    shadow-lg flex items-center justify-center  ${
                      resp.loading && "cursor-not-allowed"
                    }
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
              Log In
            </button>
          </div>
        </form>
        <div className="m-6 text-sm font-display font-semibold text-gray-700 text-center">
          Dont have an account ?{" "}
          {router.query.nextUrl ? (
            <Link
              href={{
                pathname: "/Signup",
                query: { nextUrl: router.query.nextUrl },
              }}
            >
              <a className="cursor-pointer text-[#3884FB] hover:text-indigo-800">
                Sign up
              </a>
            </Link>
          ) : (
            <Link href={{ pathname: "/Signup" }}>
              <a className="cursor-pointer text-[#3884FB] hover:text-indigo-800">
                Sign up
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
