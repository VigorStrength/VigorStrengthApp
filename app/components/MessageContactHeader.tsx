import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../GlobalStyles";
import CustomAvatar from "./CustomAvatar";

type Props = {
  avatarUrl?: any;
  contactName: string;
};

const MessageContactHeader = ({ avatarUrl, contactName }: Props) => {
  return (
    <View style={styles.container}>
      <CustomAvatar avatarUrl={avatarUrl} />
      {contactName && <Text style={styles.contactName}>{contactName}</Text>}
    </View>
  );
};

export default MessageContactHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  contactName: {
    fontSize: 10,
    marginTop: 4,
    fontFamily: "SatoshiBold",
    color: Colors.orange100,
  },
});
