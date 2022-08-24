import React from "react";
import axios from "axios";

function login(data) {
  return axios.post("https://reqres.in/api/login", {
    email: data.email,
    password: data.password,
  });
}

export default login;
