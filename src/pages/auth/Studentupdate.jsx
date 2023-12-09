import React, { useState } from "react";
import { useFormik } from "formik";
import { signinSchema } from "../../schemas";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGIN, SET_ADMIN } from "../../redux/Slices/authSlice";
import auth from "../../images/auth.png";
import auth1 from "../../images/auth1.png";
import logo from "../../images/Logo.png";
import Load from "../../images/load.gif";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../../services/authService";
import toast, { Toaster } from "react-hot-toast";
import { updateUser } from "../../services/authService";

const initialState = {
  semester: "",
  department: "",
  dob: "",
};

const Studentupdate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postImage, setPostImage] = useState("");
  const [formData, setformData] = useState(initialState);

  const { semester, department, dob } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    // setIsDescEmpty(value.trim() === "");
  };

  const handleImageChange = (e) => {
    setPostImage(e.target.files[0]);
  };

  const newpost = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append("semester", semester);
    postData.append("department", department);
    postData.append("dob", dob);
    postData.append("photo", postImage);

    console.log(...postData);
    console.log("clicked");

    console.log(postData);

    try {
      setIsLoading(true);
      const data = await updateUser(postData);

      if (data) {
        console.log(data);

        navigate("/dashboard/home");
        setIsLoading(false);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              <form onSubmit={newpost}>
                <div className="">
                  <p className="mt-3 text-xs text-left text-gray-600 dark:text-gray-200">
                    Welcome to Ofspace Academy
                  </p>
                  <p className="font-bold text-2xl text-gray-800">
                    {" "}
                    Finishing Up
                  </p>
                </div>
                <div className="mt-5">
                  <div className="form">
                    <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                      <div className="mb-3 space-y-2 w-full text-xs">
                        <label className="font-semibold text-gray-600 py-2">
                          Semester
                        </label>
                        <input
                          placeholder="5th year - 2nd semester"
                          value={semester}
                          onChange={handleInputChange}
                          type="text"
                          id="semester"
                          name="semester"
                          className={`w-full px-8 py-4 rounded-lg mb-2 font-medium  border-2 placeholder-gray-500
                       text-sm focus:border-green-500 border-gray-200 focus:bg-white `}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Department
                      </label>
                      <input
                        placeholder="Department"
                        value={department}
                        onChange={handleInputChange}
                        type="text"
                        id="department"
                        name="department"
                        className={`w-full px-8 py-4 rounded-lg mb-2 font-medium  border-2 placeholder-gray-500
                       text-sm focus:border-green-500 border-gray-200 focus:bg-white `}
                        required
                      />
                    </div>

                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Date Of Birth
                      </label>
                      <input
                        placeholder="Date Of Birth"
                        value={dob}
                        onChange={handleInputChange}
                        type="date"
                        id="dob"
                        name="dob"
                        className={`w-full px-8 py-4 rounded-lg mb-2 font-medium  border-2 placeholder-gray-500
                       text-sm focus:border-green-500 border-gray-200 focus:bg-white `}
                        required
                      />
                    </div>

                    <div className="flex-auto w-full mb-1 text-xs space-y-2">
                      <label className="font-semibold text-gray-600 py-2">
                        Select a Profile Picture
                      </label>
                      <input
                        name="photo"
                        type="file"
                        id="photo"
                        onChange={handleImageChange}
                        className="w-full text-grey-500 text-sm
                file:mr-5 file:rounded-full file:border-0
                file:bg-green-50 file:py-2
                file:px-6 file:text-sm
                file:font-medium file:text-green-700
                hover:file:cursor-pointer hover:file:bg-amber-50
                hover:file:text-amber-400"
                        required
                      />
                    </div>

                    <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                      {/* SUBMIT BUTTON */}
                      {isLoading ? (
                        <button
                          disabled
                          className="mt-5 tracking-wide font-semibold bg-gray-500 text-gray-100 w-full py-4 rounded-lg duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        >
                          <svg
                            className="w-6 h-6 -ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            id="loading"
                          >
                            <path d="M6.804 15a1 1 0 0 0-1.366-.366l-1.732 1a1 1 0 0 0 1 1.732l1.732-1A1 1 0 0 0 6.804 15ZM3.706 8.366l1.732 1a1 1 0 1 0 1-1.732l-1.732-1a1 1 0 0 0-1 1.732ZM6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm11.196-3a1 1 0 0 0 1.366.366l1.732-1a1 1 0 1 0-1-1.732l-1.732 1A1 1 0 0 0 17.196 9ZM15 6.804a1 1 0 0 0 1.366-.366l1-1.732a1 1 0 1 0-1.732-1l-1 1.732A1 1 0 0 0 15 6.804Zm5.294 8.83-1.732-1a1 1 0 1 0-1 1.732l1.732 1a1 1 0 0 0 1-1.732Zm-3.928 1.928a1 1 0 1 0-1.732 1l1 1.732a1 1 0 1 0 1.732-1ZM21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm-9 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm-3-.804a1 1 0 0 0-1.366.366l-1 1.732a1 1 0 0 0 1.732 1l1-1.732A1 1 0 0 0 9 17.196ZM12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"></path>
                          </svg>
                          <span className="ml-3">Updating </span>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="mt-5 tracking-wide font-semibold bg-green-600 text-gray-100 w-full py-4 rounded-lg hover:bg-green-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        >
                          <span className="ml-3">
                            Proceed to Update details
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
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

export default Studentupdate;
