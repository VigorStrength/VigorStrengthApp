import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../GlobalStyles";
import InsightCard from "../../components/InsightCard";
import CustomDivider from "../../components/CustomDivider";
import { Divider } from "react-native-paper";
import CustomExerciseItemCard from "../../components/CustomExerciseItemCard";

type Props = {};

const Daily = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.nutritionSection}>
        <View style={styles.nutritionLabel}>
          <Text style={styles.dateLabel}>July 17</Text>
          <Text style={styles.sectionLabel}>Nutrition</Text>
        </View>
        <ScrollView style={styles.nutritionContent}>
          <View style={styles.insightCardsRow}>
            <InsightCard
              title="Calories"
              current={720}
              total={1000}
              children=""
            />
            <InsightCard
              title="Proteins"
              current={121}
              total={178}
              children=""
            />
          </View>
          <View style={styles.insightCardsRow}>
            <InsightCard title="Carbs" current={166} total={174} children="" />
            <InsightCard title="Fat" current={28} total={54} children="" />
          </View>
        </ScrollView>
        <View style={styles.exercisesSection}>
          <CustomDivider style={styles.dividerStyle} />
          <View style={styles.exerciseLabel}>
            <Text style={styles.sectionLabel}>Exercises</Text>
            <Text style={styles.timeLabel}>95 min</Text>
          </View>
          <ScrollView style={styles.nutritionContent}>
            <View style={styles.cardView}>
              <CustomExerciseItemCard
                exerciseName="Shoulder Press"
                exerciseTime={10}
                exerciseReps={8}
                exerciseCoverUrl={require("../../../assets/alora-griffiths-V3GnMeRhnjk-unsplash.jpg")}
                status="active"
                children=""
              />
            </View>
            <View style={styles.cardView}>
              <CustomExerciseItemCard
                exerciseName="Shoulder Press"
                exerciseTime={10}
                exerciseReps={8}
                exerciseCoverUrl={require("../../../assets/alora-griffiths-V3GnMeRhnjk-unsplash.jpg")}
                status="active"
                children=""
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Daily;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  nutritionLabel: {
    paddingHorizontal: 16,
  },
  exerciseLabel: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateLabel: {
    fontSize: 14,
    textTransform: "uppercase",
    color: Colors.neutral600,
    fontFamily: "IntegralCF-Bold",
    marginBottom: 4,
  },
  sectionLabel: {
    fontSize: 20,
    fontFamily: "SatoshiBold",
    color: Colors.orange100,
  },
  timeLabel: {
    fontSize: 20,
    fontFamily: "SatoshiBold",
    color: Colors.neutral600,
  },
  nutritionSection: {
    height: 700,
  },
  nutritionContent: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  insightCardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  exercisesSection: {
    minHeight: 10,
  },
  dividerStyle: {
    marginVertical: 16,
  },
  cardView: {
    marginBottom: 8,
  },
});
