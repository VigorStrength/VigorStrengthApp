import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import { Colors } from "../GlobalStyles";

type Variant = "medium" | "large";
type Props = {
  size: number;
  variant: Variant;
};

const LogoText = ({ size, variant = "large" }: Props) => {
  return (
    <View style={styles.container}>
      <Icon name="logo" width={size} height={size} />
      <Text
        style={
          variant === "large" ? styles.logoLabelLarge : styles.logoLabelMedium
        }
      >
        VIIGOR
      </Text>
    </View>
  );
};

export default LogoText;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  logoLabelLarge: {
    fontSize: 40,
    lineHeight: 50,
    marginLeft: 8,
    color: Colors.orange100,
    fontFamily: "IntegralCF-Bold",
    textTransform: "uppercase",
  },
  logoLabelMedium: {
    fontSize: 24,
    lineHeight: 25,
    marginLeft: 10,
    color: Colors.orange100,
    fontFamily: "IntegralCF-Bold",
  },
});
