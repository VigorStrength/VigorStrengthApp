import React from "react";
import { View, Text } from "react-native";
import DarkTheme from "./utils/theme";
import { Provider as PaperProvider } from "react-native-paper";
import { FontProvider } from "./contexts/FontContext";
import AppLayout from "./screens/AppLayout";

const App = () => {
  return (
    <PaperProvider theme={DarkTheme}>
      <FontProvider>
        <AppLayout />
      </FontProvider>
    </PaperProvider>
  );
};

export default App;
