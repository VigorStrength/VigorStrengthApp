import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { Colors } from "../GlobalStyles";
import { Card, CardProps } from "react-native-paper";
import Icon from "./Icon";
import CustomProgressBar from "./CustomProgressBar";
import { LinearGradient } from "expo-linear-gradient";

interface CustomCardProps extends CardProps {
  title: string;
  subTitle: string;
  programCoverUrl: any;
  progress: number;
}

const CustomMonthlyPlanCard = ({
  title,
  subTitle,
  programCoverUrl,
  progress,
  onPress,
}: CustomCardProps) => {
  return (
    <Card style={styles.card} onPress={onPress} mode="contained">
      {/* <LinearGradient
        colors={[Colors.neutral700, Colors.orange80, Colors.orange100]}
        useAngle={true}
        angle={157.89}
        locations={[0, 0.67, 1]}
        style={styles.gradient}
      /> */}
      <LinearGradient
        colors={[Colors.neutral700, Colors.orange80, Colors.orange100]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.67, 1]}
        style={styles.gradient}
      />
      <Card.Content style={styles.content}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.cardTitle} numberOfLines={2}>
              {title}
            </Text>
            <Icon
              name="moreHorizontal"
              width={40}
              height={40}
              fill={Colors.orange100}
            />
          </View>
          <Text style={styles.cardSubTitle}>{subTitle}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={programCoverUrl} style={styles.cardImage} />
          <View style={styles.progressContainer}>
            <CustomProgressBar
              size="large"
              progress={progress}
              color={Colors.orange60}
            />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CustomMonthlyPlanCard;

const styles = StyleSheet.create({
  card: {
    width: 326,
    height: 318,
    borderRadius: 20,
    backgroundColor: Colors.neutral800,
    overflow: "hidden",
    position: "relative",
  },
  content: {
    padding: 15,
    zIndex: 1,
    position: "absolute",
    width: "100%",
  },
  gradient: {
    width: 326,
    height: 318,
    borderRadius: 20,
    opacity: 0.2,
    position: "absolute",
    zIndex: 0,
  },
  headerContainer: {
    marginBottom: 30,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 32,
    fontFamily: "IntegralCF-Bold",
    color: Colors.orange100,
    flexWrap: "wrap",
    flex: 1,
    marginRight: 14,
  },
  cardSubTitle: {
    fontSize: 16,
    fontFamily: "SatoshiBold",
    color: Colors.neutral350,
  },
  imageContainer: {
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: 140,
    borderRadius: 12,
  },
  progressContainer: {
    position: "absolute",
    bottom: 8,
    left: 16,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  progressBar: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.neutral800,
  },
  progressText: {
    color: Colors.orange100,
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "bold",
  },
});
