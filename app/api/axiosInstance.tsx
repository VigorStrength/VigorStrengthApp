import axios from "axios";

export const baseURL = "http://10.0.0.126:8080/api/v1";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 5000,
});

axiosInstance.interceptors.request.use((request) => {
  console.log("Starting Request", request);
  return request;
});

axiosInstance.interceptors.response.use((response) => {
  console.log("Response:", response);
  return response;
});
