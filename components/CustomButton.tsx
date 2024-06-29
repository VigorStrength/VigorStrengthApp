import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple, TouchableRippleProps } from "react-native-paper";
import { icons } from "../constants/icons";
import Icon from "./Icon";
import { Colors, FontSize } from "../GlobalStyles";

type Size = "small" | "medium" | "large" | "xlarge";
type IconName = keyof typeof icons;

interface Props extends TouchableRippleProps {
  size?: Size;
  left?: IconName;
  right?: IconName;
  children: React.ReactNode;
}

const CustomButton = ({
  size = "large",
  left,
  right,
  children,
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
      case "xlarge":
        return styles.xlarge;
      default:
        return styles.large;
    }
  };

  const getPaddingStyle = () => {
    if (size === "small") return styles.paddingSmall;
    if (size === "medium" || (left && right && size === "large"))
      return styles.paddingMedium;
    if (size === "large") return styles.paddingLarge;
    if (size === "xlarge") return styles.paddingXLarge;
  };

  return (
    <TouchableRipple
      {...props}
      style={[styles.button, getButtonStyle(), getPaddingStyle()]}
    >
      <View
        style={[
          styles.innerContainer,
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
            size === "xlarge" && styles.textXlarge,
            size === "large" && left && right && styles.textLargeWithIcons,
          ]}
        >
          {children}
        </Text>
        {right && <Icon name={right} fill={Colors.orange100} />}
      </View>
    </TouchableRipple>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.neutral800,
    borderRadius: 50,
  },
  small: {
    width: 180,
    height: 46,
  },
  medium: {
    width: 320,
    height: 46,
  },
  large: {
    width: 324,
    height: 46,
    borderRadius: 6,
  },
  xlarge: {
    width: 361,
    height: 56,
    borderRadius: 6,
  },
  paddingSmall: {
    paddingHorizontal: 10,
    paddingVertical: 11,
  },
  paddingMedium: {
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
  paddingLarge: {
    paddingHorizontal: 100,
    paddingVertical: 11,
  },
  paddingXLarge: {
    paddingHorizontal: 90,
    paddingVertical: 16,
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
  leftIconLarge: {
    marginRight: 8,
  },
  text: {
    color: Colors.orange100,
    fontSize: FontSize.bodyRegular16_size,
  },
  textXlarge: {
    marginLeft: 20,
  },
  textLargeWithIcons: {
    marginRight: 130,
  },
});
