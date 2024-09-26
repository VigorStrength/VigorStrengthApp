import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDailySet } from "../../../features/workoutPlan/useDailySet";
import { useDailyExercises } from "../../../features/workoutPlan/useDailyExercises";
import { Workout } from "../../../utils/constants/types";
import CustomDivider from "../../../components/CustomDivider";
import CustomExerciseItemCard from "../../../components/CustomExerciseItemCard";

type Props = {
  key: string;
  navigation: any;
  workoutItemId: string;
};

const StandardSet = ({ navigation, workoutItemId }: Props) => {
  const {
    dailySet: set,
    error: setError,
    isPending: isSetPending,
  } = useDailySet(workoutItemId);

  const setExercisesIds = set?.exerciseIds;

  const {
    dailyExercises: setExercises,
    error: exercisesError,
    isPending: isExercisesPending,
  } = useDailyExercises(setExercisesIds);

  const lastIndex = (index: number) => index === setExercises.length - 1;

  const handlePress = (exercise: Workout) => {
    navigation.navigate("Workout", { workout: exercise });
  };

  if (isSetPending || isExercisesPending) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (setError || exercisesError) {
    return (
      <View>
        <Text>Error: {setError?.message || exercisesError?.message}</Text>;
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CustomDivider leftLabel="Standard Set" style={styles.dividerStyle} />
      {setExercises?.map((exercise: Workout, index: number) => (
        <View
          key={exercise.id}
          style={[styles.cardStyle, lastIndex(index) && styles.lastItemStyle]}
        >
          <CustomExerciseItemCard
            exerciseName={exercise.name}
            exerciseTime={exercise.time}
            exerciseReps={exercise.proposedLog?.proposedReps}
            exerciseCoverUrl={{ uri: exercise.coverURL }}
            // onPress={() => handlePress(exercise)}
            status="active"
            children=""
          />
        </View>
      ))}
    </View>
  );
};

export default StandardSet;

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
