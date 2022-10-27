import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
   <div className="hero min-h-screen " style={{ backgroundImage: `url("https://i.ibb.co/qCRv3LB/1-01.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-amber-500 font-bold ">The Global Classroom</h1>
      <p className="text-2xl mb-5 shadow-2xl">Educapedia is an educational organization. We are committed to providing the best learning experience. Education is a fundamental human right, and it promotes individual empowerment. An educated person can differentiate between right and wrong or good and evil. It is the foremost responsibility of a society to educate its citizens. We believe in education for all, and we are redefining education from the bottom up.</p>
      <button className="bg-amber-600 px-5 py-3 border rounded-lg shadow-2xl hover:bg-amber-800 transition duration-150 ease-in-out"><Link to='/courses'> Go to Courses</Link></button>
    </div>
  </div>
</div>
  );
};

export default Home;
