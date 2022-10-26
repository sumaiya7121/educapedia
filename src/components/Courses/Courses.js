import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import RightSideNav from "../RightSideNav/RightSideNav";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="min-h-screen">
     
      <h2 className="text-3xl mt-10 font-bold text-purple-900 hover:text-amber-600">All Courses</h2>
      <div className="grid lg:grid-cols-4 grid-cols-1 mt-10 w-10/12 mx-auto">
        <div className="col-span-3">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-10 py-10">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course}></CourseCard>
            ))}
          </div>
        </div>
        <div className="py-10  rounded-md px-6 order-first ">
          <h2 className="text-2xl text-amber-600 font-bold pb-7">
            Course List
          </h2>
          {courses.map((course) => (
            <RightSideNav key={course.id} course={course}></RightSideNav>
          ))}
        </div>
    
      </div>
    </div>
  );
};

export default Courses;
