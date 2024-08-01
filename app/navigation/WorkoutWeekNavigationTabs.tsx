import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WorkoutWeek from "../screens/WorkoutPlan/WorkoutWeek";
import { Colors } from "../GlobalStyles";
import { useStandardWorkoutPlan } from "../features/workoutPlan/useStandardWorkoutPlan";

type Props = {
  navigation: any;
};

const Tab = createMaterialTopTabNavigator();

const WorkoutWeekNavigationTabs = ({ navigation }: Props) => {
  const { standardWorkoutPlan, error, isPending } = useStandardWorkoutPlan();

  if (isPending) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const weekTabs = standardWorkoutPlan?.weeks.map((week: any, i: number) => {
    const workoutWeek = {
      ...week,
      weekNumber: i + 1,
      label: `Week ${i + 1}`,
    };

    return (
      <Tab.Screen key={i} name={workoutWeek.label}>
        {() => <WorkoutWeek week={workoutWeek} navigation={navigation} />}
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
