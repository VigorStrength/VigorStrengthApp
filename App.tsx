import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import Icon from "./components/Icon";
import CustomTextInput from "./components/CustomTextInput";
import CustomButton from "./components/CustomButton";
import CustomChip from "./components/CustomChip";
import CustomIconChip from "./components/CustomIconChip";
import CustomProgressBar from "./components/CustomProgressBar";
import CustomDivider from "./components/CustomDivider";
import CustomAvatar from "./components/CustomAvatar";
import CustomButton2 from "./components/CustomButton2";
import { Colors } from "./GlobalStyles";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import CustomSearchBar from "./components/CustomSearchBar";
import CalendarNumberChip from "./components/CalendarNumberChip";
import CustomMonthlyPlanCard from "./components/CustomMonthlyPlanCard";
import CustomMealItemCard from "./components/CustomMealItemCard";
import CustomDailyWorkoutItemCard from "./components/CustomDailyWorkoutItemCard";
import CustomExerciseItemCard from "./components/CustomExerciseItemCard";
import CustomMessageItemCard from "./components/CustomMessageItemCard";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.orange100,
    onSurfaceVariant: Colors.neutral350,
  },
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Satoshi: require("./assets/fonts/Satoshi/Satoshi-Regular.otf"),
        SatoshiBold: require("./assets/fonts/Satoshi/Satoshi-Medium.otf"),
        IntegralCF: require("./assets/fonts/Integral-CF/Fontspring-DEMO-integralcf-regular.otf"),
        "IntegralCF-Bold": require("./assets/fonts/Integral-CF/Fontspring-DEMO-integralcf-medium.otf"),
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        {/* <Text style={{ fontFamily: "Satoshi", fontSize: 24 }}>
          Hello Satoshi
        </Text>
        <Text style={{ fontFamily: "IntegralCF", fontSize: 24 }}>
          Hello Integral CF
        </Text>
        <Text style={{ fontFamily: "Satoshi", fontSize: 16 }}>
          armelhell@icloud.com
        </Text>
        <View style={styles.textInputContainer}>
          <CustomTextInput variant="primary" label="Email" />
        </View>
        <View style={styles.textInputContainer}>
          <CustomTextInput
            variant="primary"
            label="Label Name"
            iconName="target"
          />
        </View>
        <View style={styles.textInputContainer}>
          <CustomTextInput
            variant="secondary"
            placeholder="Placeholder"
            iconName="arrowRight"
          />
        </View>
        <View style={styles.textInputContainer}>
          <CustomTextInput
            variant="filled"
            filledLabel="You'll be using this email to log in"
            filledValue="armelhell@icloud.com"
          />
        </View> */}
        {/* <View style={styles.textInputContainer}>
          <CustomTextInput
            variant="filled"
            filledLabel="You'll be using this email to log in"
            filledValue="armelhell@icloud.com"
          />
        </View> */}
        {/* <View style={styles.buttonContainer}>
          <CustomButton size="small">Start Workout</CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton size="large" left="schedule" right="arrowRight">
            Start Workout
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton size="large" left="playFilled">
            Start Workout
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton size="medium" right="arrowRight">
            Start Workout
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton size="xlarge" left="playFilled">
            Start Workout
          </CustomButton>
        </View> */}
        {/* <StatusBar style="auto" />
      </View> */}
        {/* <View style={styles.buttonContainer}>
          <CustomChip>Mark as completed</CustomChip>
        </View>
        <View style={styles.buttonContainer}>
          <CustomChip left="favoriteEmpty" right="moreHorizontal" children="" />
        </View>
        <View style={styles.buttonContainer}>
          <CustomIconChip iconName="chevronLeft" size="small" children="" />
        </View>
        <View style={styles.buttonContainer}>
          <CustomIconChip iconName="close" size="large" children="" />
        </View> */}
        {/* <View style={styles.progressBarContainer}>
          <CustomProgressBar
            color={Colors.orange80}
            progress={15}
            size="xlarge"
          />
        </View>
        <View style={styles.progressBarContainer}>
          <CustomProgressBar
            color={Colors.orange80}
            progress={15}
            size="large"
          />
        </View> */}
        {/* <View style={styles.buttonContainer}>
          <CustomProgressBar progress={15} size="medium" />
        </View>
        <View style={styles.buttonContainer}>
          <CustomProgressBar progress={15} size="small" />
        </View> */}
        {/* <View style={styles.dividerContainer}>
          <CustomDivider rightLabel="Label Name" />
        </View>
        <View style={styles.dividerContainer}>
          <CustomDivider leftLabel="Label Name" />
        </View>
        <View style={styles.dividerContainer}>
          <CustomDivider leftLabel="Label Name" rightLabel="Label Name" />
        </View>
        <View style={styles.dividerContainer}>
          <CustomDivider middleLabel="Label Name" />
        </View> */}
        {/* <View style={styles.avatarContainer}>
          <CustomAvatar
            avatarUrl={require("./assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg")}
          />
        </View>
        <View style={styles.avatarContainer}>
          <CustomAvatar
            size="large"
            avatarUrl={require("./assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg")}
          />
        </View>
        <View style={styles.avatarContainer}>
          <CustomAvatar />
        </View>
        <View style={styles.avatarContainer}>
          <CustomAvatar size="large" />
        </View> */}
        {/* <View style={styles.searchContainer}>
          <CustomSearchBar size="small" value="" />
        </View>
        <View style={styles.searchContainer}>
          <CustomSearchBar value="" />
        </View> */}

        {/* <View style={styles.buttonContainer}>
          <CustomButton size="small">Start Workout</CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton size="large" left="schedule" right="arrowRight">
            Start Workout
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton size="large" left="playFilled">
            Start Workout
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton size="medium" right="arrowRight">
            Start Workout
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton size="xlarge" left="playFilled">
            Start Workout
          </CustomButton>
        </View> */}
        {/* <View style={styles.calendarChipContainer}>
          <CalendarNumberChip children={2} />
        </View>
        <View style={styles.calendarChipContainer}>
          <CalendarNumberChip variant="completed" children={2} />
        </View>
        <View style={styles.calendarChipContainer}>
          <CalendarNumberChip variant="active" children={2} />
        </View> */}
        {/* <View style={styles.cardContainer}>
          <CustomMonthlyPlanCard
            title="Monthly Plan Name"
            subTitle="Week X"
            progress={15}
            programCoverUrl={require("./assets/sushil-ghimire-5UbIqV58CW8-unsplash.jpg")}
          />
        </View>
        <View style={styles.cardContainer}>
          <CustomMealItemCard
            mealTitle="breakfast"
            mealName="Oatmeal Pancakes"
            mealCoverUrl={require("./assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
            status="active"
            children=""
          />
        </View>
        <View style={styles.cardContainer}>
          <CustomMealItemCard
            mealTitle="breakfast"
            mealName="Oatmeal Pancakes"
            mealCoverUrl={require("./assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
            status="completed"
            children=""
          />
        </View> */}
        {/* <View style={styles.cardContainer}>
          <CustomDailyWorkoutItemCard
            dayNumber={1}
            workoutDayLabel="Upper Body Conjugate"
            workoutDayTimeRange={[90, 60]}
            exerciseCoverUrl={require("./assets/alora-griffiths-V3GnMeRhnjk-unsplash.jpg")}
            status="completed"
            children=""
          />
        </View>
        <View style={styles.cardContainer}>
          <CustomDailyWorkoutItemCard
            dayNumber={2}
            workoutDayLabel="Upper Body Conjugate"
            workoutDayTimeRange={[90, 60]}
            exerciseCoverUrl={require("./assets/alora-griffiths-V3GnMeRhnjk-unsplash.jpg")}
            status="current"
            children=""
          />
        </View>
        <View style={styles.cardContainer}>
          <CustomDailyWorkoutItemCard
            dayNumber={3}
            workoutDayLabel="Upper Body Conjugate"
            workoutDayTimeRange={[90, 60]}
            exerciseCoverUrl={require("./assets/alora-griffiths-V3GnMeRhnjk-unsplash.jpg")}
            status="active"
            children=""
          />
        </View> */}
        {/* <View style={styles.cardContainer}>
          <CustomExerciseItemCard
            exerciseName="Shoulder Press"
            exerciseTime={10}
            exerciseReps={8}
            exerciseCoverUrl={require("./assets/alora-griffiths-V3GnMeRhnjk-unsplash.jpg")}
            status="active"
            children=""
          />
        </View>
        <View style={styles.dividerContainer}>
          <CustomDivider leftLabel="Rest" rightLabel="00:45" />
        </View> */}
        <View style={styles.cardContainer}>
          <CustomMessageItemCard
            contactName="Fbd🍀"
            message="Happy Birthday if this day is still special to you💕"
            time="10"
            avatarUrl={require("./assets/koala-honey-wife.jpeg")}
            status="unread"
            children=""
          />
        </View>
        <View style={styles.cardContainer}>
          <CustomMessageItemCard
            contactName="Koala Honey Wife 🐨🍯💍"
            // contactName="Kennedy Nelson"
            message="I'll call you sometime soon so we can talk okay?"
            // message={
            //   "you saying hello scared me and woke me up that's a bad combo for me"
            // }
            // message={
            //   "Your clinician bill from your visit to THE BORTOLAZZO GROUP, LLC at WELLSTAR KENNESTONE HOSPITAL is now past due.Click here to view: https://bill.paymentsmd.com/l/583435144129/ Reply 'STOP' to unsubscribe."
            // }
            time="10"
            avatarUrl={require("./assets/koala-honey-wife.jpeg")}
            status="read"
            children=""
          />
        </View>
      </View>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textInputContainer: {
    marginBottom: 8,
  },
  buttonContainer: {
    marginBottom: 10,
    // alignItems: "flex-start",
    // textAlign: "right",
  },
  progressBarContainer: {
    marginTop: 40,
  },
  dividerContainer: {
    // marginBottom: 10,
    width: "100%",
  },
  avatarContainer: {
    marginTop: 20,
  },
  searchContainer: {
    width: "100%",
    marginTop: 20,
  },
  searchTextInputContainer: {
    alignSelf: "flex-end",
    marginBottom: 8,
    marginEnd: 30,
  },
  calendarChipContainer: {
    marginBottom: 10,
  },
  cardContainer: {
    marginTop: 2,
  },
});
