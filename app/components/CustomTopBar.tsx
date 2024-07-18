import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { BlurView } from "expo-blur";
import { icons } from "../utils/constants/icons";
import Icon from "./Icon";
import { Colors } from "../GlobalStyles";
import LogoText from "./LogoText";

type IconName = keyof typeof icons;
type Variant = "mainPage" | "Plan" | "workoutDay" | "exercise" | "message";
type Props = {
  variant?: Variant;
  label?: string | ReactNode;
  navigation?: any;
  iconName?: IconName;
  state?: any;
  left?: IconName;
  right?: IconName;
};

const CustomTopBar = ({
  state,
  variant = "mainPage",
  navigation,
  iconName,
  label,
}: Props) => {
  const renderLabel = () => {
    if (typeof label === "string") {
      return <Text style={styles.logoLabel}>{label}</Text>;
    } else if (typeof label === "function") {
      const Component = label as React.ComponentType<any>;
      return <Component />;
    } else if (React.isValidElement(label)) {
      return label;
    } else {
      return <LogoText size={40} variant="medium" />;
    }
  };

  return (
    <BlurView
      intensity={100}
      style={[styles.topBar, variant === "message" && styles.topBarMessage]}
      tint="dark"
    >
      {variant === "mainPage" && (
        <>
          {renderLabel()}
          {iconName && (
            <Icon
              onPress={() => navigation.navigate("Welcome")}
              name={iconName}
              width={40}
              height={40}
              fill={Colors.orange100}
            />
          )}
        </>
      )}
      {variant === "Plan" && (
        <View style={styles.content}>
          <Icon
            name="chevronLeft"
            width={40}
            height={40}
            fill={Colors.orange100}
            onPress={() => navigation.goBack()}
          />
          {renderLabel()}
          <Icon
            name="moreHorizontal"
            width={40}
            height={40}
            fill={Colors.orange100}
          />
        </View>
      )}
      {variant === "message" && (
        <View style={styles.content}>
          <Icon
            name="chevronLeft"
            width={40}
            height={40}
            fill={Colors.orange100}
            onPress={() => navigation.goBack()}
          />
          {renderLabel()}
          <Icon
            name="moreHorizontal"
            width={40}
            height={40}
            fill={Colors.orange100}
          />
        </View>
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
  topBarMessage: {
    height: 120,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoLabel: {
    fontSize: 24,
    lineHeight: 25,
    color: Colors.orange100,
    fontFamily: "IntegralCF-Bold",
  },
  planLabel: {
    fontSize: 24,
    lineHeight: 25,
    color: Colors.orange100,
    fontFamily: "SatoshiBold",
  },
});
