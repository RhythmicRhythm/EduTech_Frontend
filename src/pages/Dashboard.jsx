import React, { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import Info from "../partials/dashboard/Info";
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser";

function Dashboard() {
  useRedirectLoggedOutUser("/signin");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-2 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Cards */}
            <div className="">
              {/* Table (Top Channels) */}
              <Info />
              <div className="grid grid-cols-12 gap-10">
                <DashboardCard07 />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
