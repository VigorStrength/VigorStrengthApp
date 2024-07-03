import React from "react";
import { StyleSheet, Image, View, Text } from "react-native"; // Add Text component
import { Card, CardProps } from "react-native-paper";
import { Colors } from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "./Icon";

type Status = "active" | "completed";
interface Props extends CardProps {
  mealTitle: string;
  mealName: string;
  mealCoverUrl: any;
  status: Status;
}

const CustomMealItemCard = ({
  mealTitle,
  mealName,
  mealCoverUrl,
  status,
  ...props
}: Props) => {
  return (
    <View style={styles.card} {...props}>
      <Card.Content style={styles.content}>
        <View style={styles.cardImageContainer}>
          <Image source={mealCoverUrl} style={styles.image} />
          <LinearGradient
            colors={[Colors.orange100, Colors.orange80, Colors.neutralGradient]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0, 0.34, 1]}
            style={styles.gradient}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.mealTitle}>{mealTitle}</Text>
            <Text style={styles.mealName}>{mealName}</Text>
          </View>
          <Icon
            name={status === "active" ? "chevronRight" : "checkmarkCircle"}
            width={44}
            height={44}
            fill={status === "active" ? Colors.orange100 : Colors.green100}
          />
        </View>
      </Card.Content>
    </View>
  );
};

export default CustomMealItemCard;

const styles = StyleSheet.create({
  card: {
    width: 393,
    height: 106,
    borderRadius: 0,
    overflow: "hidden",
  },
  content: {
    flexDirection: "row",
  },
  cardImageContainer: {
    width: 123,
    height: 106,
    borderRadius: 20,
    marginRight: 16,
    position: "relative",
  },
  gradient: {
    width: 123,
    height: 106,
    zIndex: 1,
    borderRadius: 20,
    opacity: 0.2,
    position: "absolute",
  },
  image: {
    zIndex: 0,
    width: 123,
    height: 106,
    borderRadius: 20,
    position: "absolute",
  },
  detailsContainer: {
    flex: 1,
    marginRight: 2,
    marginVertical: 13,
    paddingVertical: 10,
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  mealTitle: {
    fontSize: 12,
    textTransform: "uppercase",
    color: Colors.orange100,
  },
  mealName: {
    fontSize: 20,
    fontFamily: "SatoshiBold",
    color: Colors.neutral350,
  },
});
