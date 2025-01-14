// src/components/Login.tsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin, logout } from "../redux/actions/authActions";
import { RootState } from "../redux/store";
import googleIamge from "../assets/google.png";
import rightImage from "../assets/rightImage.png";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    dispatch(googleLogin()).then(()=>{
      if (authState.user) {
        navigate("/dashboard", { state: { user: authState.user } });      }
    });
  };

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen" style={{ backgroundColor: "#FFF9F9" }}>
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-sans text-gray-800 mb-4">TaskBuddy</h1>
        <p className="text-gray-600 text-center max-w-md mb-8">
          Streamline your workflow and track progress effortlessly with our all-in-one task management app.
        </p>
        {authState.loading ? (
          <p>Loading...</p>
        ) : (
          <button onClick={handleGoogleSignIn} className="px-6 py-2 text-white bg-black rounded-xl hover:bg-gray-600 flex items-center space-x-2">
            <img src={googleIamge} alt="Google Logo" className="w-6 h-6 object-contain" />
            <span>Continue with Google</span>
          </button>
        )}
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center justify-center">
        <img src={rightImage} alt="Task Manager Illustration" className="max-w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default Login;