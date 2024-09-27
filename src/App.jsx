import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import "./css/style.css";

// Import pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Verifycode from "./pages/auth/VerifyCode";
import AssignLecturers from "./pages/AssignLecturers";
// import Paymentoptions from "./pages/Paymentoptions";
// import Contact from "./pages/Contact";
import Changepassword from "./pages/Changepassword";
import NewCourse from "./pages/NewCourse";
import Uploadfile from "./pages/Uploadfile";

import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/SIgnup";
import Forgotpassword from "./pages/auth/Forgotpassword";
import Resetpassword from "./pages/auth/Resetpassword";
// import Studentupdate from "./pages/auth/Studentupdate";
// import Staffupdate from "./pages/auth/StaffUpdate";

import { useDispatch, useSelector } from "react-redux";

import { getLoginStatus } from "./services/authService";
import RegisterCourses from "./pages/RegisterCourses";
import Homepage from "./pages/Homepage";

axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      
      console.log(status);
    }
    loginStatus();
  }, [dispatch]);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              borderRadius: "10px",
              background: "#145c87",
              color: "#fff",
            },
          },
          error: {
            style: {
              borderRadius: "10px",
              background: "#145c87",
              color: "#fff",
            },
          },
        }}
      />
      <Routes>
      <Route exact path="/" element={<Homepage />} />
        {/* AUTH ROUTES */}
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        {/* <Route exact path="/studentupdate" element={<Studentupdate />} />
        <Route exact path="/staffupdate" element={<Staffupdate />} /> */}
        <Route exact path="/forgotpassword" element={<Forgotpassword />} />
        <Route exact path="/resetpassword/:email" element={<Resetpassword />} />
        <Route exact path="/verifycode/:email" element={<Verifycode />} />

        {/* DASHBOARD ROUTES  */}
        <Route exact path="/dashboard/home" element={<Dashboard />} />
        <Route exact path="/courses" element={<History />} />
        <Route exact path="/courses/:id" element={<Profile />} />
        <Route exact path="/uploadfile/:id" element={<Uploadfile />} />
        <Route exact path="/newcourse" element={<NewCourse />} />
        <Route exact path="/assignlecturer" element={<AssignLecturers />} />
        <Route exact path="/registercourses" element={<RegisterCourses />} />

        <Route
          exact
          path="/settings/changepassword"
          element={<Changepassword />}
        />
      </Routes>
    </>
  );
}

export default App;
