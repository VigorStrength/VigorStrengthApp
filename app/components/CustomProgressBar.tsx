import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar, useTheme } from "react-native-paper";
import { Colors, FontSize } from "../GlobalStyles";

type Size = "small" | "medium" | "large" | "xlarge";
type Props = {
  size?: Size;
  progress: number;
  color: string;
};

const CustomProgressBar = ({ color, progress, size = "xlarge" }: Props) => {
  const sizes = {
    small: {
      width: 80,
      height: 4,
      FontSize: 12,
    },
    medium: {
      width: 160,
      height: 6,
      FontSize: 14,
    },
    large: {
      width: 280,
      height: 8,
      FontSize: 16,
    },
    xlarge: {
      width: 361,
      height: 10,
      FontSize: 16,
    },
  };

  const selectedSize = sizes[size];

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.labelContent,
          size !== "xlarge" && styles.labelContentAlignRight,
        ]}
      >
        {size === "xlarge" && (
          <Text style={styles.programLabel}>Program Progress</Text>
        )}
        <Text
          style={[
            styles.progressLabel,
            { fontSize: selectedSize.FontSize, color: color },
            size !== "xlarge" && styles.progressLabelAlignRight,
          ]}
        >
          {progress}%
        </Text>
      </View>
      <ProgressBar
        progress={progress / 100}
        style={{
          width: selectedSize.width,
          height: selectedSize.height,
          backgroundColor: Colors.neutral800,
          borderRadius: selectedSize.height / 2,
        }}
        color={color}
        accessibilityLabel={`Progress bar with ${progress}% completion`}
      />
    </View>
  );
};

export default CustomProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    marginVertical: 10,
  },
  labelContentAlignRight: {
    justifyContent: "flex-end",
  },
  labelContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  programLabel: {
    fontSize: 14,
    marginLeft: 15,
    fontFamily: "IntegralCF",
    color: Colors.neutral500,
    textTransform: "uppercase",
  },
  progressLabelAlignRight: {
    marginRight: 0,
  },
  progressLabel: {
    marginRight: 15,
  },
});
