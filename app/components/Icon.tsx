import React from "react";
import { icons } from "../utils/constants/icons";
import { SvgProps } from "react-native-svg";
import { TouchableRipple } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Colors } from "../GlobalStyles";

type Props = SvgProps & {
  name: keyof typeof icons;
};

const Icon = ({ name, ...props }: Props) => {
  const SvgIcon = icons[name];
  return SvgIcon ? (
    <TouchableRipple
      style={styles.ripple}
      onPress={props.onPress}
      rippleColor={Colors.neutralBackgroundChip}
    >
      <View style={styles.iconContainer}>
        <SvgIcon width={24} height={24} {...props} />
      </View>
    </TouchableRipple>
  ) : null;
};

const styles = StyleSheet.create({
  ripple: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Icon;
