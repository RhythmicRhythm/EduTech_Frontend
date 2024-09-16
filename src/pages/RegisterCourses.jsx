import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../services/authService";
import empty from "../images/emptyimg.png";
import toast from "react-hot-toast";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { ImSpinner10 } from "react-icons/im";
import DashboardCourseList from "../components/common/skeletons/DashboardCourseList";

const RegisterCourses = () => {
  const [user, setUser] = useState([]);
  const [courses, setCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLecturer, setSelectedLecturer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [myLoading, setMyLoading] = useState(false);

  const getUser = () => {
    axios
      .get(`${BACKEND_URL}/users/getuser`)
      .then(({ data }) => {
        setUser(data);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
      });
  };
  const getAllCourses = () => {
    axios
      .get(`${BACKEND_URL}/course/allcourses`)
      .then(({ data }) => {
        setCourses(data);
        console.log(data);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
      });
  };
  const getMyCourses = () => {
    setMyLoading(true);
    axios
      .get(`${BACKEND_URL}/course/studentcourses`)
      .then(({ data }) => {
        setMyCourses(data);
        console.log(data);
        setMyLoading(false);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        console.log(response);
        setMyLoading(false);
      });
  };

  useEffect(() => {
    getUser();
    getAllCourses();
    getMyCourses();
  }, []);

  // Handle the course selection
  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  // Handle the lecturer selection (multiple)
  const handleLecturerChange = (e) => {
    setSelectedLecturer(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log();

    console.log(selectedCourse);
    console.log(selectedLecturer);

    setIsLoading(true);
    axios
      .post(`${BACKEND_URL}/course/registercourse/${selectedCourse}`)
      .then(({ data }) => {
        console.log(data);
        toast.success(data.message);
        getMyCourses();
        setIsLoading(false);
      })
      .catch(({ response }) => {
        toast.error(response.data.message);
        console.log(response.data.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className="grid grid-cols-12 gap-2">
          <div className="px-[10px] sm:px-[100px] col-span-full xl:col-span-8  dark:bg-slate-800 rounded-lg  dark:border-slate-700">
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <div className="form">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Course Title
                    </label>
                    <select
                      placeholder="Course Title"
                      id="course"
                      value={selectedCourse}
                      onChange={handleCourseChange}
                      type="text"
                      name="course_code"
                      className={`w-full px-8 py-4 rounded-lg mb-2 font-medium bg-gray-100 border-2 placeholder-gray-500
                           text-sm focus:border-green-500 border-gray-200  focus:bg-white `}
                      required
                    >
                      <option value="">-- Select a Course --</option>
                      {courses.map((course) => (
                        <option key={course._id} value={course._id}>
                          {course.course_title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    {/* SUBMIT BUTTON */}
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="cursor-pointer flex gap-1 items-center justify-center
                      px-8 py-4 bg-green-300 text-green-700 border-2 hover:border-green-500 
                       rounded-lg hover:bg-opacity-70 transition font-semibold shadow-md text-sm sm:text-lg"
                    >
                      {isLoading ? (
                        <>
                          {" "}
                          <ImSpinner10 className="animate-spin" />
                          <span>loading...</span>
                        </>
                      ) : (
                        <>
                          <BsFileEarmarkPlusFill />
                          <span>Register Course</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="mt-10">
              <div className="mb-4">
                <h1 className="text-2xl text-gray-700 font-bold">
                  Registered Course
                </h1>
              </div>
              {myLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <DashboardCourseList /> <DashboardCourseList />{" "}
                  <DashboardCourseList /> <DashboardCourseList />
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {myCourses &&
                    myCourses.map((item) => (
                      <div
                        key={item._id}
                        className="mb-2 flex justify-between items-center bg-white shadow-xl border-2 border-gray-400 
                        p-2 rounded-lg w-full"
                      >
                        <div className="flex gap-3 items-center">
                          <div className="">
                            <img
                              src={item.image}
                              className="w-16 h-16 rounded-lg"
                              alt=""
                            />
                          </div>
                          <div className="mt-2">
                            <h1 className="text-xs sm:text-sm font-semibold text-gray-700">
                              {item.course_code}
                            </h1>
                            <p className="text-xs sm:text-sm">
                              {item.course_title}
                            </p>
                          </div>
                        </div>{" "}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCourses;
