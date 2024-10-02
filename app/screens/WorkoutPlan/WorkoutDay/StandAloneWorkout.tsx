import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomExerciseItemCard from "../../../components/CustomExerciseItemCard";
import { useDailyExercises } from "../../../features/workoutPlan/useDailyExercises";
import { Workout } from "../../../utils/constants/types";
import CustomDivider from "../../../components/CustomDivider";
import { useDailyStandAloneWorkoutItem } from "../../../features/workoutPlan/useDailyStandAloneWorkoutItem";

type Props = {
  key: string;
  navigation: any;
  workoutItemId: string;
};

const StandAloneWorkout = ({ navigation, workoutItemId }: Props) => {
  const {
    dailyStandAloneWorkoutItem: standAloneWorkoutItem,
    error: standAloneWorkoutItemError,
    isPending: isStandAloneWorkoutItemPending,
  } = useDailyStandAloneWorkoutItem(workoutItemId);

  const standAloneWorkoutId: string = standAloneWorkoutItem?.exerciseId;
  const standAloneWorkoutLaps: number = standAloneWorkoutItem?.proposedLaps;

  // const {
  //   dailyExercise: workout,
  //   error: workoutError,
  //   isPending: isWorkoutPending,
  // } = useDailyExercises(standAloneWorkoutId);
  const {
    dailyExercises: exercises,
    error: exerciseError,
    isPending: isExercisePending,
  } = useDailyExercises(standAloneWorkoutId);

  const handlePress = (exercise: Workout) => {
    navigation.navigate("Workout", { workout: exercise });
  };

  if (isStandAloneWorkoutItemPending || exerciseError) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (standAloneWorkoutItemError || isExercisePending) {
    return (
      <View>
        <Text>
          Error: {standAloneWorkoutItemError?.message}
          {/* Error: {standAloneWorkoutItemError?.message || exerciseError?.message} */}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CustomDivider
        leftLabel="Stand Alone Exercise"
        rightLabel={`${standAloneWorkoutLaps} Laps`}
        style={styles.dividerStyle}
      />
      <CustomExerciseItemCard
        exerciseName={exercises[0]?.name}
        exerciseTime={exercises[0]?.time}
        exerciseReps={exercises[0]?.proposedLog?.proposedReps}
        exerciseCoverUrl={{ uri: exercises[0]?.coverURL }}
        // onPress={() => handlePress(workout[0])}
        status="active"
        children=""
      />
    </View>
  );
};

export default StandAloneWorkout;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  cardStyle: {
    marginBottom: 0,
  },
  dividerStyle: {
    width: "100%",
    paddingHorizontal: 16,
  },
});
