import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { ImSpinner10 } from "react-icons/im";
import axios from "axios";
import { BACKEND_URL } from "../services/authService";

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

    setIsLoading(true);
    axios
      .post(`${BACKEND_URL}/course/uploadcoursematerial/${postId}`, postData)
      .then(({ data }) => {
        console.log(data);
        toast.success("File Uploaded Sucessfully");
        navigate(`/courses/${postId}`);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        toast.error(response.data.message);
        console.log(response.data.message);
        setIsLoading(false);
      });
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
                <div className="px-[10px] sm:px-[100px] col-span-full xl:col-span-8  dark:bg-slate-800 rounded-lg  dark:border-slate-700">
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
                                <span>Upload File</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <div className="">Pending Section ??</div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Uploadfile;
