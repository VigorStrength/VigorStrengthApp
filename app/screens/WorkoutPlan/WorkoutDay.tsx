import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CustomProgramHeaderCard from "../../components/CustomProgramHeaderCard";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Exercise, WorkoutDayParams } from "../../utils/constants/types";
import { Colors } from "../../GlobalStyles";
import Icon from "../../components/Icon";
import { useDailyExercises } from "../../features/workoutPlan/useDailyExercises";
import { dailyExercisesIdsFromWorkoutDay } from "../../utils/helpers";
import CustomExerciseItemCard from "../../components/CustomExerciseItemCard";
import { BlurView } from "expo-blur";
import CustomButton from "../../components/CustomButton";

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

  const capitalize = (str: string) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const targetMuscles = Array.from(
    new Set<string>(
      dailyExercises?.flatMap((exercise: Exercise) =>
        exercise.targetMuscles.map((muscle) => capitalize(muscle.toLowerCase()))
      )
    )
  );

  // Group muscles into rows of 3
  const groupedMuscles = targetMuscles?.reduce(
    (acc: string[][], muscle: string, index: number) => {
      if (index % 3 === 0) acc.push([muscle]);
      else acc[acc.length - 1].push(muscle);
      return acc;
    },
    []
  );

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
        <View style={styles.activityContainer}>
          <Icon name="time" width={32} height={32} fill={Colors.neutral350} />
          <Text style={styles.timeLabel}>
            {day.workoutTimeRange[1]} min / {day.workoutTimeRange[0]} min
          </Text>
        </View>
        {/* To be separated as a component*/}
        <View style={styles.targetContainer}>
          <Icon name="target" width={32} height={32} fill={Colors.neutral350} />
          <View style={styles.muscleContainer}>
            {groupedMuscles.map((muscleRow: string[], rowIndex: number) => (
              <View key={rowIndex} style={styles.muscleRow}>
                {muscleRow.map((muscle, index) => (
                  <View key={index} style={styles.muscleItem}>
                    <Text style={styles.targetMuscleLabel}>{muscle}</Text>
                    {index < muscleRow.length - 1 && (
                      <Icon
                        name="dotSeparator"
                        width={32}
                        height={32}
                        fill={Colors.neutral350}
                      />
                    )}
                    {muscleRow.length === 1 &&
                      rowIndex === groupedMuscles.length - 1 && (
                        <View style={styles.placeholder} />
                      )}
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
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
  activityContainer: {
    marginTop: 4,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  targetContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  muscleContainer: {
    marginLeft: 16,
  },
  muscleRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: -8,
  },
  muscleItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeLabel: {
    fontSize: 16,
    marginLeft: 16,
    color: Colors.neutral350,
    fontFamily: "SatoshiBold",
  },
  targetMuscleLabel: {
    fontSize: 16,
    color: Colors.neutral350,
    fontFamily: "SatoshiBold",
  },
  sectionLabel: {
    fontSize: 20,
    lineHeight: 25,
    marginTop: 16,
    fontFamily: "SatoshiBold",
    color: Colors.neutral350,
  },
  placeholder: {
    flex: 1,
    minHeight: 32, // Same height as the dotSeparator icon to maintain spacing
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
