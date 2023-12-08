import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {  uploadFile } from "../services/authService";

const initialState = {
  file_name: "",
};

const Uploadfile = () => {
  const params = useParams();
  const postId = params.id;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [postImage, setPostImage] = useState("");
  const [formData, setformData] = useState(initialState);

  const { file_name } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    
  };

  const handleImageChange = (e) => {
    setPostImage(e.target.files[0]);
  };

  const newpost = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append("file_name", file_name);
    postData.append("file", postImage);

    console.log(...postData);
    console.log("clicked");

    console.log(postData);

    try {
      setIsLoading(true);
      const data = await uploadFile(postData, postId);

      if (data) {
        console.log(data);
        toast.success("Post Added Sucessfully");
        navigate("/courses");
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
                <div className="px-[100px] col-span-full xl:col-span-8  dark:bg-slate-800 rounded-lg  dark:border-slate-700">
                  <form onSubmit={newpost}>
                    <div className="mt-5">
                      <div className="form">
                        <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                          <div className="mb-3 space-y-2 w-full text-xs">
                            <label className="font-semibold text-gray-600 py-2">
                              File Name
                            </label>
                            <input
                              placeholder="File Name"
                              value={file_name}
                              onChange={handleInputChange}
                              type="text"
                              id="file_name"
                              name="file_name"
                              className={`w-full px-8 py-4 rounded-lg mb-2 font-medium bg-gray-100 border-2 placeholder-gray-500
                           text-sm focus:outline-none border-gray-200 focus:border-gray-200 focus:bg-white `}
                              required
                            />
                          </div>
                        </div>

                        <div className="flex-auto w-full mb-1 text-xs space-y-2">
                          <label className="font-semibold text-gray-600 py-2">
                            Select file to Upload
                          </label>
                          <input
                            name="file"
                            type="file"
                            id="file"
                            onChange={handleImageChange}
                            className="w-full text-grey-500 text-sm
                    file:mr-5 file:rounded-full file:border-0
                    file:bg-blue-50 file:py-2
                    file:px-6 file:text-sm
                    file:font-medium file:text-blue-700
                    hover:file:cursor-pointer hover:file:bg-amber-50
                    hover:file:text-amber-700"
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
                              <span className="ml-3">Post is Submiting </span>
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                            >
                              <svg
                                className="w-6 h-6 -ml-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy={7} r={4} />
                                <path d="M20 8v6M23 11h-6" />
                              </svg>
                              <span className="ml-3">Upload File</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
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

export default Uploadfile;
