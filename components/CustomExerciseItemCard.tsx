import React from "react";
import { StyleSheet, Image, View, Text } from "react-native"; // Add Text component
import { Card, CardProps } from "react-native-paper";
import { Colors } from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "./Icon";

type Status = "active" | "completed";
interface Props extends CardProps {
  exerciseName: string;
  exerciseTime: number;
  exerciseReps: number;
  exerciseCoverUrl: any;
  status: Status;
}

const CustomMealItemCard = ({
  exerciseName,
  exerciseTime,
  exerciseReps,
  exerciseCoverUrl,
  status,
  ...props
}: Props) => {
  return (
    <View style={styles.card} {...props}>
      <Card.Content style={styles.content}>
        <View style={styles.cardImageContainer}>
          <Image source={exerciseCoverUrl} style={styles.image} />
          <LinearGradient
            colors={[Colors.orange100, Colors.orange80, Colors.neutralGradient]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0, 0.24, 1]}
            style={styles.gradient}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.exerciseName}>{exerciseName}</Text>
          <View style={styles.exerciseDetails}>
            <Text style={styles.detailLabel1}>{`${exerciseTime}:00`}</Text>
            <Icon
              name="dotSeparator"
              width={32}
              height={32}
              fill={Colors.orange60}
            />
            <Text style={styles.detailLabel2}>{`${exerciseReps} reps`}</Text>
          </View>
        </View>
      </Card.Content>
    </View>
  );
};

export default CustomMealItemCard;

const styles = StyleSheet.create({
  card: {
    width: 393,
    height: 106,
    borderRadius: 0,
    overflow: "hidden",
  },
  content: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  cardImageContainer: {
    width: 123,
    height: 106,
    borderRadius: 20,
    marginRight: 39,
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
    height: "100%",
    paddingVertical: 20.5,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  exerciseName: {
    fontSize: 20,
    color: Colors.orange100,
  },
  exerciseDetails: {
    width: 112,
    flexDirection: "row",
    alignItems: "center",
    color: Colors.orange60,
  },
  detailLabel1: {
    fontSize: 16,
    fontFamily: "SatoshiBold",
    marginRight: -5,
    color: Colors.orange60,
  },
  detailLabel2: {
    fontSize: 16,
    fontFamily: "SatoshiBold",
    marginLeft: -5,
    color: Colors.orange60,
  },
});
