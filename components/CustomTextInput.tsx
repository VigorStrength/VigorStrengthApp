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
        {variant === "search" && (
          <Icon name="search" fill={Colors.neutral350} />
        )}
      </View>
      <TextInput
        style={[styles.input, variantStyles[variant].input]}
        placeholderTextColor={
          variant === "primary" ? Colors.orange100 : Colors.neutral350
        }
        {...props}
      />
      {iconName && (
        <Icon
          name={iconName}
          fill={variant === "primary" ? Colors.orange100 : Colors.neutral350}
        />
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {},
  input: {},
  label: {},
});

const variantStyles: {
  [Key in Variant]: { container: ViewStyle; input: TextStyle };
} = {
  primary: {
    container: {
      width: 324,
      padding: 16,
      borderWidth: 2,
      borderRadius: 6,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: Colors.neutral600,
      borderStyle: "solid",
      borderColor: Colors.orange100,
    },
    input: {
      flex: 1,
      lineHeight: 24,
      fontSize: FontSize.bodyRegular16_size,
    },
  },
  secondary: {
    container: {
      flexDirection: "row",
      width: 324,
      borderRadius: 6,
      justifyContent: "space-between",
      backgroundColor: Colors.neutral800,
      alignItems: "center",
      padding: 16,
    },
    input: {
      flex: 1,
      lineHeight: 24,
      fontSize: FontSize.bodyRegular16_size,
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
      width: 138,
      height: 32,
      borderRadius: 50,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 12,
      paddingVertical: 4,
      backgroundColor: Colors.neutral800,
    },
    input: {
      lineHeight: 18,
      fontFamily: "SatoshiBold",
      fontSize: FontSize.bodyBold14_size,
      color: Colors.neutral350,
    },
  },
};
