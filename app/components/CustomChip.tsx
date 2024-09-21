import React from "react";
import { StyleSheet, Text, View, ViewStyle, StyleProp } from "react-native";
import { icons } from "../utils/constants/icons";
import { TouchableRipple, TouchableRippleProps } from "react-native-paper";
import { Colors, FontSize } from "../GlobalStyles";
import Icon from "./Icon";

type IconName = keyof typeof icons;

interface Props extends TouchableRippleProps {
  left?: IconName;
  right?: IconName;
}

const CustomChip = ({ left, right, children, ...props }: Props) => {
  return (
    <TouchableRipple
      {...props}
      style={
        children
          ? styles.chip
          : ([
              styles.iconsChip,
              props.style ? props.style : [],
            ] as StyleProp<ViewStyle>)
      }
    >
      <View style={styles.content}>
        {left && (
          <Icon name={left} width={40} height={40} fill={Colors.orange100} />
        )}
        {children && (
          <Text style={styles.label}>{children as React.ReactNode}</Text>
        )}
        {right && (
          <Icon name={right} width={40} height={40} fill={Colors.orange100} />
        )}
      </View>
    </TouchableRipple>
  );
};

export default CustomChip;

const styles = StyleSheet.create({
  chip: {
    borderRadius: 50,
    padding: 4,
    width: 168,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.neutral800,
  },
  iconsChip: {
    padding: 4,
    width: 150,
    height: 44,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  label: {
    color: Colors.orange100,
    fontFamily: "SatoshiBold",
    fontSize: 16,
  },
});
