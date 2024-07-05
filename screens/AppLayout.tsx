import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFont } from "../contexts/FontContext";
import { useTheme } from "react-native-paper";

const AppLayout = () => {
  const { fontLoaded } = useFont();
  const { colors } = useTheme();

  if (!fontLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={{ color: colors.primary }}>Loading...</Text>
      </View>
    ); // Placeholder for your future loader component
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primary }}>Hello From VigorStrength</Text>
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  surface: {
    padding: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
