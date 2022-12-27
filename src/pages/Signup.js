import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Divider } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

const Signup = ({
  setUsername,
  setEmail,
  setPassword,
  username,
  email,
  password,
  file,
  setFile,
}) => {
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const signUp = async () => {
    const res = await axios.post(
      "https://chatwebserver.vercel.app/users/create",
      {
        username,
        email,
        password,
        avatar,
      },
      { withCredentials: true }
    );
    if (res.status === 200) {
      navigate("/login");
      console.log(res);
    }
  };

  const handleUpload = async () => {
    if (file !== "") {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "dq3qp23d");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/deszjgxlm/image/upload",
        formData,
        { withCredentials: true }
      );
      if (res.status === 200) {
        setAvatar(res.data.public_id);
        return toast("Upload file success");
      }
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  console.log(file);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 ">
      <div className="grid grid-cols-1  bg-white gap-4 rounded-lg lg:grid-cols-2">
        <div className="w-full p-8 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-bold text-center  md:text-2xl lg:text-4xl">
              Sign Up
            </div>
            <div className="text-sm text-center ">
              Please fill your information below
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
            <div className="flex items-center gap-4 border-b border-gray-500 py-4 justify-between ">
              <label htmlFor="username" className="w-24">
                Username
              </label>
              <div className="w-full">
                <input
                  minLength={2}
                  maxLength={12}
                  id="username"
                  name="username"
                  type="text"
                  pattern="^[A-Za-z0-9]{3,16}$"
                  className="outline-none border-2 px-4 rounded-lg py-2 w-full peer required:border-red-500 valid:border-green-500"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <div className="text-red-500 hidden peer-invalid:block">
                  Username must be at 3 - 16 character and not contain a special
                  character
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-gray-500 py-4 justify-between">
              <label htmlFor="email" className="w-24">
                Email
              </label>
              <div className="flex flex-col w-full">
                <input
                  id="email"
                  type="email"
                  required
                  className="outline-none w-full border-2 px-4 py-2 rounded-lg peer required:border-red-500 valid:border-green-500"
                  onChange={(e) => setEmail(e.target.value)}
                  pattern={
                    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
                  }
                />
                <div className="text-red-500 hidden peer-invalid:block">
                  type a valid email
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-gray-500 py-4 justify-between">
              <label htmlFor="password" className="w-24">
                Password
              </label>

              <div className="flex items-center w-full relative">
                <div className="w-full">
                  <input
                    minLength={8}
                    maxLength={20}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="outline-none w-full border-2 px-4 py-2 rounded-lg peer required:border-red-500 valid:border-green-500"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,20}$"
                  />{" "}
                  <div className="text-red-500 hidden peer-invalid:block">
                    Password must be atleast 8 - 20 character and contain one
                    number and one specials character
                  </div>
                </div>
                {showPassword ? (
                  <VisibilityIcon
                    className="absolute right-2 top-3"
                    onClick={handleShowPassword}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="absolute right-2 top-3"
                    onClick={handleShowPassword}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col  gap-4 border-b border-gray-500 py-4 justify-between">
              <label htmlFor="password" className="w-24">
                Photo
              </label>

              <div className="flex items-center w-full relative">
                <div className="w-full flex items-center flex-col gap-4">
                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 "
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          class="w-10 h-10 mb-3 text-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p class="mb-2 text-sm text-black dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-black dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                        {file ? <div>File : {file?.name}</div> : null}
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                      />
                    </label>
                  </div>
                  <button onClick={handleUpload}>
                    <div class="relative  items-center justify-center inline-block p-4 px-4 py-2 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                      <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                      <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                      </span>
                      <span class="relative text-white">Upload</span>
                    </div>
                  </button>
                  <div className="text-red-500 hidden peer-invalid:block">
                    Choose a photo profile
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 my-4">
              <input type="radio" className="peer" />
              <label htmlFor="">
                I agree <span>terms and conditions</span> & privacy policy
              </label>
            </div>
            <button
              onClick={signUp}
              className="px-4 w-full py-2 rounded-lg outline-none bg-black text-white"
            >
              Sign up
            </button>
          </form>

          <div className="text-sm text-center">
            Already a user ?{" "}
            <a href="/login" className="no-underline">
              LOGIN{" "}
            </a>
          </div>

          <Divider>OR</Divider>

          <div className="text-sm text-center">Sign with social media</div>
          <div className="flex items-center gap-2 justify-center">
            <i className="fab fa-facebook text-xl text-blue-500"></i>
            <i className="fab fa-google text-xl text-red-500"></i>
            <i className="fab fa-github text-xl"></i>
          </div>
        </div>
        <div className="w-full hidden lg:block">
          <div
            className="w-full bg-cover bg-no-repeat  h-full bg-black bg-opacity-50 text-white"
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1488998287214-1e668a8e0dc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"})`,
            }}
          >
            <div className=" bg-black bg-opacity-50 h-full flex flex-col justify-around items-center ">
              <div></div>
              <div className="flex items-center justify-center text-7xl font-bold">
                AAFSIN
              </div>
              <div className="text-center">
                <div>get started absolutely free</div>
                <div>free forever . No credit card needed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Signup;
