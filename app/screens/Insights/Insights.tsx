import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../GlobalStyles";
import CustomTopBar from "../../components/CustomTopBar";
import InsightCard from "../../components/InsightCard";
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
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  appBarLabel: {
    fontSize: 24,
    lineHeight: 25,
    color: Colors.orange100,
    fontFamily: "IntegralCF-Bold",
  },
});
