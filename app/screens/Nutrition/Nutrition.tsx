import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../GlobalStyles";
import CustomTopBar from "../../components/CustomTopBar";
import Icon from "../../components/Icon";
import CustomSearchBar from "../../components/CustomSearchBar";
import CustomMealItemCard from "../../components/CustomMealItemCard";
import CustomDivider from "../../components/CustomDivider";

type Props = {
  navigation: any;
  route: any;
};

const Nutrition = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomTopBar label="Nutrition" />
      <View style={styles.nutrionActions}>
        <View style={styles.generalLink}>
          <Text style={styles.generalLabel}>general</Text>
          <Icon
            name="chevronDown"
            width={44}
            height={44}
            fill={Colors.neutral400}
          />
        </View>
        <Text
          onPress={() => navigation.navigate("Meal Plan")}
          style={styles.mealPlanLabel}
        >
          meal plan
        </Text>
      </View>
      <View style={styles.searchContent}>
        <Text style={styles.dayLabel}>our pics of the day</Text>
        <CustomSearchBar size="small" value="" />
      </View>
      {/*Later to be turned in a FlatList*/}
      <ScrollView style={styles.nutritionCardsContainer}>
        <View style={styles.cardContainer}>
          <CustomMealItemCard
            mealTitle="breakfast"
            mealName="Oatmeal Pancakes"
            mealCoverUrl={require("../../../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
            status="active"
            children=""
          />
        </View>
        <CustomDivider style={styles.dividerStyle} />
        <View style={styles.cardContainer}>
          <CustomMealItemCard
            mealTitle="Morning Snack"
            mealName="Orange Juice"
            mealCoverUrl={require("../../../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
            status="active"
            children=""
          />
        </View>
        <CustomDivider style={styles.dividerStyle} />
        <View style={styles.cardContainer}>
          <CustomMealItemCard
            mealTitle="Lunch"
            mealName="Bean Quesadilla"
            mealCoverUrl={require("../../../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
            status="active"
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Nutrition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nutrionActions: {
    marginTop: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  generalLabel: {
    fontSize: 20,
    fontFamily: "SatoshiBold",
    textTransform: "capitalize",
    color: Colors.neutral400,
    marginRight: -12,
  },
  generalLink: {
    flexDirection: "row",
    alignItems: "center",
  },
  mealPlanLabel: {
    fontSize: 20,
    fontFamily: "SatoshiBold",
    textTransform: "capitalize",
    color: Colors.neutral700,
    marginLeft: 6,
  },
  dayLabel: {
    fontSize: 20,
    fontFamily: "SatoshiBold",
    textTransform: "capitalize",
    color: Colors.orange100,
  },
  searchContent: {
    marginTop: 8,
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
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
