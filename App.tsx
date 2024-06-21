import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Satoshi: require("./assets/fonts/Satoshi/Satoshi-Regular.otf"),
        IntegralCF: require("./assets/fonts/Integral-CF/Fontspring-DEMO-integralcf-regular.otf"),
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Satoshi", fontSize: 24 }}>Hello Satoshi</Text>
      <Text style={{ fontFamily: "IntegralCF", fontSize: 24 }}>
        Hello Integral CF
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
