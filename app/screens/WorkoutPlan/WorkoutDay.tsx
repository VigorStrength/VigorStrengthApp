import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomProgramHeaderCard from "../../components/CustomProgramHeaderCard";
import { RouteProp, useRoute } from "@react-navigation/native";
import { WorkoutDayParams } from "../../utils/constants/types";
import { Colors } from "../../GlobalStyles";
import CustomButton from "../../components/CustomButton";
import { BlurView } from "expo-blur";
import WarmUps from "./WorkoutDay/WarmUps";
import ExerciseActivity from "../../components/ExerciseActivity";
import CoolDowns from "./WorkoutDay/CoolDowns";
import { ScrollView } from "moti";
import StandAloneWorkout from "./WorkoutDay/StandAloneWorkout";
import SuperSet from "./WorkoutDay/SuperSet";

type Props = {
  navigation: any;
};

type WorkoutDayRouteProp = RouteProp<{ params: WorkoutDayParams }, "params">;

const WorkoutDay = ({ navigation }: Props) => {
  const route = useRoute<WorkoutDayRouteProp>();
  const { day } = route.params;
  const warmUps = day?.warmUps;
  const workouts = day?.workouts;
  const coolDowns = day?.coolDowns;

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
      {/* Might want to change it into a context if props drilling gets too deep*/}
      <ExerciseActivity
        min={day.workoutTimeRange[0]}
        max={day.workoutTimeRange[1]}
        // dailyExercises={dailyExercises}
      />
      <Text style={styles.sectionLabel}>What you'll do</Text>
      <ScrollView>
        <WarmUps warmUps={warmUps} navigation={navigation} />
        {workouts.map((workoutItem) =>
          workoutItem?.itemType === "exercise" ? (
            <StandAloneWorkout
              key={workoutItem?.itemId}
              workoutItemId={workoutItem?.itemId}
              navigation={navigation}
            />
          ) : (
            <SuperSet
              key={workoutItem?.itemId}
              workoutItemId={workoutItem?.itemId}
              navigation={navigation}
            />
          )
        )}
        <CoolDowns coolDowns={coolDowns} navigation={navigation} />
      </ScrollView>
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
    marginBottom: 32,
    paddingLeft: 16, // Might change it to 24
    fontFamily: "SatoshiBold",
    color: Colors.neutral350,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    opacity: 0.9,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});
