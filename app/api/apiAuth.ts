import axios from "axios";
import { baseURL } from "./axiosInstance";

type loginProps = {
  email: string;
  password: string;
};

export async function login({ email, password }: loginProps) {
  try {
    const response = await axios.post(`${baseURL}/auth/user/login`, {
      email,
      password,
    });
    const { accessToken, refreshToken } = response.data;
    return { accessToken, refreshToken };
  } catch (error: any) {
    throw new Error(error?.message);
  }
}

export async function refreshAccessToken(refreshToken: string) {
  try {
    const response = await axios.post(`${baseURL}/auth/refresh`, null, {
      headers: {
        "Refresh-Token": `Bearer ${refreshToken}`,
      },
    });
    const { accessToken } = response.data;
    return accessToken;
  } catch (error: any) {
    throw new Error(error?.message);
  }
}

export async function renewRefreshToken(refreshToken: string) {
  try {
    const response = await axios.post(`${baseURL}/auth/refresh-token`, null, {
      headers: {
        "Refresh-Token": `Bearer ${refreshToken}`,
      },
    });
    const { refreshToken: newRefreshToken } = response.data;
    return newRefreshToken;
  } catch (error: any) {
    throw new Error(error?.message);
  }
}
