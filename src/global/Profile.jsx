import React, { useEffect, useState } from "react";
import Sidebar from "../admin/Sidebar";
import DashboardHeader from "./DashboardHeader";
import Loader from "./Loader";
import avatar from "../assets/avatar.png";
import Input from "./Input";
import Button from "../global/Button";
import localForage from "localforage";
import { decryptData } from "../functions/test";
import User from "../Api/requests";
const Profile = () => {
  const [user, setUser] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [userInfoUpdated, setUserInfoUpdated] = useState({});
  //   Get user avatar
  const fetchAvatar = async (e) => {
    const file = e.target.files[0];
    const fileName = e.target.files[0].name.split(".");
    const extension = fileName[fileName.length - 1].toLowerCase();
    const allowed = ["jpg", "png", "jpeg"];
    if (!allowed.includes(extension)) {
      console.log(extension);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("avatar", file);
      const avatar = await User.addAvatar(user.token, formData);
      window.location.reload();
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    const decryptedData = async () => {
      try {
        const data = await localForage.getItem("users");
        const result = await decryptData(data);
        setUser(result);
        const img = await localForage.getItem("avatar");
        setUserAvatar(img);
      } catch (error) {
        console.log(error);
      }
    };
    decryptedData();
    setTimeout(() => setShowProfile(true), 3000);
  }, []);

  //   update user info
  const handleInput = (e) => {
      setUserInfoUpdated({
          ...userInfoUpdated,
          [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
  };
  const updateUserInfo = async (e) => {
    e.preventDefault();
   
  };

  return (
    <>
      {!showProfile ? (
        <Loader />
      ) : (
        <>
          <div className="dashboard">
            <div className="dashboard__wrapper">
              <Sidebar />
              <div className="dashboard__content">
                <DashboardHeader />
                <div className="profile__section">
                  <div className="user__avatar">
                    <div className="avatar">
                      <Input
                        type="file"
                        style={{ display: "none" }}
                        id="avatar_img"
                        onChange={fetchAvatar}
                        
                      />

                      <label htmlFor="avatar_img">
                        <img
                          src={userAvatar && userAvatar ? userAvatar : avatar}
                          alt=""
                        />
                      </label>
                    </div>
                    <div className="details">
                      <p className="name">Bernard Arhia</p>
                      <div className="location">
                        New york, <span>USA</span>
                      </div>
                    </div>
                  </div>

                  <form className="" onSubmit={updateUserInfo}>
                    <div className="user__info-update">
                      <div className="name__input">
                        <label htmlFor="">First name</label>
                        <Input placeholder="First name" name="firstName"  onChange={handleInput} />
                      </div>
                      <div className="name__input">
                        <label htmlFor="">Last name</label>
                        <Input placeholder="Last name" name="lastName"  onChange={handleInput} />
                      </div>
                      <div className="name__input">
                        <label htmlFor="">Email</label>
                        <Input
                          placeholder="Email"
                          defaultValue={user.user.email}
                          onChange={handleInput}
                          name="email"
                        />
                      </div>
                      <div className="name__input">
                        <label htmlFor="">Username</label>
                        <Input
                          placeholder="Username"
                          defaultValue={user.user.username}
                          name="username"
                          onChange={handleInput}
                        />
                      </div>
                      <div className="name__input">
                        <label htmlFor="" defaultValue={user.user.location}>
                          Location
                        </label>
                        <Input placeholder="Location" name="location"  onChange={handleInput} />
                      </div>
                      <div className="name__input">
                        <label htmlFor="">Phone number</label>
                        <Input
                          placeholder="Phone number"
                          type="number"
                          defaultValue={user.user.phone}
                          name="phone"
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                    <div className="submit">
                      <Button size="btn__medium">Save Changes</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
