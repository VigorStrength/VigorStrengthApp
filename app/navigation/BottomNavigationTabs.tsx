import React from "react";

import { Colors } from "../GlobalStyles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/WorkoutPlan/Home";
import Account from "../screens/Account/Account";
import Nutrition from "../screens/Nutrition/Nutrition";
import Insights from "../screens/Insights/Insights";
import Messages from "../screens/Social/Messages";
import Icon from "../components/Icon";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

const BottomNavigationTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="Nutrition" component={Nutrition} />
      <Tab.Screen name="Insights" component={Insights} />
      <Tab.Screen name="Social" component={Messages} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomNavigationTabs;
