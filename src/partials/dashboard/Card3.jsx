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
         <h1>pending section</h1>
        </div>
      </div>
    </div>
  );
};

export default Card3;
