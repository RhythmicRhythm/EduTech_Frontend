import React, { useState } from "react";
import { useFormik } from "formik";
import { forgotSchema } from "../../schemas";
import auth from "../../images/auth.png";
import logo from "../../images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../../services/authService";
import Load from "../../images/load.gif";
import toast, { Toaster } from "react-hot-toast";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Forgotpassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    const userData = {
      email: values.email,
    };

    console.log(userData);

    try {
      setIsLoading(true);
      const data = await forgotPassword(userData);
      console.log(data);
      if (data) {
        navigate("/verifycode");
      } else {
        console.log("Not Sent");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }s
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotSchema,
    onSubmit,
  });

  return (
    <>
     <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              borderRadius: "10px",
              background: "#145c87",
              color: "#fff",
            },
          },
          error: {
            style: {
              borderRadius: "10px",
              background: "#145c87",
              color: "#fff",
            },
          },
        }}
      />

      <section className="flex min-h-screen">
        <div className="z-0 flex w-full flex-col justify-center  px-0 text-black md:px-16 lg:w-1/2">
          <div className="min-w-screen flex min-h-screen items-center justify-center px-5 py-5">
            <div className="absolute top-0 right-0 left-0 p-4 text-center">
              <img src={logo} alt="logo" />
            </div>

            {isLoading ? (
              <div className="">
                <img className="w-[10rem]" src={Load} alt="" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-[400px]">
                <a href="/signin" className="font-bold flex gap-1 text-gray-500 mb-20 p-4 rounded-lg bg-gray-300 w-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>

                  <p>Back</p>
                </a>
                <div className="">
                  <p className="font-bold text-3xl text-gray-800">
                    {" "}
                    Forgot Password
                  </p>
                  <p className="mt-3 text-xs text-left text-gray-600 dark:text-gray-200">
                    Enter your email address let help you fix it
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

                <div className="mt-6">
                  <button className=" px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#0E927A]  rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Send Email
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${auth})`,
            backgroundSize: "contain",
          }}
          className="login-half relative hidden w-1/2 items-center bg-red text-white lg:flex"
        ></div>
      </section>
    </>
  );
};

export default Forgotpassword;
