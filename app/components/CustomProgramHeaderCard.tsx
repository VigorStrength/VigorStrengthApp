import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../GlobalStyles";
import Icon from "./Icon";
import CustomChip from "./CustomChip";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";

type Variant = "workout" | "meal";
type Props = {
  variant: Variant;
  workoutWeekNumber?: number;
  workoutDayNumber?: number;
  workoutDayName?: string;
  mealTitle?: string;
  mealName?: string;
  coverUrl: any;
  navigation?: any;
  scrollY?: any;
};

const MAX_HEADER_HEIGHT = 355;
const MIN_HEADER_HEIGHT = 110;

const CustomProgramHeaderCard = ({
  variant,
  workoutWeekNumber,
  workoutDayNumber,
  workoutDayName,
  mealTitle,
  mealName,
  coverUrl,
  navigation,
  scrollY,
}: Props) => {
  const animatedLabelStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, 150],
      [1, 0],
      Extrapolation.CLAMP
    );

    return {
      opacity,
    };
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
      [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
      Extrapolation.CLAMP
    );

    return {
      height,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedHeaderStyle]}>
      <ImageBackground
        source={coverUrl}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {variant === "workout" && (
          <LinearGradient
            colors={[Colors.neutralGradient, Colors.orange80, Colors.orange100]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.65, 1]}
            style={styles.gradient}
            pointerEvents="none"
          />
        )}
        <View style={styles.header}>
          <Icon
            onPress={() => navigation.goBack()}
            name={variant === "workout" ? "chevronLeftCircle" : "chevronLeft"}
            width={64}
            height={64}
            fill={Colors.orange100}
          />
          <CustomChip
            left="favoriteEmpty"
            right="moreHorizontal"
            children=""
            style={styles.chip}
          />
        </View>
        <View style={styles.contentHeader}>
          {variant === "workout" && (
            <>
              <Animated.View
                style={[styles.workoutPlanDetails, animatedLabelStyle]}
              >
                <Text
                  style={[styles.workoutText, { marginRight: -4 }]}
                >{`Week ${workoutWeekNumber}`}</Text>
                <Icon
                  // style={animatedLabelStyle}
                  name="dotSeparator"
                  width={32}
                  height={32}
                  fill={Colors.neutral350}
                />
                <Text
                  style={[styles.workoutText, { marginLeft: -4 }]}
                >{`Day ${workoutDayNumber}`}</Text>
              </Animated.View>
              <Animated.Text
                style={[styles.workoutDayTitle, animatedLabelStyle]}
              >
                {workoutDayName}
              </Animated.Text>
            </>
          )}
          {variant === "meal" && (
            <>
              <Text style={styles.mealTitle}>{mealTitle}</Text>
              <Text style={styles.mealName}>{mealName}</Text>
            </>
          )}
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

export default CustomProgramHeaderCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 355,
    // position: "relative",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "space-between",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
    zIndex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 42,
    paddingHorizontal: 4,
  },
  chip: {
    backgroundColor: Colors.neutralBackgroundChip,
  },
  contentHeader: {
    paddingHorizontal: 18,
    marginBottom: 20,
  },
  workoutPlanDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  workoutText: {
    fontSize: 20,
    fontFamily: "SatoshiBold",
    marginBottom: 8,
    color: Colors.neutral350,
  },
  workoutDayTitle: {
    fontFamily: "SatoshiStrong",
    fontSize: 24,
    color: Colors.orange100,
  },
  mealTitle: {
    fontSize: 14,
    fontFamily: "IntegralCF-Bold",
    marginBottom: 4,
    textTransform: "uppercase",
    color: Colors.orange100,
  },
  mealName: {
    fontSize: 24,
    fontFamily: "SatoshiBold",
    color: Colors.orange100,
  },
});
