import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFont } from "../contexts/FontContext";
import { BottomNavigation, useTheme } from "react-native-paper";
import Welcome from "./SignIn/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import SignIn from "./SignIn/SignIn";
import BottomNavigationTabs from "../navigation/BottomNavigationTabs";
import WorkoutPlan from "./WorkoutPlan/WorkoutPlan";

const Stack = createNativeStackNavigator();

const AppLayout = () => {
  const { fontLoaded } = useFont();
  const { colors } = useTheme();

  if (!fontLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={{ color: colors.primary }}>Loading...</Text>
      </View>
    ); // Placeholder for your future loader component
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={BottomNavigationTabs} />
        <Stack.Screen name="WorkoutPlan" component={WorkoutPlan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  surface: {
    padding: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
