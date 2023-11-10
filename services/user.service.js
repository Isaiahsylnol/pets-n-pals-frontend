// Data service

import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "process.env.REACT_PUBLIC_BACKEND/pets/";

const createPet = (userId, name, age, breed, weight) => {
  return axios.post("process.env.REACT_PUBLIC_BACKEND/pets/add-pet", {
    userId,
    name,
    age,
    breed,
    weight,
  });
};

const editPet = async (username, name, weight, age, breed, target, id) => {
  return axios.put(
    API_URL + id,
    {
      target,
      name,
      weight,
      age,
      breed,
      username,
    },
    { headers: authHeader() }
  );
};

const getPublicContent = () => {
  return axios.get("process.env.REACT_PUBLIC_BACKEND/user/test/public");
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
const userService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  createPet,
  editPet,
};
export default userService;
