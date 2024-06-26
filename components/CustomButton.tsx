import React, { Children } from "react";
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
  return (
    <TouchableRipple
      {...props}
      style={{
        backgroundColor: Colors.neutral800,
        borderRadius: size === "large" ? 6 : 50,
        width:
          size === "small"
            ? 180
            : size === "medium"
            ? 320
            : size === "large"
            ? 324
            : 361,
        height: size === "xlarge" ? 56 : 46,
        paddingHorizontal:
          size === "small"
            ? 10
            : size === "medium" || (left && right && size === "large")
            ? 16
            : size === "large"
            ? 100
            : 90,
        paddingVertical: size === "xlarge" ? 16 : 11,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: size === "medium" ? "space-between" : "center",
          width: "100%",
        }}
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
    </TouchableRipple>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
