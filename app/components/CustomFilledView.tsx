import { StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../GlobalStyles";
import { Surface, Text } from "react-native-paper";

type Props = {
  filledLabel?: string;
  filledValue?: string;
};

const defaultLabel = "You'll be using this email to log in";

const CustomFilledView = ({
  filledLabel = defaultLabel,
  filledValue,
}: Props) => {
  return (
    <Surface style={styles.filledContainer}>
      <Text style={styles.filledLabel}>{filledLabel}</Text>
      <Text style={styles.filledValue}>{filledValue}</Text>
    </Surface>
  );
};

export default CustomFilledView;

const styles = StyleSheet.create({
  filledContainer: {
    width: 320,
    height: 54,
    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: Colors.orange100,
    justifyContent: "center",
  },
  filledLabel: {
    fontSize: 14,
    fontFamily: "Satoshi",
    color: Colors.neutral100,
  },
  filledValue: {
    marginTop: 4,
    fontSize: 16,
    fontFamily: "Satoshi",
    color: Colors.neutral100,
  },
});
