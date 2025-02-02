import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  StandardWorkoutCircuit,
  Workout,
} from "../../../utils/constants/types";
import { useDailyExercises } from "../../../features/workoutPlan/useDailyExercises";
import CustomDivider from "../../../components/CustomDivider";
import CustomExerciseItemCard from "../../../components/CustomExerciseItemCard";
import { useDailySuperset } from "../../../features/workoutPlan/useDailySuperset";

type Props = {
  key: string;
  navigation: any;
  workoutItemId: string;
};

const SuperSet = ({ navigation, workoutItemId }: Props) => {
  const {
    dailySuperset: superset,
    error: supersetError,
    isPending: isSupersetPending,
  } = useDailySuperset(workoutItemId);

  const supersetExercisesIds = superset?.exerciseIds;
  const supersetLaps = superset?.proposedLaps;

  const {
    dailyExercises: supersetExercises,
    error: exercisesError,
    isPending: isExercisesPending,
  } = useDailyExercises(supersetExercisesIds);

  // const restTime = formatSecondsToMinutes(superset?.restTime);

  const lastIndex = (index: number) => index === supersetExercises.length - 1;

  const handlePress = (exercise: Workout) => {
    navigation.navigate("Workout", { workout: exercise });
  };

  if (isSupersetPending || isExercisesPending) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (supersetError || exercisesError) {
    return (
      <View>
        <Text>Error: {supersetError?.message || exercisesError?.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CustomDivider
        leftLabel="Super Set"
        rightLabel={`${supersetLaps} Laps`}
        style={styles.dividerStyle}
      />
      {supersetExercises?.map((exercise: Workout, index: number) => (
        <View
          key={exercise.id}
          style={lastIndex(index) ? styles.lastItemStyle : styles.cardStyle}
        >
          <CustomExerciseItemCard
            exerciseName={exercise?.name}
            exerciseTime={exercise?.time}
            exerciseReps={exercise?.proposedLog?.proposedReps}
            exerciseCoverUrl={{ uri: exercise?.coverURL }}
            // onPress={() => handlePress(exercise)}
            status="active"
            children=""
          />
        </View>
      ))}
    </View>
  );
};

export default SuperSet;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  cardStyle: {
    marginBottom: 8,
  },
  lastItemStyle: {
    marginBottom: 0,
  },
  dividerStyle: {
    width: "100%",
    paddingHorizontal: 16,
  },
});
