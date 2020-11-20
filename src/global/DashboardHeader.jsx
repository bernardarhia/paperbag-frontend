import React, { useState, useEffect } from "react";
import Input from "./Input";
import { FiBell } from "react-icons/fi";
import avatar from "../assets/avatar.png";
import Dropdown from "./Dropdown";
import {decryptData} from '../functions/test';
import localForage from 'localforage';
import User from '../Api/requests';

const DashboardHeader = () => {
  const [toggle, setToggle] = useState(false);
  
  const [user, setUser] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  useEffect(()=>{

    const decryptedData = async ()=>{
      try {
        const data = await localForage.getItem('users');
         const result = await decryptData(data)
         setUser(result);
         const getAvatar = await User.getAvatar(result.user._id, result.token);
         const img = await localForage.setItem('avatar',getAvatar.request.responseURL)
        const userAvatar1 = await localForage.getItem('avatar');
        setUserAvatar(userAvatar1);
      } catch (error) {
        console.log(error);
      }
    }
    decryptedData()
  },[])
  return (
    <div className="dashboard__header">
      <div className="welcome__user">
        <p>
          Welcome <span>{user && user.user.username}</span>
        </p>
      </div>
      <div className="nav">
        <nav>
          <div className="notification">
            <FiBell />
            <div className="dot">
              <span></span>
            </div>
          </div>
          <div className="user__avatar">
            <label
              htmlFor=""
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <img src={userAvatar  ? userAvatar : avatar} alt="" />
            </label>
            <Input type="file" id="avatar" style={{ display: "none" }} />
          </div>
        </nav>
      </div>

      {toggle && <Dropdown />}
    </div>
  );
};

export default DashboardHeader;
