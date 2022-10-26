import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FacebookIcon from "../../assets/images/icons/icons8-facebook-48.png";
import GoogleIcon from "../../assets/images/icons/icons8-google-48.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { googleSignIn, facebookSignIn, logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((result) => {
        setError("");
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };
  const handleFacebookLogIn = () => {
    facebookSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="min-h-screen mt-14">
      <div className="border border-gray-500 w-11/12 lg:w-4/12 mx-auto rounded-xl py-20">
        <h2 className="text-3xl font-semibold mb-5">Login</h2>
        <p className="text-red-500 mb-5">{error.slice(10, 300)}</p>
        <form onSubmit={handleSubmit} className="w-9/12 mx-auto">
          <div className="inputGroup ">
            <input
              className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl"
              type="email"
              name="email"
              placeholder="Username or Email"
            />
          </div>
          <div className="inputGroup ">
            <input
              className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl mt-10"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between  mt-10">
            <div>
              <input type="checkbox" name="" id="rememberMe" />
              <label htmlFor="rememberMe" className="ml-2">
                Remember Me
              </label>
            </div>
            <div>
              <Link to="" className="underline">
                Forgot Password
              </Link>
            </div>
          </div>
          <button className="bg-purple-900 px-7 py-3 text-white hover:amber-600 rounded-md w-full mt-10 ">Login</button>
          <h4 className="my-10">
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Create a new account
            </Link>
          </h4>
          <div className="divider  mt-5">OR SIGN IN WITH</div>
          <div className="flex justify-center mt-5">
            <div
              onClick={handleGoogleLogIn}
              className="border mr-2 px-4 py-2 rounded-xl cursor-pointer"
            >
              <img src={GoogleIcon} alt="" />
              <p className="">Google</p>
            </div>
            <div
              onClick={handleFacebookLogIn}
              className="border mr-2 px-4 py-2 rounded-xl cursor-pointer"
            >
              <img className="pl-2.5" src={FacebookIcon} alt="" />
              <p className="">Facebook</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
