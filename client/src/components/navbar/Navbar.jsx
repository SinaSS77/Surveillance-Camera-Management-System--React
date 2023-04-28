import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const Navbar = ({ email, userIsLoggedIn, setUserIsLoggedIn }) => {
  const navigate = useNavigate();


  const handleLogout = async () => {

      Cookies.remove('token')
      axios.defaults.headers.common['Authorization'] = null;
      setUserIsLoggedIn(false)
      navigate('/');

  };

  return (
<div className="fixed-height-container">
  <div className="w-full flex items-center my-auto py-5 fixed top-0 z-20 justify-between bg-white shadow-md h-[150px] max-h-full overflow-hidden  shadow-rose-600/40 ring ring-2 ring-purple-600">
    <div>
      <h1 className="text-3xl font-semibold text-purple-700 items-center pl-20 decoration-wavy">
        Surveillance Camera Management System
      </h1>
    </div>
    <div className="flex gap-5 pr-10">
      {userIsLoggedIn && (
        <div className="item-center my-auto gap-4 text-lg">
          <label className="items-center m-10 ml-0 text-gray-800">{email}</label>

          <label
            className="text-red-600 m-10 hover:cursor-pointer font-medium"
            onClick={handleLogout}
          >
            Logout
          </label>
        </div>
      )}
    </div>
  </div>
</div>
);
};

export default Navbar;