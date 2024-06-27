import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import { Colors } from "../GlobalStyles";

type Props = {
  rightLabel?: string;
  middleLabel?: string;
  leftLabel?: string;
};

const CustomDivider = ({ rightLabel, middleLabel, leftLabel }: Props) => {
  return (
    <>
      {leftLabel && !rightLabel && !middleLabel && (
        <View style={styles.container}>
          <Text style={[styles.label, styles.marginRight]}>{leftLabel}</Text>
          <Divider style={styles.divider} />
        </View>
      )}
      {rightLabel && !leftLabel && !middleLabel && (
        <View style={styles.container}>
          <Divider style={styles.divider} />
          <Text style={[styles.label, styles.marginLeft]}>{rightLabel}</Text>
        </View>
      )}
      {leftLabel && rightLabel && (
        <View style={styles.container}>
          <Text style={[styles.label, styles.marginRight]}>{leftLabel}</Text>
          <Divider style={styles.divider} />
          <Text style={[styles.label, styles.marginLeft]}>{rightLabel}</Text>
        </View>
      )}
      {middleLabel && (
        <View style={styles.container}>
          <Divider style={styles.divider} />
          <Text style={[styles.label, styles.marginHorizontal]}>
            {middleLabel}
          </Text>
          <Divider style={styles.divider} />
        </View>
      )}
    </>
  );
};

export default CustomDivider;

const marginValue = 14;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  label: {
    color: Colors.orange100,
    fontSize: 14,
  },
  divider: {
    backgroundColor: Colors.neutral800,
    height: 1.5,
    flex: 1,
  },
  marginRight: {
    marginRight: marginValue,
  },
  marginLeft: {
    marginLeft: marginValue,
  },
  marginHorizontal: {
    marginHorizontal: marginValue,
  },
});
