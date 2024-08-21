import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Icon from "./Icon";
import { Colors } from "../GlobalStyles";
import { Workout } from "../utils/constants/types";
import { capitalize, setToArray } from "../utils/helpers";

type Props = {
  dailyWorkouts: any;
};

const TargetMusclesList = ({ dailyWorkouts }: Props) => {
  const targetMuscles = setToArray(
    new Set<string>(
      dailyWorkouts?.flatMap((exercise: Workout) =>
        exercise.targetMuscles.map((muscle) => capitalize(muscle.toLowerCase()))
      )
    )
  );

  const groupedMuscles = targetMuscles?.reduce(
    (acc: string[][], muscle: string, index: number) => {
      if (index % 3 === 0) acc.push([muscle]);
      else acc[acc.length - 1].push(muscle);
      return acc;
    },
    []
  );

  return (
    <View style={styles.targetContainer}>
      <Icon name="target" width={32} height={32} fill={Colors.neutral350} />
      <View style={styles.muscleContainer}>
        {groupedMuscles.map((muscleRow: string[], rowIndex: number) => (
          <View key={rowIndex} style={styles.muscleRow}>
            {muscleRow.map((muscle, index) => (
              <View key={index} style={styles.muscleItem}>
                <Text style={styles.targetMuscleLabel}>{muscle}</Text>
                {index < muscleRow.length - 1 && (
                  <Icon
                    name="dotSeparator"
                    width={32}
                    height={32}
                    fill={Colors.neutral350}
                  />
                )}
                {muscleRow.length === 1 &&
                  rowIndex === groupedMuscles.length - 1 && (
                    <View style={styles.placeholder} />
                  )}
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default TargetMusclesList;

const styles = StyleSheet.create({
  targetContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  muscleContainer: {
    marginLeft: 16,
  },
  muscleRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: -8,
  },
  muscleItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  targetMuscleLabel: {
    fontSize: 16,
    color: Colors.neutral350,
    fontFamily: "SatoshiBold",
  },
  placeholder: {
    flex: 1,
    minHeight: 32, // Same height as the dotSeparator icon to maintain spacing
  },
});
