import React, { useState } from "react";
import { useFormik } from "formik";
import { verifySchema } from "../../schemas";
import auth from "../../images/auth.png";
import auth1 from "../../images/auth1.png";
import logo from "../../images/Logo.png";
import { verifycode } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import Load from "../../images/load.gif";
import toast, { Toaster } from "react-hot-toast";


const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Verifycode = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (e) => {
    const userData = {
      code: values.code,
    };

    console.log(userData);

    try {
      setIsLoading(true);
      const data = await verifycode(userData);
      console.log(data);
      if (data) {
        navigate("/resetpassword");
      } else {
        console.log("Not Sent");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("log");
    }
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
      code: "",
    },
    validationSchema: verifySchema,
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
              
                <div className="">
                  <p className="font-bold text-3xl text-gray-700">
                    {" "}
                    Verification Code
                  </p>
                  <p className="mt-3 text-xs text-left text-gray-600 dark:text-gray-200">
                    Enter the verification code sent to your email
                  </p>
                </div>

                <div className="mt-8">
                  <input
                    className={`w-full px-8 py-3 rounded-lg mb-2 font-medium bg-[#fff] border-2 ${
                      errors.code && touched.code
                        ? "border-red-300 "
                        : "border-gray-200 "
                    }placeholder-gray-500 text-sm focus:outline-none ${
                      errors.code && touched.code
                        ? "focus:border-red-300 focus:bg-white "
                        : "focus:border-gray-200 focus:bg-white "
                    }`}
                    value={values.code}
                    onChange={handleChange}
                    id="code"
                    type="code"
                    placeholder="Enter Verification code"
                    onBlur={handleBlur}
                  />
                  {errors.code && touched.code && (
                    <p className="error text-xs text-red-300">{errors.code}</p>
                  )}
                </div>

                <div className="mt-6">
                  <button className=" px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#0E927A]  rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Verify Me
                  </button>
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

export default Verifycode;
