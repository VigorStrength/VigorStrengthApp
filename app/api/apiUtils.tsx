import * as SecureStore from "expo-secure-store";

async function saveToken(key: string, token: string) {
  await SecureStore.setItemAsync(key, token);
}

async function saveTokens(accessToken: string, refreshToken: string) {
  await SecureStore.setItemAsync("accessToken", accessToken);
  await SecureStore.setItemAsync("refreshToken", refreshToken);
}

async function getAccessToken() {
  return await SecureStore.getItemAsync("accessToken");
}

async function getRefreshToken() {
  return await SecureStore.getItemAsync("refreshToken");
}

async function removeTokens() {
  await SecureStore.deleteItemAsync("accessToken");
  await SecureStore.deleteItemAsync("refreshToken");
}

export { saveToken, saveTokens, getAccessToken, getRefreshToken, removeTokens };
