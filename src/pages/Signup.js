import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = ({
  setUsername,
  setEmail,
  setPassword,
  username,
  email,
  password,
}) => {
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
      },
      { withCredentials: true }
    );
    if (res.status === 200) {
      navigate("/login");
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 ">
      <div className="grid grid-cols-1  bg-white gap-4 rounded-lg lg:grid-cols-2">
        <div className="w-full p-8 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="text-4xl font-bold text-center ">Sign Up</div>
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
            <div className="flex items-center gap-4 my-4">
              <input type="radio" className="peer" />
              <label htmlFor="">
                I agree <span>terms and conditions</span> & privacy policy
              </label>
            </div>
            <button
              onClick={signUp}
              className="px-4 w-32 py-2 rounded-lg outline-none bg-black text-white"
            >
              Sign up
            </button>
          </form>

          <div className="text-sm">
            already signup ?{" "}
            <a href="/login" className="no-underline">
              login{" "}
            </a>
            to your account
          </div>

          <div className="text-sm">Login with social media</div>
          <div className="flex items-center gap-2">
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
    </div>
  );
};

export default Signup;
