import axios from "./axiosInstance";

export const registerUser = async (data) => {
  const response = await axios.post("/auth/register/", data, {
    headers: {},
  });
  return response.data;
};

export const loginUser = async (data) => {
  const response = await axios.post("/auth/login/", data);
  return response.data;
};
