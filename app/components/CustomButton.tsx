import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple, TouchableRippleProps } from "react-native-paper";
import { icons } from "../utils/constants/icons";
import Icon from "./Icon";
import { Colors } from "../GlobalStyles";

type Size = "small" | "medium" | "large" | "largeSignin" | "xlarge";
type IconName = keyof typeof icons;

interface Props extends TouchableRippleProps {
  size?: Size;
  left?: IconName;
  right?: IconName;
  style?: any;
  children: React.ReactNode;
}

const CustomButton = ({
  size = "large",
  left,
  right,
  children,
  style,
  ...props
}: Props) => {
  const getButtonStyle = () => {
    switch (size) {
      case "small":
        return styles.small;
      case "medium":
        return styles.medium;
      case "large":
        return styles.large;
      case "largeSignin":
        return styles.largeSignin;
      case "xlarge":
        return styles.xlarge;
      default:
        return styles.large;
    }
  };

  const getPaddingStyle = () => {
    switch (size) {
      case "small":
        return styles.paddingSmall;
      case "medium":
        return styles.paddingMedium;
      case "largeSignin":
        return styles.paddingLargeSignin;
      case "xlarge":
        return styles.paddingXlarge;
      default:
        return styles.paddingSmall;
    }
  };

  return (
    <TouchableRipple
      {...props}
      style={[styles.button, getButtonStyle(), getPaddingStyle(), style]}
    >
      <View
        style={[
          styles.innerContainer,
          size === "largeSignin" && styles.largeSignInContainer,
          size === "medium" && styles.mediumContainer,
        ]}
      >
        {left && (
          <Icon
            name={left}
            fill={Colors.orange100}
            style={size === "large" ? styles.leftIconLarge : null}
          />
        )}
        <Text
          style={[
            styles.text,
            size === "medium" && styles.textMedium,
            size === "largeSignin" && styles.textSignIn,
            size === "large" && left && right && styles.textLargeWithIcons,
            size === "xlarge" && left && styles.textXlarge,
          ]}
        >
          {children}
        </Text>
        {right && (
          <Icon
            name={right}
            fill={size === "largeSignin" ? Colors.neutral100 : Colors.orange100}
          />
        )}
      </View>
    </TouchableRipple>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.neutral600,
    borderRadius: 50,
  },
  small: {
    width: 170,
    height: 46,
  },
  medium: {
    width: 320,
    height: 46,
  },
  large: {
    width: 320,
    height: 46,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  largeSignin: {
    width: 320,
    height: 46,
    backgroundColor: Colors.orange100,
    borderRadius: 6,
  },
  xlarge: {
    width: 361,
    height: 56,
    backgroundColor: Colors.neutral800,
  },
  paddingSmall: {
    paddingHorizontal: 10,
    paddingVertical: 11,
  },
  paddingMedium: {
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
  paddingLargeSignin: {
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
  paddingXlarge: {
    paddingVertical: 16,
    paddingHorizontal: 90,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  mediumContainer: {
    justifyContent: "space-between",
  },
  largeSignInContainer: {
    justifyContent: "space-between",
  },
  leftIconLarge: {
    marginRight: 8,
  },
  text: {
    fontSize: 17,
    color: Colors.orange100,
  },
  textSignIn: {
    color: Colors.neutral100,
  },
  textMedium: {
    fontSize: 17,
    marginLeft: 80,
  },
  textLargeWithIcons: {
    marginRight: 130,
  },
  textXlarge: {
    marginLeft: 25,
  },
});
