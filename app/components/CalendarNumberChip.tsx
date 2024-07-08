import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple, TouchableRippleProps } from "react-native-paper";
import { Colors } from "../GlobalStyles";

type Variant = "default" | "completed" | "active";

interface Props extends TouchableRippleProps {
  variant?: Variant;
  children: number;
}

const getStyle = (variant: Variant) => {
  switch (variant) {
    case "completed":
      return {
        container: styles.containerCompletedActive,
        chip: styles.chipDefaultCompleted,
        text: styles.textDefaultCompleted,
      };
    case "active":
      return {
        container: styles.containerCompletedActive,
        chip: styles.chipActive,
        text: styles.textActive,
      };
    default:
      return {
        chip: styles.chipDefaultCompleted,
        text: styles.textDefaultCompleted,
      };
  }
};

const CalendarNumberChip = ({
  variant = "default",
  children,
  ...props
}: Props) => {
  const customStyles = getStyle(variant);

  return (
    <TouchableRipple
      {...props}
      style={[styles.container, customStyles.container]}
    >
      <View style={[styles.chip, customStyles.chip]}>
        <Text style={customStyles.text}>{children}</Text>
      </View>
    </TouchableRipple>
  );
};

export default CalendarNumberChip;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  containerCompletedActive: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: Colors.orange100,
  },
  chip: {
    width: 32,
    height: 32,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  chipDefaultCompleted: {
    backgroundColor: Colors.neutral800,
  },
  chipActive: {
    backgroundColor: Colors.orange100,
  },
  textDefaultCompleted: {
    color: Colors.neutral350,
  },
  textActive: {
    color: Colors.neutral200,
  },
});
