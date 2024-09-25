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
  interpolateColor,
} from "react-native-reanimated";
import ImageHeader from "./ImageHeader";

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
  const animatedOpacity = useAnimatedStyle(() => {
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

  const animatedReverseOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
      [0, 1],
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
    const backgroundColor = interpolateColor(
      scrollY.value,
      [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
      [Colors.orange60, Colors.neutralGradient]
    );

    return {
      height,
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedHeaderStyle]}>
      <ImageHeader
        coverUrl={coverUrl}
        style={[animatedHeaderStyle, animatedOpacity]}
      />
      <View style={styles.header}>
        <Icon
          onPress={() => navigation.goBack()}
          name={variant === "workout" ? "chevronLeftCircle" : "chevronLeft"}
          width={44}
          height={44}
          fill={Colors.orange100}
          style={styles.iconStyle}
        />
        <Animated.Text
          style={[styles.workoutDayTitle2, animatedReverseOpacity]}
        >
          {workoutDayName}
        </Animated.Text>
        {/* <Icon name="chip3" width={100} height={44} fill={Colors.orange100} /> */}
        <View style={styles.chipIcons}>
          <Icon
            name="favoriteEmpty"
            width={44}
            height={44}
            fill={Colors.orange100}
          />
          <Icon
            name="moreHorizontalCircle"
            width={44}
            height={44}
            fill={Colors.orange100}
          />
        </View>
        {/* <CustomChip
          left="favoriteEmpty"
          right="moreHorizontal"
          children=""
          style={styles.chip}
        /> */}
      </View>
      <View style={styles.contentHeader}>
        {variant === "workout" && (
          <>
            <Animated.View style={[styles.workoutPlanDetails, animatedOpacity]}>
              <Text
                style={[styles.workoutText, { marginRight: -4 }]}
              >{`Week ${workoutWeekNumber}`}</Text>
              <Icon
                name="dotSeparator"
                width={32}
                height={32}
                fill={Colors.neutral350}
              />
              <Text
                style={[styles.workoutText, { marginLeft: -4 }]}
              >{`Day ${workoutDayNumber}`}</Text>
            </Animated.View>
            <Animated.Text style={[styles.workoutDayTitle, animatedOpacity]}>
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
    </Animated.View>
  );
};

export default CustomProgramHeaderCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 355,
    position: "relative",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 54,
    paddingHorizontal: 4,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  iconStyle: {
    zIndex: 10,
    // position: "absolute",
    // // top: 0,
    // top: 54,
    // left: 10,
    // right: 10,
  },
  chip: {
    backgroundColor: Colors.neutralBackgroundChip,
  },
  chipIcons: {
    flexDirection: "row",
  },
  contentHeader: {
    paddingHorizontal: 18,
    marginBottom: 20,
    position: "absolute",
    bottom: 0,
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
  workoutDayTitle2: {
    fontSize: 18,
    lineHeight: 25,
    color: Colors.orange100,
    fontFamily: "SatoshiBold",
    marginLeft: 48,
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
