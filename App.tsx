import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";
import DarkTheme from "./utils/theme";
import { Provider as PaperProvider } from "react-native-paper";

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Satoshi: require("./assets/fonts/Satoshi/Satoshi-Regular.otf"),
        SatoshiBold: require("./assets/fonts/Satoshi/Satoshi-Medium.otf"),
        SatoshiStrong: require("./assets/fonts/Satoshi/Satoshi-Bold.otf"),
        IntegralCF: require("./assets/fonts/Integral-CF/Fontspring-DEMO-integralcf-regular.otf"),
        "IntegralCF-Bold": require("./assets/fonts/Integral-CF/Fontspring-DEMO-integralcf-medium.otf"),
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={DarkTheme}>
      <View>
        <Text>Hello From VigorStrength</Text>
      </View>
    </PaperProvider>
  );
};

export default App;
