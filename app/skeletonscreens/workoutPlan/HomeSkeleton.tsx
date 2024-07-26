import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

type Props = {};

const HomeSkeleton = (props: Props) => {
  return (
    <MotiView style={styles.container}>
      <Spacer height={18} />
      <Skeleton width="45%" height={20} />
      <Spacer height={16} />
      <Skeleton width="85%" height={318} radius={20} />
      <Spacer height={12} />
      <MotiView style={styles.labelsContainer}>
        <Skeleton width="68%" height={18} />
        <Skeleton width="50%" height={18} />
      </MotiView>
      <Spacer height={16} />
      <MotiView style={styles.cardsContainer}>
        <MotiView style={{ marginRight: -75 }}>
          <Skeleton width="68%" height={152} radius={20} />
          <Spacer />
          <Skeleton width="40%" height={10} />
        </MotiView>
        <MotiView>
          <Skeleton width="68%" height={152} radius={20} />
          <Spacer />
          <Skeleton width="55%" height={10} />
        </MotiView>
      </MotiView>
      <Spacer height={25} />
      <MotiView style={styles.labelsContainer}>
        <Skeleton width="68%" height={18} />
        <Skeleton width="50%" height={18} />
      </MotiView>
    </MotiView>
  );
};

const Spacer = ({ height = 8 }: { height?: number }) => {
  return <View style={{ height }} />;
};

export default HomeSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardsContainer: {
    flexDirection: "row",
  },
});
