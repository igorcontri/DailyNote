import axios from "axios";

export const api = axios.create({
  // baseURL: "https://localhost:3333",
  baseURL: "https://notepad-rocketseat-c5a6d9fd9654.herokuapp.com/",
});
