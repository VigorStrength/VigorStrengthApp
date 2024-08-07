import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import { Colors } from "../GlobalStyles";

type Props = {
  max: number;
  min: number;
};

const DurationLabel = ({ max, min }: Props) => {
  return (
    <View style={styles.container}>
      <Icon name="time" width={32} height={32} fill={Colors.neutral350} />
      <Text style={styles.timeLabel}>
        {max} min / {min} min
      </Text>
    </View>
  );
};

export default DurationLabel;

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  timeLabel: {
    fontSize: 16,
    marginLeft: 16,
    color: Colors.neutral350,
    fontFamily: "SatoshiBold",
  },
});
