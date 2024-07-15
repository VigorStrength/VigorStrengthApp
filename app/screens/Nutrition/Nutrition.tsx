import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../GlobalStyles";
import CustomTopBar from "../../components/CustomTopBar";

type Props = {
  navigation: any;
  route: any;
};

const Nutrition = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomTopBar label="Nutrition" />
    </SafeAreaView>
  );
};

export default Nutrition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
