import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomExerciseItemCard from "../../../components/CustomExerciseItemCard";
import { useDailyExercises } from "../../../features/workoutPlan/useDailyExercises";

type Props = {
  key: string;
  navigation: any;
  workoutItemId: string;
};

const StandAloneWorkout = ({ navigation, workoutItemId }: Props) => {
  const {
    dailyExercises: workout,
    error,
    isPending,
  } = useDailyExercises(workoutItemId);
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
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View>
      <CustomExerciseItemCard
        exerciseName={workout[0].name}
        exerciseTime={workout[0].time}
        exerciseReps={workout[0].proposedLog?.proposedReps}
        exerciseCoverUrl={{ uri: workout[0].coverURL }}
        onPress={() => navigation.navigate("Workout", { workout })}
        status="active"
        children=""
      />
    </View>
  );
};

export default StandAloneWorkout;

const styles = StyleSheet.create({});
