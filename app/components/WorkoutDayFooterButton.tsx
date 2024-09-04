import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { extractExerciseIds } from "../utils/helpers";
import { useDailySupersets } from "../features/workoutPlan/useDailySupersets";
import { StandardWorkoutCircuit } from "../utils/constants/types";
import { useDailyExercises } from "../features/workoutPlan/useDailyExercises";
import { useWorkoutDayData } from "../features/workoutPlan/useWorkoutDayData";

type Props = {
  day: any;
  navigation: any;
};

const WorkoutDayFooterButton = ({ navigation, day: workoutDay }: Props) => {
  const {
    dailyExercises: workouts,
    error,
    isPending,
  } = useWorkoutDayData(workoutDay);

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
