import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  scrollY: any;
};

const ShrinkingHeader = ({ scrollY }: Props) => {
  return (
    <View>
      <Text>ShrinkingHeader</Text>
    </View>
  );
};

export default ShrinkingHeader;

const styles = StyleSheet.create({});
