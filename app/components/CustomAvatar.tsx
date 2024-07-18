import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import Icon from "./Icon";
import { Colors } from "../GlobalStyles";

type Size = "small" | "medium" | "large" | "xlarge";
type Props = {
  size?: Size;
  avatarUrl?: any;
};

const CustomAvatar = ({ size = "small", avatarUrl, ...props }: Props) => {
  const sizeStyle =
    size === "small"
      ? styles.small
      : size === "medium"
      ? styles.medium
      : size === "large"
      ? styles.large
      : styles.xlarge;

  return (
    <View style={sizeStyle}>
      {avatarUrl ? (
        <Image source={avatarUrl} style={[styles.avatarContainer, sizeStyle]} />
      ) : (
        <Icon
          name="profile"
          width={sizeStyle.width}
          height={sizeStyle.height}
          fill={Colors.neutral600}
        />
      )}
    </View>
  );
};

export default CustomAvatar;

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 100,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 48,
    height: 48,
  },
  large: {
    width: 64,
    height: 64,
  },
  xlarge: {
    width: 96,
    height: 96,
  },
  // image: {
  //   borderRadius: 100,
  //   width: "100%",
  //   height: "100%",
  // },
});
