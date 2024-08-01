import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomProgramHeaderCard from "../../components/CustomProgramHeaderCard";
import { RouteProp, useRoute } from "@react-navigation/native";
import { WorkoutDayParams } from "../../utils/constants/types";
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

  // To replace with Skeleton late
  if (isPending) {
    return <Text>Loading...</Text>;
  }

  // To replace with Error component later
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  console.log(dailyExercises);

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
        <View style={styles.activityContainer}>
          <Icon name="target" width={44} height={44} fill={Colors.neutral350} />
          {/* <Text style={styles.activityLabel}>
            {Math.ceil(day.workoutTimeRange[1] / 60)} min /{" "}
            {Math.ceil(day.workoutTimeRange[0] / 60)} min
          </Text> */}
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
});
