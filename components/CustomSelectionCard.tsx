import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { Colors } from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "./Icon";

type variant = "weeklySelection" | "sportSpecificSelection";
type Props = {
  variant: variant;
  workoutTime: number;
  coverUrl: any;
  workoutName: string;
};

const CustomSelectionCard = ({
  variant = "weeklySelection",
  coverUrl,
  workoutTime,
  workoutName,
}: Props) => {
  return (
    <View>
      <View
        style={
          variant === "weeklySelection"
            ? styles.weeklySelectionContainer
            : styles.sportSpecificSelectionContainer
        }
      >
        <Image
          source={coverUrl}
          style={
            variant === "weeklySelection"
              ? styles.imageWeeklySelection
              : styles.imagesportSpecificSelection
          }
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
  weeklySelectionContainer: {
    width: 196,
    height: 152,
    borderRadius: 20,
  },
  sportSpecificSelectionContainer: {
    width: 241,
    height: 469,
    borderRadius: 20,
  },
  imageWeeklySelection: {
    width: 196,
    height: 152,
    borderRadius: 20,
  },
  imagesportSpecificSelection: {
    width: 241,
    height: 469,
    borderRadius: 20,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    opacity: 0.2,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 6,
  },
  label: {
    fontSize: 14,
    color: Colors.orange60,
  },
});
