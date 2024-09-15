import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../GlobalStyles";
import Icon from "./Icon";
import CustomChip from "./CustomChip";
import { MotiView, useDynamicAnimation } from "moti";

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

const HEADER_MAX_HEIGHT = 355;
const HEADER_MIN_HEIGHT = 255;

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
  // const animation = useDynamicAnimation(() => ({
  //   height: HEADER_MAX_HEIGHT,
  // }));
  const [headerHeight, setHeaderHeight] = useState(HEADER_MAX_HEIGHT);

  useEffect(() => {
    if (scrollY) {
      scrollY.addListener(({ value }: { value: number }) => {
        const updateHeight = Math.max(
          HEADER_MIN_HEIGHT,
          HEADER_MAX_HEIGHT - value
        );
        setHeaderHeight(updateHeight);
        // animation.animateTo({ height: updateHeight });
      });
      // console.log(animation.current?.height);
    }

    return () => {
      if (scrollY) {
        scrollY.removeAllListeners();
      }
    };
  }, [scrollY]);

  console.log(headerHeight);

  return (
    <MotiView
      // state={animation}
      style={[
        styles.container,
        { height: headerHeight },
        headerHeight === HEADER_MIN_HEIGHT && styles.fixedHeader,
        // animation.current?.height === HEADER_MIN_HEIGHT && styles.fixedHeader,
      ]}
      transition={{
        type: "timing",
        duration: 300,
      }}
    >
      <ImageBackground
        source={coverUrl}
        style={styles.background}
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
              <View style={styles.workoutPlanDetails}>
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
              </View>
              <Text style={styles.workoutDayTitle}>{workoutDayName}</Text>
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
    </MotiView>
  );
};

export default CustomProgramHeaderCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    overflow: "hidden",
  },
  fixedHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "space-between",
    position: "relative",
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
    fontFamily: "SatoshiStrong",
    color: Colors.neutral400,
  },
});
