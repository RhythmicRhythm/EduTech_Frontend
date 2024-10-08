import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";
import DashboardCourseList from "../../components/common/skeletons/DashboardCourseList";

function DashboardCard07() {
  const [user, setUser] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCourse = () => {
    setIsLoading(true);
    axios
      .get(`${BACKEND_URL}/course/allcourses`)
      .then(({ data }) => {
        setCourses(data);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <div className="p-4 col-span-full xl:col-span-8  dark:bg-slate-800 rounded-lg dark:border-slate-700">
      <div className="mt-12">
        <div className="mb-10">
          <h1 className="text-2xl text-gray-700 font-bold">All Courses</h1>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <DashboardCourseList /> <DashboardCourseList />{" "}
            <DashboardCourseList /> <DashboardCourseList />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {courses &&
              courses.map((item) => (
                <Link
                  key={item._id}
                  to={`/courses/${item._id}`}
                  className="flex justify-between items-center bg-white shadow-xl border-2 p-2 rounded-lg w-full sm:w-full"
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
                      <p className="text-xs sm:text-sm">{item.course_title}</p>
                    </div>
                  </div>{" "}
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardCard07;
