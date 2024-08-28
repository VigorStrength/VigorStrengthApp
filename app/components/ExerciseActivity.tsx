import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DurationLabel from "./DurationLabel";
import TargetMusclesList from "./TargetMusclesList";
import {
  StandardWorkoutCircuit,
  StandardWorkoutItem,
} from "../utils/constants/types";
import { useDailySupersets } from "../features/workoutPlan/useDailySupersets";
import { useDailyExercises } from "../features/workoutPlan/useDailyExercises";
import { extractExerciseIds } from "../utils/helpers";

type Props = {
  min: number;
  max: number;
  workoutDay?: any;
};

const ExerciseActivity = ({ min, max, workoutDay }: Props) => {
  const {
    warmUpsExerciseIds,
    coolDownsExerciseIds,
    standAloneExerciseIds,
    dailySupersetIds,
  } = extractExerciseIds(workoutDay);
  const { dailySupersets, error, isPending } =
    useDailySupersets(dailySupersetIds);
  const supersetsExerciseIds =
    dailySupersets?.flatMap(
      (superset: StandardWorkoutCircuit) => superset?.exerciseIds
    ) || [];

  const dailyExercisesIds = [
    ...warmUpsExerciseIds,
    ...coolDownsExerciseIds,
    ...standAloneExerciseIds,
    ...supersetsExerciseIds,
  ];

  const {
    dailyExercises,
    error: exercisesError,
    isPending: exercisesPending,
  } = useDailyExercises(dailyExercisesIds);

  if (isPending || exercisesPending) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error || exercisesError) {
    return (
      <View>
        <Text>Error: {error?.message || exercisesError?.message}</Text>
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
