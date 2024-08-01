import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomProgramHeaderCard from "../../components/CustomProgramHeaderCard";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Exercise, WorkoutDayParams } from "../../utils/constants/types";
import { Colors } from "../../GlobalStyles";
import Icon from "../../components/Icon";
import { useDailyExercises } from "../../features/workoutPlan/useDailyExercises";
import { dailyExercisesIdsFromWorkoutDay } from "../../utils/helpers";

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
  const targetMuscles = dailyExercises?.flatMap(
    (exercise: Exercise) => exercise.targetMuscles
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
          <Icon name="time" width={44} height={44} fill={Colors.neutral350} />
          <Text style={styles.activityLabel}>
            {day.workoutTimeRange[1]} min / {day.workoutTimeRange[0]} min
          </Text>
        </View>
        <View style={styles.activityTargetContainer}>
          <Icon name="target" width={44} height={44} fill={Colors.neutral350} />
          <View style={styles.targetContainer}>
            {targetMuscles.map((muscle: string, index: number) => {
              const isLastItem = index === targetMuscles.length - 1;
              return (
                <View key={index} style={styles.muscleItem}>
                  <Text style={styles.activityLabel}>{muscle}</Text>
                  {!isLastItem && (
                    <Icon
                      name="dotSeparator"
                      width={44}
                      height={44}
                      fill={Colors.neutral350}
                      style={styles.dotSeparator}
                    />
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <Text style={styles.sectionLabel}>Exercises</Text>
      </View>
    </View>
  );
};

export default WorkoutDay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  activityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  activityTargetContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  targetContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  muscleItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: -2, // Adjusted margin for spacing
  },
  activityLabel: {
    fontSize: 16,
    marginLeft: 16,
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
  dotSeparator: {
    marginLeft: -8,
    marginRight: -20,
  },
});
