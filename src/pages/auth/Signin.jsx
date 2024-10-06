import React, { useState } from "react";
import { useFormik } from "formik";
import { signinSchema } from "../../schemas";
import { useDispatch, useSelector } from "react-redux";
import auth1 from "../../images/auth1.png";
import logo from "../../images/Logo.png";
import Load from "../../images/load.gif";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../../services/authService";
import axios from "axios";
import { signin } from "../../redux/Slices/authSlice";

const initialValues = {
  email: "",
  password: "",
};

const Signin = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signinSchema,
    onSubmit: async (values) => {
      try {
        const response = await dispatch(signin(values)).unwrap();
        toast.success("Welcome eweeewewe");
        console.log(response);
        // navigate(`/verifyemail/${response.email}`);
        navigate(`/dashboard/home`);
      } catch (error) {
        toast.error(error.message || "Failed to sign up");
        console.log(error);
      }
    },
  });

  return (
    <>
      <section className="flex min-h-screen">
        <div className="z-0 flex w-full flex-col justify-center  px-0 text-black md:px-16 lg:w-1/2">
        <div
            style={{
              backgroundImage: `url(${auth1})`,
              backgroundPosition: "center",
            }}
            className="w-full h-20 sm:hidden"
          ></div>
          <div className="min-w-screen flex min-h-screen items-center justify-center px-5 py-5">
            <div className="absolute top-20 sm:top-0 right-0 left-0 p-4 text-center">
              <img src={logo} alt="logo" />
            </div>

            {loading ? (
              <div className="">
                <img className="w-[10rem]" src={Load} alt="" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-[400px]">
                <div className="">
                  <p className="mt-3 text-xs text-left text-gray-600 dark:text-gray-200">
                    Welcome to Ofspace Academy
                  </p>
                  <p className="font-bold text-2xl text-gray-800">
                    {" "}
                    Login With
                  </p>
                </div>

                <div className="mt-4">
                  <label className="text-xs text-gray-500 mb-2">
                    Email Address
                  </label>
                  <input
                    className={`w-full px-8 py-3 rounded-lg mb-2 font-medium bg-[#fff] border-2 ${
                      errors.email && touched.email
                        ? "border-red-300 "
                        : "border-gray-200 "
                    }placeholder-gray-500 text-sm focus:outline-none ${
                      errors.email && touched.email
                        ? "focus:border-red-300 focus:bg-white "
                        : "focus:border-gray-200 focus:bg-white "
                    }`}
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p className="error text-xs text-red-300">{errors.email}</p>
                  )}
                </div>
                <div className="mt-4">
                  <label className="text-xs text-gray-500 mb-2">Password</label>
                  <input
                    className={`w-full px-8 py-3 rounded-lg mb-2 font-medium bg-[#fff] border-2 ${
                      errors.password && touched.password
                        ? "border-red-300 "
                        : "border-gray-200 "
                    }placeholder-gray-500 text-sm focus:outline-none ${
                      errors.password && touched.password
                        ? "focus:border-red-300 focus:bg-white "
                        : "focus:border-gray-200 focus:bg-white "
                    }`}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="flex justify-between">
                    <p></p>
                    <a
                      href="/forgotpassword"
                      className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  {errors.password && touched.password && (
                    <p className="error text-xs text-red-300">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="mt-6 w-full">
                  <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#0E927A]  rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Login
                  </button>
                </div>
                <div className="mt-12 flex gap-2">
                  <p className="text-xs">have an account?</p>
                  <a
                    href="/signup"
                    className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
                  >
                    Sign up
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="login-half relative hidden w-1/2 items-center bg-[#F4FAF9] text-white lg:flex justify-center">
          <img src={auth1} alt="" />
        </div>
      </section>
    </>
  );
};

export default Signin;
