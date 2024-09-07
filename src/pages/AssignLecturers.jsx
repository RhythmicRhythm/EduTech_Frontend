import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../services/authService";
import empty from "../images/emptyimg.png";

const AssignLecturers = () => {
  const [user, setUser] = useState([]);
  const [courses, setCourses] = useState([]);
  const [lecturers, setLecturers] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLecturer, setSelectedLecturer] = useState([]);

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
  const getLecturers = () => {
    axios
      .get(`${BACKEND_URL}/users/getlecturer`)
      .then(({ data }) => {
        setLecturers(data);
        console.log(data);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        console.log(response);
      });
  };

  useEffect(() => {
    getUser();
    getAllCourses();
    getLecturers();
  }, []);

  // Handle the course selection
  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  // Handle the lecturer selection (multiple)
  const handleLecturerChange = (e) => {
    setSelectedLecturer(e.target.value);
  };
  const handleLecturerChangen = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedLecturers(selectedOptions);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log();
    
    console.log( selectedCourse);
    console.log( selectedLecturer);

    // if (!selectedCourse || selectedLecturers.length === 0) {
    //   alert("Please select a course and at least one lecturer.");
    //   return;
    // }

    // try {
    //   await axios.post("/api/assign-lecturers", {
    //     courseId: selectedCourse,
    //     lecturers: selectedLecturers,
    //   });

    //   alert("Lecturers assigned successfully");
    // } catch (error) {
    //   console.error("Error assigning lecturers:", error);
    // }
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
                      Course Code
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
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Course Code
                    </label>
                    <select
                      placeholder="Course Title"
                      id="lecturers"
                      value={selectedLecturer}
                      onChange={handleLecturerChange}
                      type="text"
                      name="course_code"
                      className={`w-full px-8 py-4 rounded-lg mb-2 font-medium bg-gray-100 border-2 placeholder-gray-500
                           text-sm focus:border-green-500 border-gray-200  focus:bg-white `}
                      required
                    >
                      <option value="">-- Select a Lecturer --</option>
                      {lecturers.map((lecturer) => (
                        <option key={lecturer._id} value={lecturer._id}>
                          {lecturer.fullname}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold bg-green-600 text-gray-100 w-full py-4 rounded-lg hover:bg-green-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <span className="ml-3">Add New Course</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignLecturers;
