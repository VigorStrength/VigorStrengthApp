import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "../utils/constants/icons";
import { Searchbar, SearchbarProps } from "react-native-paper";
import { Colors } from "../GlobalStyles";
import Icon from "./Icon";

type Size = "small" | "large";
type IconName = keyof typeof icons;

interface CustomSearchBarProps extends SearchbarProps {
  size?: Size;
  iconName?: IconName;
}

const CustomSearchBar = ({
  size = "large",
  iconName,
  ...props
}: CustomSearchBarProps) => {
  const sizeStyle = size === "small" ? styles.small : styles.large;
  const traileringIcon =
    size === "large" && iconName
      ? () => <Icon name={iconName} fill={Colors.neutral350} />
      : undefined;

  return (
    <Searchbar
      placeholder="Search"
      icon={() => <Icon name="search" fill={Colors.neutral350} />}
      style={[styles.container, sizeStyle]}
      inputStyle={styles.inputStyle}
      theme={{
        colors: {
          onSurface: Colors.neutral350,
        },
      }}
      traileringIcon={traileringIcon}
      {...props}
    />
  );
};

export default CustomSearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral800,
    borderRadius: 50,
  },
  inputStyle: {
    fontFamily: "SatoshiBold",
    fontSize: 16,
    minHeight: 0,
  },
  small: {
    width: 111,
    height: 32,
  },
  large: {
    width: 361,
    height: 32,
  },
});
