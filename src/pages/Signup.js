import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
const Signup = ({
  setUsername,
  setEmail,
  setPassword,
  username,
  email,
  password,
}) => {
  const signUp = async () => {
    const navigate = useNavigate();
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
      <div className="grid grid-cols-2  bg-white gap-4 rounded-lg">
        <div className="w-full p-8 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="text-4xl font-bold">Sign Up</div>
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
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4 border-b border-gray-500 py-4 justify-between">
              <label htmlFor="email" className="w-24">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="outline-none w-full"
                onChange={(e) => setEmail(e.target.value)}
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
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="outline-none w-full"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <VisibilityIcon onClick={handleShowPassword} />
                ) : (
                  <VisibilityOffIcon onClick={handleShowPassword} />
                )}
              </div>
            </div>
          </form>
          <div className="flex items-center gap-4 my-4">
            <input type="radio" />
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
          <div className="text-sm">
            already signup ?
            <a href="/login" className="no-underline">
              login
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
        <div className="w-full">
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
