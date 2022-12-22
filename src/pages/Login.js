import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
      "http://localhost:5000/login",
      {
        username: loginUsername,
        password: loginPassword,
      },
      { withCredentials: true }
    );
    console.log(res.data.data);
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
            <div className="text-4xl font-bold">Login</div>
            <div className="text-sm">Please fill your information below</div>
          </div>
          <form action="" className="flex flex-col gap-4">
            <div className="flex items-center gap-4 border-b border-gray-500 py-4 justify-between">
              <label htmlFor="name" className="w-24">
                Username
              </label>
              <input
                minLength={2}
                maxLength={12}
                id="name"
                type="text"
                className="outline-none  w-full"
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4 border-b border-gray-500 py-4 justify-between">
              <label htmlFor="password" className="w-24">
                Password
              </label>
              <div className="flex items-center w-full">
                <input
                  minLength={8}
                  maxLength={20}
                  required
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="outline-none w-full valid:border-red-500"
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                {showPassword ? (
                  <VisibilityIcon onClick={handleShowPassword} />
                ) : (
                  <VisibilityOffIcon onClick={handleShowPassword} />
                )}
              </div>
            </div>
          </form>
          {error ? <div>wrong username and password combination</div> : null}
          <div className="flex items-center gap-4 my-4">
            <input type="radio" />
            <label htmlFor="">
              I agree <span>terms and conditions</span> & privacy policy
            </label>
          </div>
          <button
            onClick={login}
            className="px-4 w-32 py-2 rounded-lg outline-none bg-black text-white"
          >
            Login
          </button>

          <div className="text-sm">
            Login with social media ,{" "}
            <a href="/" className="no-underline text-blue-500">
              go back to home
            </a>
          </div>
          <div className="flex items-center gap-2">
            <i className="fab fa-facebook text-xl text-blue-500"></i>
            <i className="fab fa-google text-xl text-red-500"></i>
            <i className="fab fa-github text-xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
