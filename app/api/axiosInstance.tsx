import axios from "axios";

export const baseURL = "http://10.0.0.126:8080/api/v1";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 5000,
});
