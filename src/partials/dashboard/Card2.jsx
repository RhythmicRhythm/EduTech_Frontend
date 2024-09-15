import React, { useEffect, useState } from "react";
import { getUser } from "../../services/authService";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";
import empty from "../../images/emptyimg.png";
import CourseListSkeleton from "../../components/common/skeletons/CourseListSkeleton";

const Card2 = () => {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const isAdminh = useSelector(isAdmin);
  // console.log(isAdminh);

  const getUser = () => {
    setIsLoading(true);
    axios
      .get(`${BACKEND_URL}/users/getuser`)
      .then(({ data }) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        setIsLoading(false);
      });
  };
  const getStudentCourses = () => {
    setIsLoading(true);
    axios
      .get(`${BACKEND_URL}/course/studentcourses`)
      .then(({ data }) => {
        setCourses(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        setIsLoading(false);
      });
  };
  const getLecturersCourses = () => {
    setIsLoading(true);
    axios
      .get(`${BACKEND_URL}/course/lecturerscourses`)
      .then(({ data }) => {
        setCourses(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    if (user) {
      if (user.role === "student") {
        getStudentCourses();
      } else if (user.role === "lecturer") {
        getLecturersCourses();
      }
    }
  }, [user]);

    // Early return if loading
    if (isLoading) {
      return <>
      <div className="flex flex-wrap justify-center gap-2">
        <CourseListSkeleton />
        <CourseListSkeleton />
        <CourseListSkeleton />
      </div>
      </>;
    }

      // Early return if no courses and not loading
  if (courses.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <div>
          <img src={empty} alt="" className="w-[500px]" />
          {user.role === "student" && (
            <p className="text-center">
              You have not registered for any courses. Please register for your courses.
            </p>
          )}
          {user.role === "lecturer" && (
            <p className="text-center">
              You have not been assigned any courses. A course will be assigned to you soon.
            </p>
          )}
        </div>
      </div>
    );
  }

  // Default return when courses are available
  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <p className="font-bold text-xs sm:text-lg">All Courses</p>
        {user.role === "student" && (
          <Link
            to="/registercourses"
            className="bg-[#0E927A] text-xs sm:text-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Course Registration
          </Link>
        )}
      </div>

      <div className="flex flex-wrap">
        {courses.map((item) => (
          <Link
            key={item._id}
            to={`/courses/${item._id}`}
            className="group overflow-hidden w-full md:w-1/2 lg:w-1/3 p-4"
          >
            <img
              className="h-[300px] w-full rounded-lg group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={item.image}
              alt=""
            />
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
