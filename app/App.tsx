import React from "react";
import DarkTheme from "./utils/theme";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { FontProvider } from "../app/contexts/FontContext";
import AppLayout from "./screens/AppLayout";

const App = () => {
  return (
    <PaperProvider theme={DarkTheme}>
      <FontProvider>
        <StatusBar style="light" />
        <AppLayout />
      </FontProvider>
    </PaperProvider>
  );
};

export default App;
