import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Card2 from "../partials/dashboard/Card2";
import Card3 from "../partials/dashboard/Card3";
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser";

const History = () => {
  useRedirectLoggedOutUser("/signin");
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
          <Card2 />
          </main>
        </div>
      </div>
    </>
  );
};

export default History;
