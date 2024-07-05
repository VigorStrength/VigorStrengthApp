import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFont } from "../contexts/FontContext";

const AppLayout = () => {
  const { fontLoaded } = useFont();

  if (!fontLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <Text>Loading...</Text>
      </View>
    ); // Placeholder for your future loader component
  }

  return (
    <View style={styles.container}>
      <Text>Hello From VigorStrength</Text>
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
});
