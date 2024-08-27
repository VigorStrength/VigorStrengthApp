import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { StandardWorkoutCircuit } from "../../../utils/constants/types";
import { useDailyExercises } from "../../../features/workoutPlan/useDailyExercises";
import CustomDivider from "../../../components/CustomDivider";
import { formatSecondsToMinutes } from "../../../utils/helpers";
// import { FlatList } from "react-native-gesture-handler";
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

  const restTime = formatSecondsToMinutes(warmUps[0]?.restTime);

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
      <FlatList
        data={warmUpExercises}
        keyExtractor={(exercise) => exercise.id}
        renderItem={({ item }) => (
          <View style={styles.cardStyle}>
            <CustomExerciseItemCard
              exerciseName={item.name}
              exerciseTime={item.time}
              exerciseReps={item.proposedLog?.proposedReps}
              exerciseCoverUrl={{ uri: item.coverURL }}
              onPress={() => navigation.navigate("Workout", { workout: item })}
              status="active"
              children=""
            />
          </View>
        )}
      />
      <CustomDivider
        leftLabel="Rest"
        rightLabel={restTime.toString()}
        style={styles.dividerStyle}
      />
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
