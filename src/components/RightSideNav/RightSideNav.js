import React from "react";
import { Link } from "react-router-dom";

const RightSideNav = ({ course }) => {
  const { courseName, id } = course;
  return (
    <div>
      <Link to={`/courses/${id}`} className="">
        <div className="w-full mb-5 hover:bg-amber-700 hover:text-white duration-500 rounded-md border border-amber-300 text-amber-600 p-3 lg:p-10">
          {courseName}
        </div>
      </Link>
    </div>
  );
};

export default RightSideNav;
