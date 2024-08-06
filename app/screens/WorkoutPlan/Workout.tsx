import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomTopBar from "../../components/CustomTopBar";
import { useRoute } from "@react-navigation/native";
import WorkoutPlayer from "./WorkoutPlayer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Props = {
  navigation: any;
};

type RouteParams = {
  workout: any;
};

const Workout = ({ navigation }: Props) => {
  const route = useRoute();
  const { workout } = route.params as RouteParams;

  return (
    <GestureHandlerRootView style={styles.container}>
      <CustomTopBar variant="workout" navigation={navigation} />
      <WorkoutPlayer workout={workout} />
    </GestureHandlerRootView>
  );
};

export default Workout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
