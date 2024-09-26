import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DurationLabel from "./DurationLabel";
import TargetMusclesList from "./TargetMusclesList";
import { useWorkoutDayData } from "../features/workoutPlan/useWorkoutDayData";

type Props = {
  min: number;
  max: number;
  workoutDay?: any;
};

const ExerciseActivity = ({ min, max, workoutDay }: Props) => {
  const { dailyExercises, error, isPending } = useWorkoutDayData(workoutDay);
  if (isPending) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error?.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DurationLabel max={max} min={min} />
      {dailyExercises && <TargetMusclesList dailyWorkouts={dailyExercises} />}
    </View>
  );
};

export default ExerciseActivity;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 16,
  },
});
