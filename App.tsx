import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import Icon from "./components/Icon";
import CustomTextInput from "./components/CustomTextInput";
import { Colors } from "./GlobalStyles";

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Satoshi: require("./assets/fonts/Satoshi/Satoshi-Regular.otf"),
        SatoshiBold: require("./assets/fonts/Satoshi/Satoshi-Medium.otf"),
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
      <Text style={{ fontFamily: "Satoshi", fontSize: 16 }}>
        armelhell@icloud.com
      </Text>
      {/* <Icon width={48} height={48} name="home" fill={Colors.orange100} /> */}
      <View style={styles.textInputContainer}>
        <CustomTextInput placeholder="Email" variant="primary" />
      </View>
      <View style={styles.textInputContainer}>
        <CustomTextInput
          placeholder="Email"
          variant="primary"
          iconName="target"
        />
      </View>
      <View style={styles.textInputContainer}>
        <CustomTextInput placeholder="Placeholder" variant="secondary" />
      </View>
      <View style={styles.textInputContainer}>
        <CustomTextInput
          placeholder="Placeholder"
          variant="secondary"
          iconName="arrowRight"
        />
      </View>
      <View style={styles.searchTextInputContainer}>
        <CustomTextInput placeholder="Placeholder" variant="search" />
      </View>
      <View style={styles.searchTextInputContainer}>
        <CustomTextInput placeholder="Placeholder" variant="filled" />
      </View>
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
  textInputContainer: {
    marginBottom: 8,
  },
  searchTextInputContainer: {
    alignSelf: "flex-end",
    marginBottom: 8,
    marginEnd: 30,
  },
});
