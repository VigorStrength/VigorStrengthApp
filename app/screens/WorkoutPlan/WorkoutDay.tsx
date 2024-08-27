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

type Props = {
  navigation: any;
};

type WorkoutDayRouteProp = RouteProp<{ params: WorkoutDayParams }, "params">;

const WorkoutDay = ({ navigation }: Props) => {
  const route = useRoute<WorkoutDayRouteProp>();
  const { day } = route.params;
  const warmUps = day?.warmUps;
  const coolDowns = day?.coolDowns;

  console.log({ warmUps });
  console.log({ coolDowns });

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
      <Text style={styles.sectionLabel}>Exercises</Text>
      <WarmUps warmUps={warmUps} navigation={navigation} />
      <CoolDowns coolDowns={coolDowns} navigation={navigation} />
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
    paddingLeft: 16, // Might change it to 24
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
