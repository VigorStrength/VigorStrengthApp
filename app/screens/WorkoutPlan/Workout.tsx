import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomTopBar from "../../components/CustomTopBar";
import { useRoute } from "@react-navigation/native";
import WorkoutPlayer from "./WorkoutPlayer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useActiveWorkoutStatus } from "../../features/workoutPlan/useActiveWorkoutStatus";

type Props = {
  navigation: any;
};

type RouteParams = {
  // workout: any;
  workouts: any;
};

const Workout = ({ navigation }: Props) => {
  const route = useRoute();
  const { workouts } = route.params as RouteParams;
  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);
  const workout = workouts?.[currentWorkoutIndex];
  const handlePreviousWorkout = () => {
    if (currentWorkoutIndex > 0) {
      setCurrentWorkoutIndex((prev) => prev - 1);
    }
  };

  const handleNextWorkout = () => {
    if (currentWorkoutIndex < workouts.length - 1) {
      setCurrentWorkoutIndex((prev) => prev + 1);
    }
  };

  // const { activeWorkoutStatus, error, isPending } = useActiveWorkoutStatus(
  //   workout?.id
  // );

  // console.log(typeof workout?.id);

  // if (isPending) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  // console.log({ activeWorkoutStatus });

  return (
    <GestureHandlerRootView style={styles.container}>
      <CustomTopBar variant="workout" navigation={navigation} />
      <WorkoutPlayer
        workout={workout}
        onNext={handleNextWorkout}
        onPrevious={handlePreviousWorkout}
      />
    </GestureHandlerRootView>
  );
};

export default Workout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
