import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Colors } from "../../GlobalStyles";

type Props = {
  navigation: any;
  route: any;
};

const Nutrition = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarLabel}>Nutrition</Text>
      </View>
    </SafeAreaView>
  );
};

export default Nutrition;

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
