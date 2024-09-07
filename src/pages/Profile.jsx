import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import art from "../images/Artwork.png";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Card2 from "../partials/dashboard/Card2";
import { Link } from "react-router-dom";
import { deletePost } from "../services/authService";
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BACKEND_URL } from "../services/authService";
import { MdDelete } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";
import empty from "../images/emptyimg.png";

const Profile = () => {
  useRedirectLoggedOutUser("/signin");
  const params = useParams();
  const courseId = params.id;
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const [showModal, setShowModal] = useState(false);
  const [course, setCourse] = useState(null);
  const [user, setUser] = useState([]);

  const deleteBlogPost = () => {
    axios
      .delete(`${BACKEND_URL}/course/${courseId}`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(({ response }) => {
        toast.error(response.data.message);
        console.log(response.data.message);
      });
  };
  const getCourse = () => {
    axios
      .get(`${BACKEND_URL}/course/${courseId}`)
      .then(({ data }) => {
        console.log(data);
        setCourse(data);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
      });
  };

  const getUser = () => {
    axios
      .get(`${BACKEND_URL}/users/getuser`)
      .then(({ data }) => {
        console.log(data);
        setUser(data);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
      });
  };

  useEffect(() => {
    getCourse();
    getUser();
  }, []);

  return (
    <>
      {" "}
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold"></h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          Are you sure you want to delete this post?
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-emerald-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={deleteBlogPost}
                        >
                          Delete Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            <div className="px-2 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <div className="grid grid-cols-12 gap-2">
                <div className="p-4 col-span-full xl:col-span-8  dark:bg-slate-800 rounded-lg  dark:border-slate-700">
                  <div className="">
                    <div className="">
                      {user.isAdmin && (
                        <button
                          className="bg-red-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(true)}
                        >
                          <MdDelete />
                        </button>
                      )}
                    </div>
                    <div className="group overflow-hidden">
                      <img
                        className="h-[300px] sm:h[500px] w-full rounded-lg group-hover:scale-105 transition-transform duration-200 ease-in-out"
                        src={course?.image}
                        alt=""
                      />
                      <div className="mt-10 flex items-center justify-between gap-2">
                        <div className="">
                          <h1 className="text-[10px] sm:text-lg text-gray-700 font-bold uppercase">
                            {course?.course_code} - {course?.course_title}{" "}
                          </h1>
                          <div className="text-[10px] sm:text-sm text-gray-700 font-semibold flex">
                            <span className="mr-2"> Lecturer(s) - </span>  {}
                            <span className=""> </span>
                            {course.lecturers.map((lecturer) => (
                              <span key={lecturer._id} className="">
                                {" "}
                                <h4>{lecturer.fullname}</h4>
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 border items-center p-2 rounded-lg cursor-pointer border-green-200  hover:border-green-600">
                          <FaRegShareSquare className="text-xs"/>
                          <p className="font-semibold text-xs">Share</p>
                        </div>
                      </div>
                    </div>

                    <section className="mt-10 mb-4">
                      <div className="flex">
                        <buton
                          onClick={() => setActiveTab("overview")}
                          className={`hover:border-green-300 cursor-pointer border-b-4 
                             px-4 py-1  text-sm sm:text-lg ${
                               activeTab === "overview"
                                 ? "border-green-400"
                                 : ""
                             }`}
                        >
                          Overview
                        </buton>
                        <buton
                          onClick={() => setActiveTab("materials")}
                          className={` border-b-4 
                         cursor-pointer px-4 py-1  rounded-t-lg block text-sm sm:text-lg ${
                           activeTab === "materials" ? "border-green-400" : ""
                         }`}
                        >
                          Materials
                        </buton>
                        <buton
                          onClick={() => setActiveTab("assignment")}
                          className={`hover:border-green-300 cursor-pointer border-b-4 
                            px-4 py-1  text-sm sm:text-lg ${
                              activeTab === "assignment"
                                ? "border-green-400"
                                : ""
                            }`}
                        >
                          Assignments
                        </buton>
                      </div>
                      {activeTab == "overview" && (
                        <div className="">
                          <div className="p-4 w-full">
                            <div className="">
                              <p
                                className="text-xs sm:text-base"
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                {course?.course_description.replace(
                                  /<br\s*\/?>/gi,
                                  "\n"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab == "materials" && (
                        <div className="px-2 py-4 w-full">
                          <div className="flex justify-end">
                            {user.role == "student" && (
                              <a
                                href={`/uploadfile/${course?._id}`}
                                className="bg-[#0E927A] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs sm:text-sm"
                              >
                                Upload Material
                              </a>
                            )}
                          </div>
                          {course?.course_files.length == 0 ? (
                            <div className="flex items-center  justify-center">
                              <div className="">
                                <img src={empty} alt="" className="w-[500px]" />

                                {user.role == "student" && (
                                  <p className="text-center">
                                    No materials have been assigned yet
                                  </p>
                                )}
                                {user.role == "lecturer" && (
                                  <p className="text-center">
                                    You Have Not added any course materials,
                                    Proceed to add materials
                                  </p>
                                )}
                              </div>
                            </div>
                          ) : (
                            <div className="">
                              {course?.course_files.map((file, index) => (
                                <div
                                  key={index}
                                  className="flex justify-between bg-white p-2 rounded-lg mb-2"
                                >
                                  <div className="flex gap-3">
                                    <div className="">
                                      <img src={art} alt="" />
                                    </div>
                                    <div className="mt-4">
                                      <h1 className="text-sm font-semibold text-gray-600">
                                        {file.file_name}
                                      </h1>
                                    </div>
                                  </div>{" "}
                                  <div className="mt-4">
                                    <a
                                      href={file.file}
                                      class="bg-[#0E927A] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                      Download
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </section>
                  </div>
                </div>
                {/* <div className="">fgfgfgf</div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Profile;
