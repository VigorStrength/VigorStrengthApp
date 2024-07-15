import { StyleSheet, Text } from "react-native";
import React, { ReactNode } from "react";
import { BlurView } from "expo-blur";
import { icons } from "../utils/constants/icons";
import Icon from "./Icon";
import { Colors } from "../GlobalStyles";
import LogoText from "./LogoText";

type IconName = keyof typeof icons;
type Props = {
  label?: string | ReactNode;
  navigation?: any;
  iconName?: IconName;
  state?: any;
};

const CustomTopBar = ({ state, navigation, iconName, label }: Props) => {
  return (
    <BlurView intensity={40} style={styles.topBar} tint="dark">
      {label && typeof label === "string" ? (
        <Text style={styles.logoLabel}>{label}</Text>
      ) : (
        <LogoText size={40} variant="medium" />
      )}
      {iconName && (
        <Icon
          onPress={() => navigation.navigate("Welcome")}
          name={iconName}
          width={40}
          height={40}
          fill={Colors.orange100}
        />
      )}
    </BlurView>
  );
};

/*
<View style={styles.topBar}>
      <BlurView intensity={40} style={StyleSheet.absoluteFill} />
      <Text style={styles.logoLabel}>{label}</Text>
      {iconName && (
        <Icon
          onPress={() => navigation.navigate("Welcome")}
          name={iconName}
          width={44}
          height={44}
          fill={Colors.orange100}
        />
      )}
    </View>
 */

export default CustomTopBar;

const styles = StyleSheet.create({
  topBar: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 110,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 10,
    zIndex: 1,
  },
  logoLabel: {
    fontSize: 24,
    lineHeight: 25,
    color: Colors.orange100,
    fontFamily: "IntegralCF-Bold",
  },
});
