import React from "react";

const DashboardNameInfo = () => {
  return (
    <div className="px-6">
      <div className="flex max-w-sm animate-pulse items-center">
        <div className="flex-shrink-0">
          <span className="flex justify-center items-center bg-gray-300 rounded-lg w-16 h-16" />
        </div>
        <div className="ml-4 mt-2 w-full">
          <h3 className="h-5 bg-gray-300 rounded-lg  w-48 mb-4" />
          <p className="h-2 bg-gray-300 rounded-sm w-full" />
        </div>
      </div>
      <div className="mt-10 animate-pulse">
        <div className="mt-2 w-full">
          <h3 className="h-5 bg-gray-300 rounded-lg  w-48 mb-4" />
          <p className="h-2 bg-gray-300 rounded-sm w-[320px] mb-4" />
          <p className="h-2 bg-gray-300 rounded-sm w-[320px]" />
        </div>
      </div>
    </div>
  );
};

export default DashboardNameInfo;
