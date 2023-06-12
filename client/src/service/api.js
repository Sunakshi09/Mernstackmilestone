import axios from "axios";

const URL = "http://localhost:3000/";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while calling and User Api", error);
  }
};
