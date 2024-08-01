import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Colors } from "../../GlobalStyles";
import CustomDailyWorkoutItemCard from "../../components/CustomDailyWorkoutItemCard";

type Props = {
  week: any;
  navigation: any;
};

const WorkoutWeek = ({ week, navigation }: Props) => {
  // Supposed to get this through handling
  // workout days statuses
  // const completedDays = week.days.filter(
  //   (day: any) => day.status === "completed"
  // );
  const handleOnpress = (day: any, workoutDayNumber: number) => {
    const workoutWeekNumber = week.weekNumber;
    const workoutDay = {
      ...day,
      workoutDayNumber,
      workoutWeekNumber,
      workoutTimeRange: [
        Math.ceil(day.workoutTimeRange[0] / 60),
        Math.ceil(day.workoutTimeRange[1] / 60),
      ],
    };
    navigation.navigate("Workout Day", { day: workoutDay });
  };

  return (
    <View style={styles.container}>
      <View style={styles.completedContainer}>
        <Text style={styles.completedLabel}>completed</Text>
        <Text style={styles.workoutDayCompletedLabel}>
          0 of {week.days.length}
        </Text>
      </View>
      <FlatList
        data={week?.days}
        keyExtractor={(day) => day.id}
        renderItem={({ item, index }) => (
          <View style={styles.cardStyle}>
            <CustomDailyWorkoutItemCard
              dayNumber={index + 1}
              workoutDayLabel={item.name}
              workoutDayTimeRange={[
                Math.ceil(item.workoutTimeRange[0] / 60),
                Math.ceil(item.workoutTimeRange[1] / 60),
              ]}
              exerciseCoverUrl={{ uri: item.imageURL }}
              status="active"
              onPress={() => handleOnpress(item, index + 1)}
              children=""
            />
          </View>
        )}
        style={styles.cardsContainer}
      />
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
  },
  cardStyle: {
    marginBottom: 8,
  },
});
