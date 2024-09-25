import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import {
  StandardWorkoutCircuit,
  Workout,
} from "../../../utils/constants/types";
import { useDailyExercises } from "../../../features/workoutPlan/useDailyExercises";
import CustomExerciseItemCard from "../../../components/CustomExerciseItemCard";
import CustomDivider from "../../../components/CustomDivider";
// import { FlatList } from "react-native-gesture-handler";

type Props = {
  navigation: any;
  coolDowns: StandardWorkoutCircuit[];
};

const CoolDowns = ({ coolDowns, navigation }: Props) => {
  const coolDownIDs = coolDowns?.flatMap((circuit) => circuit.exerciseIds);

  const {
    dailyExercises: coolDownExercises,
    error,
    isPending,
  } = useDailyExercises(coolDownIDs);

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
      <CustomDivider leftLabel="Cool Down" style={styles.dividerStyle} />
      {coolDownExercises.map((exercise: Workout) => (
        <View key={exercise.id} style={styles.cardStyle}>
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

export default CoolDowns;

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
