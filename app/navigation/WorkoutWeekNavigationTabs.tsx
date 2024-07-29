import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WorkoutWeek from "../screens/WorkoutPlan/WorkoutWeek";
import { Colors } from "../GlobalStyles";
import { useStandardWorkoutPlan } from "../features/workoutPlan/useStandardWorkoutPlan";

const Tab = createMaterialTopTabNavigator();

const WorkoutWeekNavigationTabs = () => {
  const { standardWorkoutPlan, error, isPending } = useStandardWorkoutPlan();

  if (isPending) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const weekTabs = standardWorkoutPlan?.weeks.map((week: any, i: number) => {
    const weekName = `Week ${i + 1}`;
    return (
      <Tab.Screen key={i} name={weekName}>
        {() => <WorkoutWeek week={week} />}
      </Tab.Screen>
    );
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.labelStyle,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.orange100,
        },
        tabBarActiveTintColor: Colors.orange100,
        tabBarInactiveTintColor: Colors.neutral700,
        tabBarStyle: {
          marginTop: 46,
          backgroundColor: Colors.neutralNeutral,
        },
      }}
    >
      {weekTabs}
    </Tab.Navigator>
  );
};

export default WorkoutWeekNavigationTabs;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 20,
    fontFamily: "Satoshi",
    textTransform: "capitalize",
  },
});
