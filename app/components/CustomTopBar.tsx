import { StyleSheet, Text } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { icons } from "../utils/constants/icons";
import Icon from "./Icon";
import { Colors } from "../GlobalStyles";

type IconName = keyof typeof icons;
type Props = {
  navigation: any;
  barLabel: string;
  iconName?: IconName;
  state?: any;
};

const CustomTopBar = ({
  state,
  navigation,
  iconName = "menu",
  barLabel = "Logo",
}: Props) => {
  return (
    <BlurView intensity={40} style={styles.topBar} tint="dark">
      <Text style={styles.logoLabel}>{barLabel}</Text>
      {iconName && (
        <Icon
          onPress={() => navigation.navigate("Welcome")}
          name={iconName}
          width={44}
          height={44}
          fill={Colors.orange100}
        />
      )}
    </BlurView>
  );
};

/*
<View style={styles.topBar}>
      <BlurView intensity={40} style={StyleSheet.absoluteFill} />
      <Text style={styles.logoLabel}>{barLabel}</Text>
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
    height: 96,
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
