import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Colors } from "../../GlobalStyles";
import Icon from "../../components/Icon";

type Props = {};

const Messages = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarLabel}>Messages</Text>
        <Icon
          name="newMessage"
          width={40}
          height={40}
          fill={Colors.orange100}
        />
      </View>
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
