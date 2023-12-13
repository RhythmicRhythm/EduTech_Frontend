import React, { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser";
import Card3 from "../partials/dashboard/Card3";
import { getUser } from "../services/authService";

function Dashboard() {
  useRedirectLoggedOutUser("/signin");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getUserData() {
      const data = await getUser();

      setPosts(data);
      console.log(data);
    }
    getUserData();
  }, []);

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
            <div className="grid grid-cols-12 gap-10">
              {/* Table (Top Channels) */}
              <DashboardCard07 />
            
              {/* <DashboardCard06 /> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
