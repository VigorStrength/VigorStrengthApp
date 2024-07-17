import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTopBar from "../../components/CustomTopBar";

type Props = {};

const WorkoutPlan = (props: Props) => {
  return (
    <SafeAreaView>
      <CustomTopBar iconName="moreHorizontal" />
      <Text>WorkoutPlan</Text>
    </SafeAreaView>
  );
};

export default WorkoutPlan;

const styles = StyleSheet.create({});
