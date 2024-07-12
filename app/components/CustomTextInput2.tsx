import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../GlobalStyles";
import { TextInput, TextInputProps } from "react-native-paper";
import Icon from "./Icon";
import { icons } from "../utils/constants/icons";

type IconName = keyof typeof icons;
interface CustomTextInputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  iconName?: IconName;
}

const CustomTextInput2 = ({
  label,
  placeholder,
  iconName,
  ...props
}: CustomTextInputProps) => {
  return (
    <TextInput
      mode="outlined"
      label={label}
      autoCapitalize="none"
      placeholder={placeholder}
      textColor={`${Colors.orange100}`}
      outlineStyle={styles.outlineStyle}
      style={styles.container}
      theme={{
        colors: {
          onSurfaceVariant: Colors.orange100,
        },
      }}
      right={
        iconName ? (
          <TextInput.Icon
            icon={() => <Icon name={iconName} fill={Colors.orange100} />}
          />
        ) : null
      }
      {...props}
    />
  );
};

export default CustomTextInput2;

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 46,
  },
  outlineStyle: {
    borderWidth: 2,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: Colors.orange100,
    backgroundColor: Colors.neutral600,
  },
});
