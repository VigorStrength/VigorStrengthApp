import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/WorkoutPlan/Home";
import Account from "../screens/Account/Account";
import Nutrition from "../screens/Nutrition/Nutrition";
import Insights from "../screens/Insights/Insights";
import Messages from "../screens/Social/Messages";

const Tab = createBottomTabNavigator();

const BottomNavigationTabs = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="Nutrition" component={Nutrition} />
      <Tab.Screen name="Insights" component={Insights} />
      <Tab.Screen name="Social" component={Messages} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomNavigationTabs;
