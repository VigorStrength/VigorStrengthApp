import React from "react";
import DarkTheme from "./utils/theme";
import "./api/axiosInterceptors";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { FontProvider } from "../app/contexts/FontContext";
import AppLayout from "./screens/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DevToolsBubble } from "react-native-react-query-devtools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <PaperProvider theme={DarkTheme}>
      <FontProvider>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="light" />
          <AppLayout />
          <DevToolsBubble />
        </QueryClientProvider>
      </FontProvider>
    </PaperProvider>
  );
};

export default App;
