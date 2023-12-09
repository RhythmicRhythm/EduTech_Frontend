import React, { useEffect, useState } from "react";
import art from "../../images/Artwork.png";
import { getCourses, getUser } from "../../services/authService";
import { Link } from "react-router-dom";
import axios from "axios";

function DashboardCard07() {
  const [user, setUser] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getUserData() {
      const data = await getUser();

      setUser(data);
      console.log(data);
    }
    getUserData();
  }, []);

  useEffect(() => {
    async function getCoursesData() {
      const coursedata = await getCourses();

      setCourses(coursedata);
      console.log(coursedata);
    }
    getCoursesData();
  }, []);

  return (
    <div className="p-4 col-span-full xl:col-span-8  dark:bg-slate-800 rounded-lg dark:border-slate-700">
      <div className="mb-8">
        <h1 className="text-2xl text-gray-700 font-bold">Welcome Back</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="">
            <img src={user?.photo} className="w-14 h-14 rounded-lg" alt="" />
          </div>
          <div className="">
            {user?.isAdmin ? (
              // Render content for staff account
              <h1 className="text-xl text-gray-700 font-bold mb-2">
                {user?.fullname}
              </h1>
            ) : (
              // Render content for student account
              <h1 className="text-xl text-gray-700 font-bold mb-2">
                {user?.fullname} {user?.fullname}
              </h1>
            )}

            {user?.isAdmin ? (
              // Render content for staff account
              <p className="text-xs text-gray-500">STAFF ACCOUNT</p>
            ) : (
              // Render content for student account
              <p className="text-xs text-gray-500">STUDENT ACCOUNT</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-lg text-gray-600 font-bold">
          Accademic Information
        </h1>
        <div className="flex items-center pt-8 ">
          <div className=" text-gray-500 border-r border-gray-400">
            <p className="text-xs ">semester</p>
            <h2 className="text-xs font-bold text-gray-800 mr-4">
              5th Year - 2nd Semester
            </h2>
          </div>
          <div className="px-4 text-gray-500 border-r border-gray-400">
            <p className="text-xs ">Batch/Department</p>
            <h2 className="text-xs font-bold text-gray-600 mr-4">
              2010-2011: Computer Engineering
            </h2>
          </div>
          <div className="px-4 text-gray-500 border-r">
            <p className="text-xs ">Batch/Department</p>
            <h2 className="text-xs font-bold text-gray-600 mr-4">
              2010-2011: Computer Engineering
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-10">
          <h1 className="text-2xl text-gray-700 font-bold">Semester Course</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {courses &&
            courses.map((item) => (
              <Link
                key={item._id}
                to={`/courses/${item._id}`}
                className="flex justify-between bg-white shadow p-6 rounded-lg"
              >
                <div className="flex gap-3">
                  <div className="">
                    <img
                      src={item.image}
                      className="w-12 h-12 rounded-lg"
                      alt=""
                    />
                  </div>
                  <div className="mt-2">
                    <h1 className="text-sm font-semibold text-gray-700">
                      {item.course_code}
                    </h1>
                    <p className="text-sm">{item.course_title}</p>
                  </div>
                </div>{" "}
                <div className="mt-4">
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
