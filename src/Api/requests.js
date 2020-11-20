import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:5000/api/users/";
export default {
  login: async (data) => {
    return await Axios.post("login", data);
  },
  register: async (data) => {
    return await Axios.post("register", data);
  },
  updateUser: async (data,token) => {
    return await Axios.path("me", data,{
      headers: {
        Authorization: "Bearer "+token,
      },
    });
  },


  verifyUser: async (token) => {
    return await Axios.post(
      "/has_token",
     null,
      {
        headers: {
          Authorization: "Bearer "+token,
        },
      }
    );
  },
  addAvatar : async(token, file)=>{
    return await Axios.post(
      "/me/avatar",
    file,
      {
        headers: {
          'Content-type':'multipart/form-data',
          Authorization: "Bearer "+token,
        },
      }
    );
  },
  getAvatar : async (id, token)=>{
    return await Axios.get(
      `/${id}/avatar`,
      {
        headers: {
          Authorization: "Bearer "+token,
        },
      }
    );
  }
};
