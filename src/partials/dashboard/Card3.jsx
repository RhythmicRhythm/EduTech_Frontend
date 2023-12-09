import React from "react";

const Card3 = () => {
  return (
    <div className="p-4 dark:bg-slate-800 col-span-8 lg:col-span-4  rounded-lg border">
      <div className="cursor-pointer rounded-lg bg-white p-2 shadow duration-150 5 hover:shadow-md">
        <img
          className="w-full rounded-lg object-cover object-center"
          src="https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="product"
        />
        <div>
          <div className="my-6 flex items-center justify-between px-4">
            <p className="font-bold text-gray-500">Product Name</p>
            <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
              $120
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">First option</p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              23
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">Second option</p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              7
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">Third option</p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              1
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">Fourth option</p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              23
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
