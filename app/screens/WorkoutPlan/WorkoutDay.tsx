import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CustomProgramHeaderCard from "../../components/CustomProgramHeaderCard";
import { RouteProp, useRoute } from "@react-navigation/native";
import { WorkoutDayParams } from "../../utils/constants/types";
import { Colors } from "../../GlobalStyles";
import Icon from "../../components/Icon";

import { useDailyExercises } from "../../features/workoutPlan/useDailyExercises";
import { dailyExercisesIdsFromWorkoutDay } from "../../utils/helpers";
import DurationLabel from "../../components/DurationLabel";
import TargetMusclesList from "../../components/TargetMusclesList";
import CustomExerciseItemCard from "../../components/CustomExerciseItemCard";
import CustomButton from "../../components/CustomButton";
import { BlurView } from "expo-blur";

type Props = {
  navigation: any;
};

type WorkoutDayRouteProp = RouteProp<{ params: WorkoutDayParams }, "params">;

const WorkoutDay = ({ navigation }: Props) => {
  const route = useRoute<WorkoutDayRouteProp>();
  const { day } = route.params;
  const dailyExercisesIDs = dailyExercisesIdsFromWorkoutDay(day);
  const { dailyExercises, error, isPending } =
    useDailyExercises(dailyExercisesIDs);

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
      <CustomProgramHeaderCard
        variant="workout"
        workoutWeekNumber={day?.workoutWeekNumber}
        workoutDayNumber={day?.workoutDayNumber}
        workoutDayName={day?.name}
        coverUrl={{ uri: day?.imageURL }}
        navigation={navigation}
      />
      <View style={styles.body}>
        <DurationLabel
          max={day.workoutTimeRange[1]}
          min={day.workoutTimeRange[0]}
        />
        <TargetMusclesList dailyExercises={dailyExercises} />
        <Text style={styles.sectionLabel}>Exercises</Text>
      </View>
      <FlatList
        data={dailyExercises}
        keyExtractor={(exercise) => exercise.id}
        renderItem={({ item, index }) => (
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
        style={styles.cardsContainer}
      />
      {/* <BlurView intensity={100} style={styles.buttonContainer} tint="dark"> */}
      <View style={styles.buttonContainer}>
        <CustomButton
          size="xlarge"
          left="playFilled"
          children="Start Workout"
        />
      </View>
      {/* </BlurView> */}
    </View>
  );
};

export default WorkoutDay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  body: {
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  sectionLabel: {
    fontSize: 20,
    lineHeight: 25,
    marginTop: 16,
    fontFamily: "SatoshiBold",
    color: Colors.neutral350,
  },
  cardsContainer: {
    marginTop: 16,
    paddingHorizontal: 8,
  },
  cardStyle: {
    marginBottom: 8,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    opacity: 0.9,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});
