import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, CardProps } from "react-native-paper";
import { Colors } from "../GlobalStyles";

interface CustomCardProps extends CardProps {
  title: string;
  current: number;
  total: number;
}

const InsightCard = ({ title, current, total }: CustomCardProps) => {
  const percentage = (current / total) * 100;

  return (
    <Card style={styles.container}>
      <View style={styles.titleProgress}>
        <Text style={styles.titleLabel}>{title}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.currentLabel}>{current}</Text>
        <Text style={styles.totalLabel}>
          {`of ${total} ${
            title === "calories" ? "KCal" : title === "water" ? "liters" : "g"
          }`}
        </Text>
      </View>
    </Card>
  );
};

export default InsightCard;

const styles = StyleSheet.create({
  container: {
    width: 164,
    height: 151,
    borderRadius: 10,
    padding: 8,
    justifyContent: "space-between",
    backgroundColor: Colors.neutral800,
    flexDirection: "column",
  },
  titleProgress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  titleLabel: {
    fontSize: 16,
    color: Colors.neutral500,
    textTransform: "capitalize",
  },
  body: {
    // justifySelf: "flex-end",
  },
  currentLabel: {
    fontSize: 24,
    fontFamily: "SatoshiBold",
    color: Colors.orange100,
  },
  totalLabel: {
    fontSize: 24,
    fontFamily: "SatoshiBold",
    color: Colors.neutral200,
  },
});
