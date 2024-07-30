import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomProgramHeaderCard from "../../components/CustomProgramHeaderCard";

type Props = {
  navigation: any;
};

const WorkoutDay = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <CustomProgramHeaderCard
        variant="workout"
        workoutWeekNumber={1}
        workoutDayNumber={1}
        workoutDayName="Day 1"
        coverUrl={require("../../../assets/sushil-ghimire-5UbIqV58CW8-unsplash.jpg")}
        navigation={navigation}
      />
    </View>
  );
};

export default WorkoutDay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
