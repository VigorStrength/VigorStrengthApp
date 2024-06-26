import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar, useTheme } from "react-native-paper";
import { Colors, FontSize } from "../GlobalStyles";

type Size = "small" | "medium" | "large" | "xlarge";
type Props = {
  size?: Size;
  progress: number;
};

const CustomProgressBar = ({ progress, size = "xlarge" }: Props) => {
  const { colors } = useTheme();

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
      FontSize: 18,
    },
  };

  const selectedSize = sizes[size];

  return (
    <View style={styles.container}>
      <Text style={[styles.progressLabel, { fontSize: selectedSize.FontSize }]}>
        {progress}%
      </Text>
      <ProgressBar
        progress={progress / 100}
        style={{
          width: selectedSize.width,
          height: selectedSize.height,
          backgroundColor: Colors.neutral800,
          borderRadius: selectedSize.height / 2,
        }}
        color={colors.primary}
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
  progressLabel: {
    width: "100%",
    marginBottom: 8,
    textAlign: "right",
    color: Colors.orange100,
  },
});
