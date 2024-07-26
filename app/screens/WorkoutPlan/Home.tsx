import React, { useRef } from "react";
import { Animated, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../GlobalStyles";
import Icon from "../../components/Icon";
import CustomMonthlyPlanCard from "../../components/CustomMonthlyPlanCard";
import CustomSelectionCard from "../../components/CustomSelectionCard";
import CustomTopBar from "../../components/CustomTopBar";
import { useActiveWorkoutPlan } from "../../features/workoutPlan/useActiveWorkoutPlan";
import HomeSkeleton from "../../skeletonscreens/workoutPlan/HomeSkeleton";

type Props = {
  navigation: any;
  route: any;
};

const ActionComponent = () => (
  <View style={styles.actionContainer}>
    <Text style={styles.actionLabel}>See more</Text>
    <Icon name="arrowRight" width={40} height={40} fill={Colors.orange100} />
  </View>
);

const Home = ({ navigation }: Props) => {
  const { workoutPlan, error, isPending } = useActiveWorkoutPlan();
  console.log(workoutPlan, error, isPending);

  return (
    <SafeAreaView style={[styles.container]}>
      <CustomTopBar navigation={navigation} iconName="menu" />
      <ScrollView style={styles.content}>
        {isPending ? (
          <HomeSkeleton />
        ) : (
          <>
            <View style={styles.monthlyPlanCardContainer}>
              <Text style={styles.topLabel}>Today's Workout</Text>
              <CustomMonthlyPlanCard
                title={workoutPlan?.workoutPlanName}
                subTitle="Week 2"
                progress={25}
                programCoverUrl={require("../../../assets/sushil-ghimire-5UbIqV58CW8-unsplash.jpg")}
                onPress={() => navigation.navigate("WorkoutPlan")}
                children=""
              />
            </View>
            <View style={styles.weeklySelectionContainer}>
              <View style={styles.weeklyLabelsContainer}>
                <Text style={styles.label}>Weekly Selection</Text>
                <ActionComponent />
              </View>
              <View style={styles.weeklyCardsContainer}>
                <CustomSelectionCard
                  variant="weeklySelection"
                  coverUrl={require("../../../assets/sunday-ii-sunday-z1uWXbhI1R0-unsplash.jpg")}
                  workoutTime={23}
                  workoutName="Squat"
                />
                <CustomSelectionCard
                  variant="weeklySelection"
                  coverUrl={require("../../../assets/joe-mcferrin-s6znUip3Mro-unsplash.jpg")}
                  workoutTime={23}
                  workoutName="Deadlift"
                  style={styles.weeklyCard}
                />
              </View>
            </View>
            <View style={styles.sportSpecificContainer}>
              <View style={styles.weeklyLabelsContainer}>
                <Text style={styles.sportLabel} numberOfLines={2}>
                  Sport Specific Programs
                </Text>
                <ActionComponent />
              </View>
              <View style={styles.weeklyCardsContainer}>
                <CustomSelectionCard
                  variant="sportSpecificSelection"
                  coverUrl={require("../../../assets/sunday-ii-sunday-z1uWXbhI1R0-unsplash.jpg")}
                  workoutTime={23}
                  workoutName="Squat"
                />
                <CustomSelectionCard
                  variant="sportSpecificSelection"
                  coverUrl={require("../../../assets/joe-mcferrin-s6znUip3Mro-unsplash.jpg")}
                  workoutTime={23}
                  workoutName="Deadlift"
                  style={styles.weeklyCard}
                />
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 48,
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
  },
  monthlyPlanCardContainer: {
    flex: 1,
    paddingLeft: 8,
    paddingTop: 32,
    marginBottom: 8,
  },
  topLabel: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: "SatoshiBold",
    color: Colors.neutral400,
    marginBottom: 16,
  },
  label: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: "SatoshiBold",
    color: Colors.neutral400,
  },
  actionLabel: {
    fontSize: 17,
    lineHeight: 25,
    fontFamily: "Satoshi",
    color: Colors.orange100,
    marginRight: -8,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -8,
  },
  weeklySelectionContainer: {
    flex: 1,
    paddingHorizontal: 8,
    overflow: "hidden",
  },
  weeklyCard: {
    marginLeft: 16,
  },
  weeklyLabelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  weeklyCardsContainer: {
    flexDirection: "row",
  },
  sportSpecificContainer: {
    flex: 1,
    marginTop: 8,
    paddingHorizontal: 8,
    overflow: "hidden",
  },
  sportLabel: {
    fontSize: 20,
    lineHeight: 25,
    width: 206,
    fontFamily: "SatoshiBold",
    color: Colors.neutral400,
    flexWrap: "wrap",
  },
});
