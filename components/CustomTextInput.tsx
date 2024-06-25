import React from "react";
import { TextInputProps } from "react-native";
import Icon from "./Icon";
import { TextInput } from "react-native-paper";
import { Colors } from "../GlobalStyles";
import { icons } from "../constants/icons";

type Variant = "primary" | "secondary" | "filled";
type IconName = keyof typeof icons;

interface CustomTextInputProps extends TextInputProps {
  variant?: Variant;
  label?: string;
  placeholder?: string;
  iconName?: IconName;
}

const CustomTextInput = ({
  variant = "primary",
  label,
  placeholder,
  iconName,
}: CustomTextInputProps) => {
  return (
    <>
      {variant === "primary" && (
        <TextInput
          mode="outlined"
          label={label}
          placeholder={placeholder}
          autoCapitalize="none"
          textColor={`${Colors.orange100}`}
          theme={{
            colors: {
              onSurfaceVariant: Colors.orange100,
            },
          }}
          outlineStyle={{
            borderStyle: "solid",
            borderColor: Colors.orange100,
            borderWidth: 2,
            borderRadius: 6,
            backgroundColor: Colors.neutral600,
          }}
          style={{
            width: 324,
            height: 56,
          }}
          right={
            iconName ? (
              <TextInput.Icon
                icon={() => <Icon name={iconName} fill={Colors.orange100} />}
              />
            ) : null
          }
        />
      )}
      {variant === "secondary" && (
        <TextInput
          mode="outlined"
          placeholder={placeholder}
          activeOutlineColor="transparent"
          autoCapitalize="none"
          textColor={`${Colors.neutral350}`}
          theme={{
            colors: {
              onSurfaceVariant: Colors.neutral350,
            },
          }}
          outlineStyle={{
            backgroundColor: Colors.neutral800,
          }}
          style={{
            width: 324,
            height: 56,
          }}
          right={
            iconName ? (
              <TextInput.Icon
                icon={() => <Icon name={iconName} fill={Colors.neutral350} />}
              />
            ) : null
          }
        />
      )}
    </>
  );
};

export default CustomTextInput;
