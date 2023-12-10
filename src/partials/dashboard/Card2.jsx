import React, { useEffect, useState } from "react";
import { getCourses, getUser } from "../../services/authService";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const Card2 = () => {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState([]);
  // const isAdminh = useSelector(isAdmin);
  // console.log(isAdminh);

  useEffect(() => {
    async function getCoursesData() {
      const data = await getCourses();

      setCourses(data);
      console.log(data);
    }
    getCoursesData();
  }, []);

  useEffect(() => {
    async function getUserData() {
      const userdata = await getUser();

      setUser(userdata);
      console.log(userdata);
    }
    getUserData();
  }, []);

  return (
    <div className="p-4 col-span-full xl:col-span-8 dark:bg-slate-800 rounded-lg border">
      <div className="mb-4 flex gap-6 sm:justify-between">
        <p className="font-bold text-xs sm:text-lg">All Courses</p>
        {user.isAdmin && (
          <a
            href="/newcourse"
            className="bg-[#0E927A] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add New Course
          </a>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {courses.map((item) => (
          <Link
            key={item._id}
            to={`/courses/${item._id}`}
            className="group overflow-hidden"
          >
            <picture>
              <img
                className="h-60 w-[270px] sm:w-full rounded-lg group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src={item.image}
                alt=""
              />
            </picture>
            <div className="mt-2">
              <h1 className="text-[10px] text-gray-700 font-bold">
                {item.course_code} - {item.course_title}
              </h1>
              <p className="text-xs font-normal">
                Lecturer -{" "}
                <span className="font-sm font-bold"> {item.name}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card2;
