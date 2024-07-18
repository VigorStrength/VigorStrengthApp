import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTopBar from "../../components/CustomTopBar";
import InsightsNavigation from "../../navigation/InsightsNavigation";

type Props = {};

const Insights = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomTopBar label="Activity" />
      <InsightsNavigation />
    </SafeAreaView>
  );
};

export default Insights;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
