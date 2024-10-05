import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

const useRedirectLoggedOutUser = (path) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Assuming you have a redux state that stores login status
  const {isAuthenticated} = useSelector((state) => state.auth);

  useEffect(() => {
    // Check the value of isLoggedIn directly
    if (!isAuthenticated) {
      console.log("Session expired, please login to continue.");
      navigate(path);
    }
  }, [navigate, path, isAuthenticated]);

  return { isAuthenticated };
};

export default useRedirectLoggedOutUser;
