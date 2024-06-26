import { StyleSheet, View } from "react-native";
import React from "react";
import { icons } from "../constants/icons";
import { TouchableRipple, TouchableRippleProps } from "react-native-paper";
import { Colors } from "../GlobalStyles";
import Icon from "./Icon";

type Size = "small" | "large";
type IconName = keyof typeof icons;

interface Props extends TouchableRippleProps {
  size?: Size;
  iconName: IconName;
}

const CustomIconChip = ({
  size = "large",
  iconName,
  children,
  ...props
}: Props) => {
  const isSmall = size === "small";

  return (
    <TouchableRipple
      style={[styles.base, isSmall ? styles.small : styles.large]}
      {...props}
    >
      <View>
        <Icon
          name={iconName}
          width={isSmall ? 24 : 44}
          height={isSmall ? 24 : 44}
          fill={Colors.orange100}
        />
        {children as React.ReactNode}
      </View>
    </TouchableRipple>
  );
};

export default CustomIconChip;

const styles = StyleSheet.create({
  base: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: Colors.orange100,
    backgroundColor: Colors.neutral800,
  },
  small: {
    width: 24,
    height: 24,
  },
  large: {
    width: 44,
    height: 44,
  },
});
