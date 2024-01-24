import axios from "axios";

export const api = axios.create({
  baseURL: "https://notepad-rocketseat-c5a6d9fd9654.herokuapp.com/",
});
