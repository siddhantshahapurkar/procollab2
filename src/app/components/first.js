import React from "react";
import Image from "next/image";

const First = () => {
  return (
    <div className="flex">
      <span className="w-3/5">
        <img className=" pt-8 procollabpic" src="navbar-brand.png" alt="" />
        <div className="text1">
          Are you a Professor or a Student
          <tr /> looking for a Project?
        </div>
        <div className="text2">Go no further...</div>
        <div className="text3 font-bold">
          <span className="text-yell font-bold">Collaboration </span> is now
          Easy, Find your first project here!
        </div>
        <div className="pl-20 pt-12">
          <span>
            <button className="b1 px-16 py-3 rounded-lg clickbtn">
              Professor
            </button>
          </span>
          <span className="px-4"></span>
          <span>
            <button className="b2 px-16 py-3 rounded-lg clickbtn">
              Student
            </button>
          </span>
        </div>
      </span>
      <span className="w-2/5 right-side bg-triangleback">
        <img className="sideimg" src="firstlogo.png" alt="" />
        <div>
          <button className="mx-3 bg-white"></button>
          <button className="px-3 bg-white"></button>
          <button className="px-3 bg-white"></button>
        </div>
      </span>
    </div>
  );
};

export default First;
