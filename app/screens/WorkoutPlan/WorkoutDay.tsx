import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomProgramHeaderCard from "../../components/CustomProgramHeaderCard";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Exercise, WorkoutDayParams } from "../../utils/constants/types";
import { Colors } from "../../GlobalStyles";
import Icon from "../../components/Icon";
import { useDailyExercises } from "../../features/workoutPlan/useDailyExercises";
import { dailyExercisesIdsFromWorkoutDay } from "../../utils/helpers";

type Props = {
  navigation: any;
};

type WorkoutDayRouteProp = RouteProp<{ params: WorkoutDayParams }, "params">;

const WorkoutDay = ({ navigation }: Props) => {
  const route = useRoute<WorkoutDayRouteProp>();
  const { day } = route.params;
  const dailyExercisesIDs = dailyExercisesIdsFromWorkoutDay(day);
  const { dailyExercises, error, isPending } =
    useDailyExercises(dailyExercisesIDs);

  const capitalize = (str: string) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const targetMuscles = Array.from(
    new Set<string>(
      dailyExercises?.flatMap((exercise: Exercise) =>
        exercise.targetMuscles.map((muscle) => capitalize(muscle.toLowerCase()))
      )
    )
  );

  // Group muscles into rows of 3
  const groupedMuscles = targetMuscles?.reduce(
    (acc: string[][], muscle: string, index: number) => {
      if (index % 3 === 0) acc.push([muscle]);
      else acc[acc.length - 1].push(muscle);
      return acc;
    },
    []
  );

  console.log({ groupedMuscles });

  // To replace with Skeleton later
  if (isPending) {
    return <Text>Loading...</Text>;
  }

  // To replace with Error component later
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <CustomProgramHeaderCard
        variant="workout"
        workoutWeekNumber={day?.workoutWeekNumber}
        workoutDayNumber={day?.workoutDayNumber}
        workoutDayName={day?.name}
        coverUrl={{ uri: day?.imageURL }}
        navigation={navigation}
      />
      <View style={styles.body}>
        <View style={styles.activityContainer}>
          <Icon name="time" width={44} height={44} fill={Colors.neutral350} />
          <Text style={styles.timeLabel}>
            {day.workoutTimeRange[1]} min / {day.workoutTimeRange[0]} min
          </Text>
        </View>
        {/* To be separated as a component*/}
        <View style={styles.targetContainer}>
          <Icon name="target" width={44} height={44} fill={Colors.neutral350} />
          <View style={styles.muscleContainer}>
            {groupedMuscles.map((muscleRow: string[], rowIndex: number) => (
              <View key={rowIndex} style={styles.muscleRow}>
                {muscleRow.map((muscle, index) => (
                  <View key={index} style={styles.muscleItem}>
                    <Text style={styles.targetMuscleLabel}>{muscle}</Text>
                    {index < muscleRow.length - 1 && (
                      <Icon
                        name="dotSeparator"
                        width={44}
                        height={44}
                        fill={Colors.neutral350}
                        style={styles.dotSeparator}
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
        <Text style={styles.sectionLabel}>Exercises</Text>
      </View>
    </View>
  );
};

export default WorkoutDay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  activityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
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
    marginBottom: -24,
  },
  muscleItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeLabel: {
    fontSize: 16,
    marginLeft: 16,
    color: Colors.neutral350,
    fontFamily: "SatoshiBold",
  },
  targetMuscleLabel: {
    fontSize: 16,
    color: Colors.neutral350,
    fontFamily: "SatoshiBold",
  },
  sectionLabel: {
    fontSize: 20,
    lineHeight: 25,
    marginTop: 16,
    fontFamily: "SatoshiBold",
    color: Colors.neutral350,
  },
  dotSeparator: {
    marginLeft: -12,
    marginRight: -12,
  },
  placeholder: {
    flex: 1,
    minHeight: 44, // Same height as the dotSeparator icon to maintain spacing
  },
});
