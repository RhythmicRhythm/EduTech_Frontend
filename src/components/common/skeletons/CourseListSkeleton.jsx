import React from "react";
import { BsImage } from "react-icons/bs";

const CourseListSkeleton = () => {
  return (
    <div className="w-full border rounded-lg p-4">
      <div
        className="animate-pulse w-full bg-gray-300 h-48 
        rounded-lg mb-5 flex justify-center items-center"
      >
        <BsImage className="text-xl text-gray-400" />
      </div>
      <div className=" w-full flex justify-between items-start animate-pulse">
        <div className="block">
          <h3 className="h-3 bg-gray-300 rounded-full  w-48 mb-4" />
          <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
        </div>
      
      </div>
    </div>
  );
};

export default CourseListSkeleton;
