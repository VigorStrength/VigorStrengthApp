import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../GlobalStyles";
import CustomTopBar from "../../components/CustomTopBar";
import CustomAvatar from "../../components/CustomAvatar";
import AccountAction from "../../components/AccountAction";
import CustomDivider from "../../components/CustomDivider";

type Props = {};

const Account = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomTopBar />
      <View style={styles.content}>
        <View style={styles.account}>
          <Text style={styles.accountName}>armel hell</Text>
          <CustomAvatar size="xlarge" />
        </View>
        <AccountAction left="editProfile" label="Edit Profile" />
        <AccountAction left="settings" label="Settings" />
        <AccountAction left="privacy" label="Privacy Policy" />
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
  account: {
    marginTop: 48,
    marginBottom: 64,
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accountName: {
    fontSize: 24,
    fontFamily: "SatoshiStrong",
    textTransform: "capitalize",
    color: Colors.neutral600,
  },
});
