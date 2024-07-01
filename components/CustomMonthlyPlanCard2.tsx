import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { Colors } from "../GlobalStyles";
import { Card } from "react-native-paper";
import Icon from "./Icon";
import CustomProgressBar from "./CustomProgressBar";

type Props = {
  title: string;
  subTitle: string;
  programCoverUrl: any;
  progress: number;
};

const CustomMonthlyPlanCard = ({
  title,
  subTitle,
  programCoverUrl,
  progress,
}: Props) => {
  return (
    <Card style={styles.card} mode="contained">
      <Card.Content>
        <View style={styles.headerContainer}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Icon
              name="moreHorizontal"
              width={40}
              height={40}
              fill={Colors.orange100}
            />
          </View>
          <Text style={styles.cardSubTitle}>{subTitle}</Text>
        </View>
      </Card.Content>
      <Card.Content style={styles.imageContainer}>
        <Image source={programCoverUrl} style={styles.cardImage} />
        <View style={styles.progressContainer}>
          <CustomProgressBar
            size="large"
            progress={progress}
            color={Colors.orange80}
          />
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
    padding: 15,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardHeader: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 32,
    fontFamily: "IntegralCF-Bold",
    color: Colors.orange100,
    flexWrap: "wrap",
  },
  cardSubTitle: {
    fontSize: 16,
    fontFamily: "SatoshiBold",
    color: Colors.neutral350,
    marginTop: 14,
  },
  imageContainer: {
    position: "relative",
    marginTop: 30,
  },
  progressContainer: {
    position: "absolute",
    bottom: 10,
    left: 15,
    right: 15,
  },
  cardImage: {
    width: "100%",
    height: 140,
    borderRadius: 20,
  },
});
