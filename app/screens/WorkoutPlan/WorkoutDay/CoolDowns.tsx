import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { StandardWorkoutCircuit } from "../../../utils/constants/types";
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

  const renderCoolDowns = ({ item }: any) => (
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
  );

  return (
    <View style={styles.container}>
      <CustomDivider leftLabel="Cool Down" style={styles.dividerStyle} />
      <FlatList
        data={coolDownExercises}
        keyExtractor={(exercise) => exercise.id}
        renderItem={renderCoolDowns}
      />
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
