import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "../../GlobalStyles";
import CustomDailyWorkoutItemCard from "../../components/CustomDailyWorkoutItemCard";
type Props = {};

const WorkoutWeek = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.completedContainer}>
        <Text style={styles.completedLabel}>completed</Text>
        <Text style={styles.workoutDayCompletedLabel}>1 of 3</Text>
      </View>
      {/* Must be a flatlist later with data coming from workoutweek state */}
      <ScrollView style={styles.cardsContainer}>
        <View style={styles.cardStyle}>
          <CustomDailyWorkoutItemCard
            dayNumber={1}
            workoutDayLabel="Upper Body Conjugate"
            workoutDayTimeRange={[90, 65]}
            exerciseCoverUrl={require("../../../assets/alora-griffiths-V3GnMeRhnjk-unsplash.jpg")}
            status="completed"
            children=""
          />
        </View>
        <View style={styles.cardStyle}>
          <CustomDailyWorkoutItemCard
            dayNumber={2}
            workoutDayLabel="Lower Body Conjugate"
            workoutDayTimeRange={[90, 65]}
            exerciseCoverUrl={require("../../../assets/alora-griffiths-V3GnMeRhnjk-unsplash.jpg")}
            status="current"
            children=""
          />
        </View>
        <View style={styles.cardStyle}>
          <CustomDailyWorkoutItemCard
            dayNumber={3}
            workoutDayLabel="Upper Body Conjugate"
            workoutDayTimeRange={[90, 65]}
            exerciseCoverUrl={require("../../../assets/alora-griffiths-V3GnMeRhnjk-unsplash.jpg")}
            status="active"
            children=""
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default WorkoutWeek;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
  },
  workoutDayContainer: {
    paddingHorizontal: 9,
  },
  completedContainer: {
    paddingHorizontal: 16,
  },
  completedLabel: {
    fontSize: 14,
    color: Colors.neutral600,
    textTransform: "uppercase",
    fontFamily: "IntegralCF",
    marginBottom: 4,
  },
  workoutDayCompletedLabel: {
    fontSize: 20,
    fontFamily: "SatoshiBold",
    color: Colors.orange100,
  },
  cardsContainer: {
    marginTop: 32,
    paddingHorizontal: 9,
    // height:
    // height: "100%",
  },
  cardStyle: {
    marginBottom: 8,
  },
});
