import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../api/apiAuth";

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
      queryClient.setQueryData(["auth"], data);
      navigation.navigate("Home");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { userSignIn, data, error, isPending };
}
