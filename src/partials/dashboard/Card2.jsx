import React, { useEffect, useState } from "react";
import { getUser } from "../../services/authService";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";
import empty from "../../images/emptyimg.png";

const Card2 = () => {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState([]);
  // const isAdminh = useSelector(isAdmin);
  // console.log(isAdminh);

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
  const getStudentCourses = () => {
    axios
      .get(`${BACKEND_URL}/course/studentcourses`)
      .then(({ data }) => {
        setCourses(data);
        console.log(data);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
      });
  };
  const getLecturersCourses = () => {
    axios
      .get(`${BACKEND_URL}/course/lecturerscourses`)
      .then(({ data }) => {
        setCourses(data);
        console.log(data);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
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

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center bg-red-200">
        <p className="font-bold text-xs sm:text-lg">All Courses</p>
        {user.role == "student" && (
          <Link
            to="/newcourse"
            className="bg-[#0E927A] text-xs sm:text-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
             Course Registration
          </Link>
        )}
      </div>
      {courses.length === 0 ? (
        <div className="flex items-center  justify-center">
          <div className="">
            <img src={empty} alt="" className="w-[500px]" />
            
            {user.role == 'student' && <p className="text-center">
              You Have Not Registered for any course, PLease Register for your
              courses
            </p>}
            {user.role == 'lecturer' && <p className="text-center">
              You Have Not been assigned any course, A course will be assigned to you sooon
            </p>}
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Card2;
