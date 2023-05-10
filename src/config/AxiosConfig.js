import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 50000,
});

export default instance;
