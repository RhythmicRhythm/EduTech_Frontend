import React from "react";

const DashboardCourseList = () => {
  return (
    <div>
      <div className="flex  animate-pulse items-center border rounded-lg p-3">
        <div className="flex-shrink-0">
          <span className="flex justify-center items-center bg-gray-300 rounded-lg w-16 h-16" />
        </div>
        <div className="ml-4 mt-2 w-full">
          <h3 className="h-4 bg-gray-300 rounded-lg  w-32 mb-4" />
          <p className="h-2 bg-gray-300 rounded-sm w-full" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCourseList;
