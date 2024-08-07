import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DurationLabel from "./DurationLabel";
import TargetMusclesList from "./TargetMusclesList";

type Props = {
  min: number;
  max: number;
  dailyExercises: any;
};

const ExerciseActivity = ({ min, max, dailyExercises }: Props) => {
  return (
    <View style={styles.container}>
      <DurationLabel max={max} min={min} />
      <TargetMusclesList dailyExercises={dailyExercises} />
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
