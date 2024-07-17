import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTopBar from "../../components/CustomTopBar";

type Props = {
  navigation: any;
};

const WorkoutPlan = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <CustomTopBar
        variant="Plan"
        iconName="moreHorizontal"
        label="Upper Body Strength"
        navigation={navigation}
      />
      <Text>WorkoutPlan</Text>
    </SafeAreaView>
  );
};

export default WorkoutPlan;

const styles = StyleSheet.create({});
