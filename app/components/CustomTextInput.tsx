import React from "react";
import { StyleSheet, Text, TextInputProps, View } from "react-native";
import Icon from "./Icon";
import TextInputIcon from "./TextInputIcon";
import { TextInput } from "react-native-paper";
import { Colors } from "../GlobalStyles";
import { icons } from "../utils/constants/icons";

type Variant = "primary" | "secondary" | "filled";
type IconName = keyof typeof icons;

interface CustomTextInputProps extends TextInputProps {
  variant?: Variant;
  label?: string;
  placeholder?: string;
  iconName?: IconName;
  filledLabel?: string;
  filledValue?: string;
}

const CustomTextInput = ({
  variant = "primary",
  label,
  placeholder,
  iconName,
  filledLabel,
  filledValue,
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
          outlineStyle={styles.primaryOutlineStyle}
          style={styles.inputContainer}
          //   right={
          //     iconName ? (
          //       <TextInputIcon iconName={iconName} fill={Colors.orange100} />
          //     ) : null
          //   }
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
          outlineStyle={styles.secondaryOutlineStyle}
          style={styles.inputContainer}
          right={
            iconName ? (
              <TextInput.Icon
                icon={() => <Icon name={iconName} fill={Colors.neutral350} />}
              />
            ) : null
          }
        />
      )}
      {variant === "filled" && (
        <View style={styles.filledContainer}>
          <Text style={styles.filledLabel}>{filledLabel}</Text>
          <Text style={styles.filledValue}>{filledValue}</Text>
        </View>
      )}
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: 320,
    height: 54,
  },
  primaryOutlineStyle: {
    borderStyle: "solid",
    borderColor: Colors.orange100,
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: Colors.neutral600,
  },
  secondaryOutlineStyle: {
    backgroundColor: Colors.neutral800,
  },
  filledContainer: {
    width: 320,
    height: 54,
    paddingTop: 6,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 6,
    backgroundColor: Colors.orange100,
    flexDirection: "column",
  },
  filledLabel: {
    color: Colors.neutral100,
    fontSize: 14,
    fontFamily: "Satoshi",
  },
  filledValue: {
    color: Colors.neutral100,
    fontSize: 16,
    marginTop: 4,
    fontFamily: "Satoshi",
  },
});
