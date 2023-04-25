import React from "react";
import profileImage from "../../assets/profile.png";

const Navbar = ({ email }) => {
  return (
    <div className=" w-full flex items-center my-auto py-5 fixed top-0 z-20 justify-between bg-slate-500">
      <div >
        <h1 className=" text-[2rem] text-cyan-500 items-center  pl-20"> Surveillance Camera Management System</h1>
      </div>
      <div className="flex gap-5 pr-10">
        <img
          className=" w-12 h-12 "
          src={profileImage}
          alt=""
        />
        <div className="item-center my-auto gap-4 text-[1.2rem] ">
          <label className=" items-center m-10 ml-0">{email}</label>
          <label className="  text-red-600 m-10 hover:cursor-pointer">Logout</label>
        </div>

      </div>
    </div>

  );
};

export default Navbar;