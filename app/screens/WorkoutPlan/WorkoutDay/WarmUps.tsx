import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  StandardWorkoutCircuit,
  Workout,
} from "../../../utils/constants/types";
import { useDailyExercises } from "../../../features/workoutPlan/useDailyExercises";
import CustomDivider from "../../../components/CustomDivider";
import { formatSecondsToMinutes } from "../../../utils/helpers";
import CustomExerciseItemCard from "../../../components/CustomExerciseItemCard";

type Props = {
  navigation: any;
  warmUps: StandardWorkoutCircuit[];
};

const WarmUps = ({ warmUps, navigation }: Props) => {
  const warmUpIDs = warmUps?.flatMap((circuit) => circuit.exerciseIds);
  const {
    dailyExercises: warmUpExercises,
    error,
    isPending,
  } = useDailyExercises(warmUpIDs);

  const handlePress = (exercise: Workout) => {
    navigation.navigate("Workout", { workout: exercise });
  };

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
      <CustomDivider leftLabel="Warm Up" style={styles.dividerStyle} />
      {warmUpExercises.map((exercise: Workout) => (
        <View key={exercise.id}>
          <CustomExerciseItemCard
            exerciseName={exercise.name}
            exerciseTime={exercise.time}
            exerciseReps={exercise.proposedLog?.proposedReps}
            exerciseCoverUrl={{ uri: exercise.coverURL }}
            onPress={() => handlePress(exercise)}
            status="active"
            children=""
          />
        </View>
      ))}
    </View>
  );
};

export default WarmUps;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  cardStyle: {
    width: "100%",
  },
  dividerStyle: {
    width: "100%",
    paddingHorizontal: 16,
  },
});
