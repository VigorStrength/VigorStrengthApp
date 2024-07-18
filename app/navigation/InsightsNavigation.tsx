import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Colors } from "../GlobalStyles";
import Daily from "../screens/Insights/Daily";
import Weekly from "../screens/Insights/Weekly";
import Monthly from "../screens/Insights/Monthly";

const Tab = createMaterialTopTabNavigator();

const InsightsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.labelStyle,
        tabBarIndicatorStyle: styles.indicatorStyle,
        tabBarActiveTintColor: Colors.orange100,
        tabBarInactiveTintColor: Colors.neutral700,
        tabBarStyle: styles.barStyle,
      }}
    >
      <Tab.Screen name="Daily" component={Daily} />
      <Tab.Screen name="Weekly" component={Weekly} />
      <Tab.Screen name="Monthly" component={Monthly} />
    </Tab.Navigator>
  );
};

export default InsightsNavigation;

const styles = StyleSheet.create({
  barStyle: {
    marginTop: 46,
    backgroundColor: Colors.neutralNeutral,
  },
  indicatorStyle: {
    backgroundColor: Colors.orange100,
  },
  labelStyle: {
    fontSize: 20,
    fontFamily: "Satoshi",
    textTransform: "capitalize",
  },
});
