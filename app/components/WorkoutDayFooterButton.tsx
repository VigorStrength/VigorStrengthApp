import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { extractExerciseIds } from "../utils/helpers";
import { useDailySupersets } from "../features/workoutPlan/useDailySupersets";
import { StandardWorkoutCircuit } from "../utils/constants/types";
import { useDailyExercises } from "../features/workoutPlan/useDailyExercises";

type Props = {
  day: any;
  navigation: any;
};

const WorkoutDayFooterButton = ({ navigation, day: workoutDay }: Props) => {
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
    dailyExercises: workouts,
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

  const handleStartWorkout = () => {
    navigation.navigate("Workout", { workouts });
  };

  return (
    <View style={styles.buttonContainer}>
      <CustomButton
        size="xlarge"
        left="playFilled"
        children="Start Workout"
        onPress={handleStartWorkout}
      />
    </View>
  );
};

export default WorkoutDayFooterButton;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    opacity: 0.9,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});
