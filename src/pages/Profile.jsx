import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import art from "../images/Artwork.png";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Card2 from "../partials/dashboard/Card2";
import { Link } from "react-router-dom";
import { getPostById, getUser } from "../services/authService";

const Profile = () => {
  const params = useParams();
  const postId = params.id;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [post, setPost] = useState(null);
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getPostData() {
      const data = await getPostById(postId);

      setPost(data);
      console.log(data);
    }
    getPostData();
  }, [postId]);

  useEffect(() => {
    async function getUserData() {
      const userdata = await getUser();

      setUser(userdata);
      console.log(userdata);
    }
    getUserData();
  }, []);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <div className="grid grid-cols-12 gap-2">
                <div className="p-4 col-span-full xl:col-span-8  dark:bg-slate-800 rounded-lg  dark:border-slate-700">
                  <div className="">
                    <div className="group overflow-hidden">
                      <img
                        className="h-[500px] w-full rounded-lg group-hover:scale-105 transition-transform duration-200 ease-in-out"
                        src={post?.image}
                        alt=""
                      />
                      <div className="mt-10 flex justify-between">
                        <h1 className="text-xl text-gray-700 font-bold uppercase">
                          {post?.course_code} - {post?.course_title}{" "}
                        </h1>
                        <div className="flex gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 text-green-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                            />
                          </svg>
                          <p>Share</p>
                        </div>
                      </div>
                    </div>

                    <section className="flex flex-row flex-wrap">
                      <input
                        id="tab-one"
                        type="radio"
                        name="tabs"
                        className="peer/tab-one opacity-0 absolute"
                        defaultChecked
                      />
                      <label
                        htmlFor="tab-one"
                        className="hover:border-yellow-100 border-b-2 peer-checked/tab-one:border-green-600
                         cursor-default p-4 
                        rounded-t-lg block"
                      >
                        Overview
                      </label>

                      <input
                        id="tab-two"
                        type="radio"
                        name="tabs"
                        className="peer/tab-two opacity-0 absolute"
                      />
                      <label
                        htmlFor="tab-two"
                        className="hover:border-yellow-100 border-b-2 peer-checked/tab-two:border-green-600
                        cursor-default p-4 
                       rounded-t-lg block"
                      >
                        Course material
                      </label>

                      <div className="basis-full h-0 mt-6" />
                      <div className="hidden peer-checked/tab-one:block p-4 w-full">
                        <div className="">
                          <p className="text-sm">{post?.course_description}</p>
                        </div>
                      
                      </div>
                      <div className="hidden peer-checked/tab-two:block p-4 w-full">
                        <div className="p-6">
                          {user.isAdmin && (
                            <a
                              href={`/uploadfile/${post?._id}`}
                              className="bg-[#0E927A] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Upload Course Material
                            </a>
                          )}
                        </div>
                        <div className="">
                          {post?.course_files.map((file, index) => (
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
                                    {file.name}
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
                      </div>
                    </section>
                  </div>
                </div>
                <div className="">fgfgfgf</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Profile;
