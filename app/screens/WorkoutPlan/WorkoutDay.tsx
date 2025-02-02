import { StyleSheet, Text, View } from "react-native";
import React, { ComponentType } from "react";
import CustomProgramHeaderCard from "../../components/CustomProgramHeaderCard";
import { RouteProp, useRoute } from "@react-navigation/native";
import { WorkoutDayParams, WorkoutItemType } from "../../utils/constants/types";
import { Colors } from "../../GlobalStyles";
import CustomButton from "../../components/CustomButton";
import { BlurView } from "expo-blur";
import WarmUps from "./WorkoutDay/WarmUps";
import ExerciseActivity from "../../components/ExerciseActivity";
import CoolDowns from "./WorkoutDay/CoolDowns";
import { ScrollView } from "moti";
import StandAloneWorkout from "./WorkoutDay/StandAloneWorkout";
import SuperSet from "./WorkoutDay/SuperSet";
import WorkoutDayFooterButton from "../../components/WorkoutDayFooterButton";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import StandardSet from "./WorkoutDay/StandardSet";

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
  const scrollY = useSharedValue(0);

  const workoutComponents = {
    standalone: StandAloneWorkout,
    set: StandardSet,
    superset: SuperSet,
  };

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <View style={styles.container}>
      <CustomProgramHeaderCard
        variant="workout"
        workoutWeekNumber={day?.workoutWeekNumber}
        workoutDayNumber={day?.workoutDayNumber}
        workoutDayName={day?.name}
        coverUrl={{ uri: day?.imageURL }}
        navigation={navigation}
        scrollY={scrollY}
      />
      {/* Might want to change it into a context if props drilling gets too deep*/}
      <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
        <ExerciseActivity
          min={day.workoutTimeRange[0]}
          max={day.workoutTimeRange[1]}
          workoutDay={day}
        />
        <Text style={styles.sectionLabel}>What you'll do</Text>

        <WarmUps warmUps={warmUps} navigation={navigation} />
        {workouts.map((workoutItem) => {
          const WorkoutComponent =
            workoutComponents[
              (workoutItem?.itemType as WorkoutItemType) ?? "standalone"
            ];
          return (
            <WorkoutComponent
              key={workoutItem?.itemId}
              navigation={navigation}
              workoutItemId={workoutItem?.itemId}
            />
          );
        })}
        <CoolDowns coolDowns={coolDowns} navigation={navigation} />
      </Animated.ScrollView>

      {/* <BlurView intensity={100} style={styles.buttonContainer} tint="dark"> */}
      <WorkoutDayFooterButton navigation={navigation} day={day} />
      {/* </BlurView> */}
    </View>
  );
};

export default WorkoutDay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  // buttonContainer: {
  //   position: "absolute",
  //   bottom: 0,
  //   opacity: 0.9,
  //   paddingVertical: 20,
  //   paddingHorizontal: 16,
  // },
});
