import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, ButtonProps } from "react-native-paper";
import { icons } from "../utils/constants/icons";
import Icon from "./Icon";
import { Colors, FontSize } from "../GlobalStyles";

type Size = "small" | "medium" | "large" | "xlarge";
type IconName = keyof typeof icons;

interface Props extends ButtonProps {
  size?: Size;
  left?: IconName;
  right?: IconName;
  children: React.ReactNode;
}

const CustomButton2 = ({
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

  return (
    <Button
      mode="contained"
      {...props}
      style={[styles.button, getButtonStyle()]}
      contentStyle={[
        styles.innerContainer,
        size === "medium" && styles.mediumContainer,
      ]}
      labelStyle={styles.label}
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
            style={{
              marginRight: size === "large" ? 8 : 0,
            }}
          />
        )}
        <Text
          style={{
            color: Colors.orange100,
            fontSize: FontSize.bodyRegular16_size,
            marginLeft: size === "xlarge" ? 20 : 0,
            marginRight: size === "large" && left && right ? 130 : 0,
          }}
        >
          {children}
        </Text>
        {right && <Icon name={right} fill={Colors.orange100} />}
      </View>
    </Button>
  );
};

export default CustomButton2;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.neutral800,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: Colors.orange100,
    fontSize: FontSize.bodyRegular16_size,
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
});
