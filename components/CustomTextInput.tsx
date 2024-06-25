import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Icon from "./Icon";
import { Colors, FontSize } from "../GlobalStyles";
import { icons } from "../constants/icons";

type Variant = "primary" | "secondary" | "active" | "filled" | "search";
type IconName = keyof typeof icons;

interface CustomTextInputProps extends TextInputProps {
  variant?: Variant;
  label?: string;
  iconName?: IconName;
}

const CustomTextInput = ({
  variant = "primary",
  label,
  iconName,
  ...props
}: CustomTextInputProps) => {
  return (
    <View style={[styles.container, variantStyles[variant].container]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {variant === "search" && <Icon name="search" style={styles.icon} />}
      </View>
      <TextInput
        style={[styles.input, variantStyles[variant].input]}
        placeholderTextColor={"primary" ? Colors.orange100 : Colors.neutral350}
        {...props}
      />
      {iconName && <Icon name={iconName} style={styles.icon} />}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {},
  input: {},
  label: {},
  icon: {},
});

const variantStyles: {
  [Key in Variant]: { container: ViewStyle; input: TextStyle };
} = {
  primary: {
    container: {
      flex: 1,
      flexDirection: "row",
      width: 324,
      height: 56,
      borderRadius: 6,
      backgroundColor: Colors.neutral600,
      borderStyle: "solid",
      borderColor: Colors.orange100,
      borderWidth: 2,
      alignItems: "center",
      padding: 16,
    },
    input: {
      flex: 1,
      fontSize: FontSize.bodyRegular16_size,
      lineHeight: 24,
      fontFamily: "Satoshi",
      color: Colors.orange100,
      textAlign: "left",
    },
  },
  secondary: {
    container: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      //   width: 324,
      //   height: 56,
      borderRadius: 6,
      backgroundColor: Colors.neutral800,
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 11,
    },
    input: {
      flex: 1,
      fontSize: FontSize.bodyRegular16_size,
      lineHeight: 24,
      fontFamily: "Satoshi",
      color: Colors.neutral350,
      textAlign: "left",
    },
  },
  active: {
    container: {},
    input: {},
  },
  filled: {
    container: {},
    input: {},
  },
  search: {
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      width: "100%",
      paddingHorizontal: 12,
      paddingVertical: 4,
    },
    input: {
      fontFamily: "Satoshi",
      fontSize: FontSize.bodyBold12_size,
      lineHeight: 18,
      color: Colors.neutral350,
      marginLeft: 25,
    },
  },
};
