import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Colors } from "../../GlobalStyles";
import Icon from "../../components/Icon";
import CustomTopBar from "../../components/CustomTopBar";

type Props = {};

const Messages = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomTopBar label="Messages" iconName="newMessage" />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  appBarLabel: {
    fontSize: 24,
    lineHeight: 25,
    color: Colors.orange100,
    fontFamily: "IntegralCF-Bold",
  },
});
