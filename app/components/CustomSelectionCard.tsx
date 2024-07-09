import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { Colors } from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "./Icon";

type Variant = "weeklySelection" | "sportSpecificSelection";
type Props = {
  variant: Variant;
  workoutTime: number;
  coverUrl: any;
  workoutName: string;
  style?: any;
};

const CustomSelectionCard = ({
  variant = "weeklySelection",
  coverUrl,
  workoutTime,
  workoutName,
  style,
  ...props
}: Props) => {
  const isWeekly = variant === "weeklySelection";
  return (
    <View style={style} {...props}>
      <View
        style={[
          ,
          styles.container,
          isWeekly
            ? styles.weeklySelectionSize
            : styles.sportSpecificSelectionSize,
        ]}
      >
        <Image
          source={coverUrl}
          style={[
            styles.image,
            isWeekly
              ? styles.weeklySelectionSize
              : styles.sportSpecificSelectionSize,
          ]}
        />
        <LinearGradient
          colors={[Colors.neutralGradient, Colors.orange80, Colors.orange100]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 0.71, 1]}
          style={styles.gradient}
        />
      </View>
      <View style={styles.content}>
        <Text
          style={[styles.label, { marginLeft: -4 }]}
        >{`${workoutTime} min`}</Text>
        <Icon
          name="dotSeparator"
          width={32}
          height={32}
          fill={Colors.orange60}
        />
        <Text style={[styles.label, { marginRight: -4 }]}>{workoutName}</Text>
      </View>
    </View>
  );
};

export default CustomSelectionCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  weeklySelectionSize: {
    width: 196,
    height: 152,
  },
  sportSpecificSelectionSize: {
    width: 241,
    height: 469,
  },
  image: {
    position: "absolute",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 10,
    marginLeft: 6,
  },
  label: {
    fontSize: 14,
    color: Colors.orange60,
  },
});
