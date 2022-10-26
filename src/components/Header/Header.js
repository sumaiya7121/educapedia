import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserIcon from "../../assets/images/icons/free-user-icon-3296-thumb.png";
import LogoImage from "../../assets/images/skill up logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex  bg-purple-900 ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-warning lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul 
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {user && user?.uid ? (
                <li
                  onClick={handleSignOut}
                  className="mr-3 bg-purple-900 rounded-full "
                >
                  Log Out
                </li>
              ) : (
                <div className="block lg:hidden">
                  <Link to="/login">
                    <button className="bg-purple-900 px-10 py-3  text-white mt-5 rounded mr-3 lg:hidden">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="bg-purple-900 text-white px-8 py-3 mt-3 rounded mr-3 lg:hidden">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        <div>
            <Link className="normal-case text-xl" to="/">
            <img className="w-20" src={LogoImage} alt="" />
          </Link>
        </div>
        <div>
          <h2 className="text-white font-bold">EDUCAPEDIA</h2>
        </div>
        </div>
        <div className="navbar-end hidden lg:flex mr-3">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/home" className="mr-3 text-white hover:bg-amber-600 hover:px-5 hover:py-2 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="mr-3 text-white hover:bg-amber-600 hover:px-5 hover:py-2">
                Courses
              </Link>
            </li>
            <li>
              <Link className="mr-3 text-white hover:bg-amber-600 hover:px-5 hover:py-2" to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="mr-3 text-white hover:bg-amber-600 hover:px-5 hover:py-2" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="flex items-center">
            {user && user?.uid ? (
              <button
                onClick={handleSignOut}
                className="mr-3 btn btn-primary rounded-full hidden lg:block"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-white bg-amber-600 px-5 py-2 rounded-md mr-3 hidden lg:block">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="text-white bg-amber-600 px-5 py-2 rounded-md  mr-3 hidden lg:block">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center pr-10">
        <label className="swap swap-rotate mr-5">
          <input type="checkbox" />

          <svg
            className="swap-off text-white fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>

          <svg
            className="swap-on fill-current w-7 h-7 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        </label>
        <div className="avatar">
          <div className="w-9 rounded-full">
            {user?.photoURL ? (
              <img
                title={user.displayName}
                className="cursor-pointer"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <img className="w-10" src={UserIcon} alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
