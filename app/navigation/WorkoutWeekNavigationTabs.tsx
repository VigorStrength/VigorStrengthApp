import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WorkoutWeek from "../screens/WorkoutPlan/WorkoutWeek";
import { Colors } from "../GlobalStyles";

const Tab = createMaterialTopTabNavigator();

const WorkoutWeekNavigationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.labelStyle,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.orange100,
        },
        tabBarActiveTintColor: Colors.orange100,
        tabBarInactiveTintColor: Colors.neutral700,
      }}
    >
      <Tab.Screen name="Week 1" component={WorkoutWeek} />
      <Tab.Screen name="Week 2" component={WorkoutWeek} />
      <Tab.Screen name="Week 3" component={WorkoutWeek} />
      <Tab.Screen name="Week 4" component={WorkoutWeek} />
    </Tab.Navigator>
  );
};

export default WorkoutWeekNavigationTabs;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 20,
    fontFamily: "Satoshi",
  },
});
