import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  removeTokens,
  saveToken,
} from "./apiUtils";
import { refreshAccessToken } from "./apiAuth";

export const baseURL = "http://10.0.0.126:8080/api/v1";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await getRefreshToken();
      if (refreshToken) {
        try {
          const newAcessToken = await refreshAccessToken(refreshToken);
          await saveToken("accessToken", newAcessToken);
          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newAcessToken}`;
          return axiosInstance(originalRequest);
        } catch (error) {
          await removeTokens();
          // Optional: redirect to login or trigger logout
          return Promise.reject(error);
        }
      } else {
        await removeTokens();
        // Optional: redirect to login or trigger logout
      }
    }
    return Promise.reject(error);
  }
);
