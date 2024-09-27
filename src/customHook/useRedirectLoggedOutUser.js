import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

const useRedirectLoggedOutUser = (path) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Assuming you have a redux state that stores login status
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    // Check the value of isLoggedIn directly
    if (!isLoggedIn) {
      console.log("Session expired, please login to continue.");
      navigate(path);
    }
  }, [navigate, path, isLoggedIn]);

  return { isLoggedIn };
};

export default useRedirectLoggedOutUser;
