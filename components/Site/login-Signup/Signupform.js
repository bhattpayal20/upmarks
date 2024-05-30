import React, { useState } from "react";
import firebase from "../../../firebase";

import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import VerifyPhone from "./VerifyPhone";

export default function Signupform() {
  const router = useRouter();
  const [Class, setClass] = useState();
  const [verified, setVerified] = useState(true);

  const [values, setValues] = useState({
    // passwordShown: false,
    otpEntered: false,
  });

  const enterOTP = () => {
    setValues({ ...values, otpEntered: true });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneno: "",
      address: "",
      email: "",
      password: "",
      confirm: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().min(3).max(255).required("Name is required"),
      // class: Yup.string().max(2).required("Class is required"),
      // : Yup.integer().max(10).required("Phone number is required"),
      phoneno: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(10),
      // .max(10),

      address: Yup.string().min(3).max(255).required("Address is required"),
      email: Yup.string().min(3).max(255).email().required("Email is required"),
      // password: Yup.string().min(6).max(12).required("Password is required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      confirm: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),

    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      onSignInSubmit(values);
      // setResp({ loading: true });
      // let [err, response] = await request("POST", "/auth/password-login", {
      // });
      // if (!response.success) {
      //   setResp({ data: false, error: response.error.message, loading: false });
      // } else if (response.success) {
      //   setResp({ loading: false });
      //   play();
      // }
    },
  });

  if (verified)
    return (
      <div className="mt-2	 px-12 sm:px-24 md:px-48 lg:px-12  xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-4xl
        xl:text-bold mb-4"
        >
          Sign Up
        </h2>
        {/* {resp.error && (
        <>
          <div className="p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
            <span className="font-medium">{resp.error}</span>
          </div>
        </>
      )} */}
        <div className={` "mt-4" : "mt-12"`}>
          <form onSubmit={formik.handleSubmit}>
            <div id="sign-in-button"></div>

            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide ">
                Name
              </div>
              <input
                className="w-full text-lg py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                type=""
                placeholder="Enter your name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                required
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-rose-500 text-sm font-semibold">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>

            <div
              style={{ justifyContent: "space-between" }}
              className="lg:flex"
            >
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide mt-4">
                  Class
                  {/* <select>
                <option>10</option>
                <option>11</option>
              </select> */}
                </div>
                <div>
                  <div>
                    {/* <label for="class" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select class</label> */}
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={Class}
                      onChange={(e) => setClass(e.target.value)}
                      required
                    >
                      <option selected>Choose class</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                {/* <input
          
              className="w-full text-lg py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
              type=""
              placeholder="Enter your class"
              name="class"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.class}
              required
            /> */}

                {formik.touched.class && formik.errors.class ? (
                  <div className="text-rose-500 text-sm font-semibold">
                    {formik.errors.class}
                  </div>
                ) : null}
              </div>

              {/* <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide mt-4">
                  Phone Number
                </div>
                <input
                  className="w-full text-lg py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                  type=""
                  placeholder="XXXXXXXXXX"
                  name="phoneno"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneno}
                  required
                />
                {formik.touched.phoneno && formik.errors.phoneno ? (
                  <div className="text-rose-500 text-sm font-semibold">
                    {formik.errors.phoneno}
                  </div>
                ) : null}
              </div> */}

              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide mt-4">
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
            </div>

            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide mt-4">
                Address
              </div>
              <input
                className="w-full text-lg py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                type=""
                placeholder="Enter your address"
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                required
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-rose-500 text-sm font-semibold">
                  {formik.errors.address}
                </div>
              ) : null}
            </div>

            {/* <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide mt-4">
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
            </div> */}

            <div
              style={{ justifyContent: "space-between" }}
              className="lg:flex"
            >
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  // type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  required
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-rose-500 text-sm font-semibold">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <div className="mt-6 ml-2">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Confirm Password
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  // type={passwordShown ? "text" : "password"}
                  name="confirm"
                  placeholder="Re-enter your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirm}
                  required
                />
                {formik.touched.confirm && formik.errors.confirm ? (
                  <div className="text-rose-500 text-sm font-semibold">
                    {formik.errors.confirm}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className={`bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                    shadow-lg flex items-center justify-center 
                    `}
              >
                {/* {resp.loading && (
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
              )} */}
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm font-display font-semibold text-gray-700 text-center">
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
  else if (!verified) {
    return <VerifyPhone setVerified={setVerified} />;
  }
}
