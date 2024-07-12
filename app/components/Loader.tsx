import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";
import { Colors } from "../GlobalStyles";

type Props = {
  size?: number | "small" | "large";
  animating?: boolean;
  hidesWhenStopped?: boolean;
  style?: any;
};

const Loader = (props: Props) => {
  return <ActivityIndicator color={Colors.orange100} {...props} />;
};

export default Loader;
