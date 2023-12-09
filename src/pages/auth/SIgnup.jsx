import React, { useState } from "react";
import { useFormik } from "formik";
import { signupSchema } from "../../schemas";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGIN } from "../../redux/Slices/authSlice";
import { Register } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../images/auth.png";
import auth1 from "../../images/auth1.png";
import logo from "../../images/Logo.png";
import Load from "../../images/load.gif";
import toast, { Toaster } from "react-hot-toast";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    const userData = {
      fullname: values.name,
      email: values.email,
      password: values.password,
      isAdmin: values.role,
    };

    console.log(userData);

    try {
      setIsLoading(true);
      const data = await Register(userData);
      console.log(data);
      // Assuming your Login function returns some data indicating success
      if (data) {
        if (data.isAdmin) {
          // Redirect to a specific page for admin
          navigate("/dashboard/admin");
        } else {
          // Redirect to a different page for non-admin users
          navigate("/dashboard/home");
        }
        navigate("/dashboard/home");
        dispatch(SET_LOGIN(true));
      } else {
        // Handle unsuccessful login, maybe show an error message
        console.log("Login failed");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
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
      name: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema: signupSchema,
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
              <form onSubmit={handleSubmit} className="w-[400px] mt-14">
                <div className="">
                  <p className="mt-3 text-xs text-left text-gray-600 dark:text-gray-200">
                    Welcome to Ofspace Academy
                  </p>
                  <p className="font-bold text-2xl text-gray-800">
                    {" "}
                    Sign Up With
                  </p>
                </div>

                <div className="mt-4">
                  <label className="text-xs text-gray-500 mb-2">
                    Full Name
                  </label>
                  <input
                    className={`w-full px-8 py-3 rounded-lg mb-2 font-medium bg-[#fff] border-2 ${
                      errors.name && touched.name
                        ? "border-red-300 "
                        : "border-gray-200 "
                    }placeholder-gray-500 text-sm focus:outline-none ${
                      errors.name && touched.name
                        ? "focus:border-red-300 focus:bg-white "
                        : "focus:border-gray-200 focus:bg-white "
                    }`}
                    value={values.name}
                    onChange={handleChange}
                    id="name"
                    type="name"
                    placeholder="Enter your fullname"
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <p className="error text-xs text-red-300">{errors.email}</p>
                  )}
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

                  {errors.password && touched.password && (
                    <p className="error text-xs text-red-300">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <label className="text-xs text-gray-500 mb-2">I Am</label>
                  <select
                    className={`w-full px-8 py-3 rounded-lg mb-2 font-medium bg-[#fff] border-2 ${
                      errors.role && touched.role
                        ? "border-red-300 "
                        : "border-gray-200 "
                    }placeholder-gray-500 text-sm focus:outline-none ${
                      errors.role && touched.role
                        ? "focus:border-red-300 focus:bg-white "
                        : "focus:border-gray-200 focus:bg-white "
                    }`}
                    name="role"
                    id="role"
                    onChange={handleChange}
                  >
                    <option value="">---select----</option>
                    <option value="false">Student</option>
                    <option value="true">Lecturer</option>
                  </select>

                  {errors.role && touched.role && (
                    <p className="error text-xs text-red-300">{errors.role}</p>
                  )}
                </div>

                <div className="mt-6">
                  <button className=" px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#0E927A] rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Continue
                  </button>
                </div>
                <div className="mt-12 flex gap-2">
                  <p className="text-xs">have an account?</p>
                  <a
                    href="/signin"
                    className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
                  >
                    Sign In
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

export default Signup;
