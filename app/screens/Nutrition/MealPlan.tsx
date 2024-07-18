import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTopBar from "../../components/CustomTopBar";
import { Colors } from "../../GlobalStyles";
import CustomDivider from "../../components/CustomDivider";
import CustomMealItemCard from "../../components/CustomMealItemCard";

type Props = {
  navigation: any;
};

const MealPlan = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomTopBar
        variant="Plan"
        iconName="moreHorizontal"
        label="Meal Plan"
        navigation={navigation}
      />
      <ScrollView>
        <Text style={styles.dateLabel}>Today, Jul 17</Text>
        <View style={styles.nutritionCardsContainer}>
          <View style={styles.cardContainer}>
            <CustomMealItemCard
              mealTitle="breakfast"
              mealName="Oatmeal Pancakes"
              mealCoverUrl={require("../../../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
              status="completed"
              children=""
            />
          </View>
          <CustomDivider style={styles.dividerStyle} />
          <View style={styles.cardContainer}>
            <CustomMealItemCard
              mealTitle="Morning Snack"
              mealName="Orange Juice"
              mealCoverUrl={require("../../../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
              status="completed"
              children=""
            />
          </View>
          <CustomDivider style={styles.dividerStyle} />
          <View style={styles.cardContainer}>
            <CustomMealItemCard
              mealTitle="Lunch"
              mealName="Bean Quesadilla"
              mealCoverUrl={require("../../../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
              status="completed"
              children=""
            />
          </View>
          <CustomDivider style={styles.dividerStyle} />
          <View style={styles.cardContainer}>
            <CustomMealItemCard
              mealTitle="Afternoon Snack"
              mealName="Yoghurt & Muesli"
              mealCoverUrl={require("../../../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
              status="active"
              children=""
            />
          </View>
          <CustomDivider style={styles.dividerStyle} />
          <View style={styles.cardContainer}>
            <CustomMealItemCard
              mealTitle="Dinner"
              mealName="Fish Curry"
              mealCoverUrl={require("../../../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
              status="active"
              children=""
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MealPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateLabel: {
    fontSize: 20,
    marginTop: 96,
    fontFamily: "SatoshiBold",
    textTransform: "capitalize",
    color: Colors.neutral400,
    paddingHorizontal: 16,
  },
  nutritionCardsContainer: {
    flex: 1,
    marginTop: 24,
    paddingVertical: 8,
  },
  cardContainer: {
    marginBottom: 8,
  },
  dividerStyle: {
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});
