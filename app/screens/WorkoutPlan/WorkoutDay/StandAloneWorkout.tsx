import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomExerciseItemCard from "../../../components/CustomExerciseItemCard";
import { useDailyExercises } from "../../../features/workoutPlan/useDailyExercises";
import { Workout } from "../../../utils/constants/types";
import CustomDivider from "../../../components/CustomDivider";

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

  const handlePress = (exercise: Workout) => {
    navigation.navigate("Workout", { workout: exercise });
  };

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
    <View style={styles.container}>
      <CustomDivider
        leftLabel="Stand alone Exercise"
        style={styles.dividerStyle}
      />
      <CustomExerciseItemCard
        exerciseName={workout[0].name}
        exerciseTime={workout[0].time}
        exerciseReps={workout[0].proposedLog?.proposedReps}
        exerciseCoverUrl={{ uri: workout[0].coverURL }}
        onPress={() => handlePress(workout[0])}
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
