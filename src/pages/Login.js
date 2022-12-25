import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
const Login = ({
  loginUsername,
  setLoginUsername,
  loginPassword,
  setLoginPassword,
  setUser,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [error, setError] = useState(false);

  const login = async () => {
    const res = await axios.post(
      "https://chatwebserver.vercel.app/login",
      {
        username: loginUsername?.toLowerCase(),
        password: loginPassword,
      },
      { withCredentials: true }
    );
    if (res.status === 200) {
      navigate("/");
      setUser(res.data.data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 ">
      <div className="grid grid-cols-1  bg-white gap-4 rounded-lg lg:grid-cols-2">
        <div className="w-full hidden lg:block">
          <div
            className=" bg-cover bg-no-repeat  h-full bg-black bg-opacity-50 text-white"
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1617118601652-3ec3aeaa0e36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGNoYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"})`,
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
        <div className="w-full p-8 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="text-center text-xl font-bold md:text-2xl lg:text-4xl">
              Login
            </div>
            <div className="text-center text-sm">
              Please fill your information below
            </div>
          </div>
          <form action="" className="flex flex-col gap-4 w-96">
            <div className="flex items-center gap-4 border-b border-gray-500 py-4 justify-between ">
              <label htmlFor="username" className="w-24 text-sm md:text-md ">
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
                  onChange={(e) => setLoginUsername(e.target.value)}
                  required
                />
                <div className="text-red-500 hidden text-sm md:text-md  peer-invalid:block ">
                  Username must be at 3 - 16 character and not contain a special
                  character
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-500 py-4 justify-between text-sm md:text-md ">
              <label htmlFor="password" className="w-24">
                Password
              </label>

              <div className="flex items-center relative w-96">
                <div className="w-full">
                  <input
                    minLength={8}
                    maxLength={20}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="outline-none w-full border-2 px-4 py-2 rounded-lg text-sm md:text-md peer required:border-red-500 valid:border-green-500"
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,20}$"
                  />{" "}
                  <div className="text-red-500 hidden text-sm md:text-md  peer-invalid:block">
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
          </form>
          <div className="text-black">{error}</div>

          <button
            onClick={login}
            className="px-4  w-full py-2 rounded-lg outline-none bg-black text-white"
          >
            Login
          </button>

          <Divider>OR</Divider>

          <div className="text-sm text-center">
            Login with social media ,
            <a href="/" className="no-underline text-blue-500">
              go back to home
            </a>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <i className="fab fa-facebook text-xl text-blue-500"></i>
            <i className="fab fa-google text-xl text-red-500"></i>
            <i className="fab fa-github text-xl"></i>
          </div>
          <div className="text-sm text-center">
            Need an account ?{" "}
            <span className="text-blue-500">
              <a href="/signup" className="no-underline">
                SIGN UP
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
