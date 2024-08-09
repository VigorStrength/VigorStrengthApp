import axios from "axios";

export const baseURL = "http://127.0.0.1:8080/api/v1";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 5000,
});

export default axiosInstance;
