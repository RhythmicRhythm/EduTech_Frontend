import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

const Sellgiftcard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
              <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
                <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg">
                  <h1 className="text-2xl font-bold mb-8">Xxchange Giftcard</h1>
                  <form id="form" noValidate>
                    <div className="border p-4 rounded-lg ">
                      <div className="relative z-0 w-full mb-5">
                        <label className="">You'll Send</label>
                        <input
                          type="text"
                          name=""
                          placeholder=" "
                          className="pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 
                          appearance-none focus:outline-none focus:ring-0 focus:border-blue-800 border-gray-200"
                        />
                        <div className="absolute top-0 right-0 mt-8 mr-4 text-gray-400">
                          $
                        </div>

                        <span
                          className="text-sm text-red-600 hidden"
                          id="error"
                        >
                          Duration is required
                        </span>
                      </div>

                      <div className="relative z-0 w-full mb-5">
                        <label className="">You'll Recieve</label>
                        <input
                          type="text"
                          name=""
                          placeholder=""
                          className="pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 
                          appearance-none focus:outline-none focus:ring-0 focus:border-blue-800 border-gray-200"
                        />
                        <div className="absolute top-0 right-0 mt-8 mr-4 text-gray-400">
                          ₦
                        </div>

                        <span
                          className="text-sm text-red-600 hidden"
                          id="error"
                        >
                          Duration is required
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 px-1">
                      <p className="text-xs">Rate</p>
                      <p className="text-xs">1 USD = NGN 1100</p>
                    </div>
                    <div className="relative z-0 w-full mb-5">
                      <select
                        name="select"
                        value
                        onclick="this.setAttribute('value', this.value);"
                        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      >
                        <option value selected disabled hidden />
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                        <option value={3}>Option 3</option>
                        <option value={4}>Option 4</option>
                        <option value={5}>Option 5</option>
                      </select>
                      <label
                        htmlFor="select"
                        className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                      >
                        Select Coin
                      </label>
                      <span className="text-sm text-red-600 hidden" id="error">
                        Option has to be selected
                      </span>
                    </div>
                    <div className="relative z-0 w-full mb-5">
                      <select
                        name="select"
                        value
                        onclick="this.setAttribute('value', this.value);"
                        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      >
                        <option value selected disabled hidden />
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                        <option value={3}>Option 3</option>
                        <option value={4}>Option 4</option>
                        <option value={5}>Option 5</option>
                      </select>
                      <label
                        htmlFor="select"
                        className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                      >
                        Select Network
                      </label>
                      <span className="text-sm text-red-600 hidden" id="error">
                        Option has to be selected
                      </span>
                    </div>
                    <button
                      id="button"
                      type="button"
                      className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear
                       rounded-lg shadow outline-none bg-blue-600 hover:bg-blue-700 hover:shadow-lg focus:outline-none"
                    >
                      Continue
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Sellgiftcard;
