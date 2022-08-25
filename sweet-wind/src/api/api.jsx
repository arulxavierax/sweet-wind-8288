import axios from "axios";

export const userLogin = (data) => {
  return axios.post("https://reqres.in/api/login", {
    email: data.email,
    password: data.password,
  });
};

export const userRegister = (data) => {
  return axios.post("https://reqres.in/api/register", {
    name: data.name,
    email: data.email,
    password: data.password,
  });
};
