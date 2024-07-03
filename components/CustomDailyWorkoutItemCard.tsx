import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { CardProps } from "react-native-paper";
import { Colors } from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "./Icon";

type Status = "active" | "current" | "completed";
interface Props extends CardProps {
  dayNumber: number;
  workoutDayLabel: string;
  workoutDayTimeRange: number[];
  exerciseCoverUrl: any;
  status: Status;
}

const CustomMealItemCard = ({
  dayNumber,
  workoutDayLabel,
  workoutDayTimeRange,
  exerciseCoverUrl,
  status,
  ...props
}: Props) => {
  return (
    <View
      style={[styles.card, status === "current" ? styles.current : null]}
      {...props}
    >
      <View style={styles.content}>
        <View style={styles.cardImageContainer}>
          <Image source={exerciseCoverUrl} style={styles.image} />
          <LinearGradient
            colors={[Colors.orange100, Colors.orange80, Colors.neutralGradient]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0, 0.31, 1]}
            style={styles.gradient}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.dayNumber}>{`Day ${dayNumber}`}</Text>
            <Text style={styles.workoutDayLabel}>{workoutDayLabel}</Text>
            <Text style={styles.workoutDayTimeRange}>
              {`${workoutDayTimeRange[0]} min / ${workoutDayTimeRange[1]} min`}
            </Text>
          </View>
          <Icon
            name={status === "completed" ? "checkmarkCircle" : "chevronRight"}
            width={44}
            height={44}
            fill={status === "completed" ? Colors.green100 : Colors.orange100}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomMealItemCard;

const styles = StyleSheet.create({
  card: {
    width: 375,
    height: 114,
    borderRadius: 0,
    padding: 4,
    overflow: "hidden",
  },
  current: {
    borderRadius: 10,
    backgroundColor: Colors.neutral800,
  },
  content: {
    flexDirection: "row",
  },
  cardImageContainer: {
    width: 123,
    height: 106,
    borderRadius: 20,
    marginRight: 16,
    position: "relative",
  },
  gradient: {
    width: 123,
    height: 106,
    zIndex: 1,
    borderRadius: 20,
    opacity: 0.2,
    position: "absolute",
  },
  image: {
    zIndex: 0,
    width: 123,
    height: 106,
    borderRadius: 20,
    position: "absolute",
  },
  detailsContainer: {
    flex: 1,
    marginRight: 2,
    marginVertical: 13,
    paddingVertical: 10,
    width: 228,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  dayNumber: {
    fontSize: 16,
    color: Colors.orange100,
  },
  workoutDayLabel: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.neutral350,
  },
  workoutDayTimeRange: {
    fontSize: 12,
    color: Colors.neutral600,
  },
});
