import axios from "axios";

export const baseURL = "http://10.0.0.124:8080/api/v1";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
