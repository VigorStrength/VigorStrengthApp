import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTopBar from "../../components/CustomTopBar";
import WorkoutWeekNavigationTabs from "../../navigation/WorkoutWeekNavigationTabs";
import CustomDivider from "../../components/CustomDivider";
import CustomProgressBar from "../../components/CustomProgressBar";
import { Colors } from "../../GlobalStyles";
import CustomButton from "../../components/CustomButton";
import { useActiveWorkoutPlan } from "../../features/workoutPlan/useActiveWorkoutPlan";

type Props = {
  navigation: any;
};

const WorkoutPlan = ({ navigation }: Props) => {
  const { activeWorkoutPlan, error, isPending } = useActiveWorkoutPlan();

  return (
    <SafeAreaView style={styles.container}>
      <CustomTopBar
        variant="Plan"
        iconName="moreHorizontal"
        label={activeWorkoutPlan?.workoutPlanName}
        navigation={navigation}
      />
      <WorkoutWeekNavigationTabs navigation={navigation} />
      <View style={styles.content}>
        <CustomDivider />
        <CustomProgressBar
          progress={activeWorkoutPlan?.progress}
          color={Colors.orange100}
        />
        <View style={styles.buttonContainer}>
          <CustomButton size="xlarge" left="share" children="Share Progress" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WorkoutPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 180,
  },
  buttonContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});
