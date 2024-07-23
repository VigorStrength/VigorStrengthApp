import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, renewRefreshToken } from "../../api/apiAuth";
import {
  getRefreshToken,
  removeTokens,
  saveToken,
  saveTokens,
} from "../../api/apiUtils";
import { useEffect } from "react";

type Props = {
  navigation: any;
};

type LoginParams = {
  email: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export function useLogin({ navigation }: Props) {
  const queryClient = useQueryClient();

  const {
    mutate: userSignIn,
    data,
    error,
    isPending,
  } = useMutation<LoginResponse, Error, LoginParams>({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (data) => {
      // queryClient.setQueryData(["auth"], data);
      saveTokens(data.accessToken, data.refreshToken);
      navigation.navigate("Home");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  useEffect(() => {
    const intervalRefreshToken = setInterval(async () => {
      const refreshToken = await getRefreshToken();
      if (refreshToken) {
        try {
          const newRefreshToken = await renewRefreshToken(refreshToken);
          await saveToken("refreshToken", newRefreshToken);
        } catch (error: any) {
          console.log(error.message);
          removeTokens();
          // Optional: redirect to login or trigger logout
        }
      }
    }, 1000 * 60 * 60 * 24 * 7);

    return () => clearInterval(intervalRefreshToken);
  }, []);

  return { userSignIn, data, error, isPending };
}
