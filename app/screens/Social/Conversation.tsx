import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomTopBar from "../../components/CustomTopBar";
import { Colors } from "../../GlobalStyles";
import CustomAvatar from "../../components/CustomAvatar";
import { useRoute } from "@react-navigation/native";
import MessageContactHeader from "../../components/MessageContactHeader";

type Props = {
  navigation?: any;
};

type RouteParams = {
  contactName: string;
  avatarUrl?: any;
};

const Conversation = ({ navigation }: Props) => {
  const route = useRoute();
  const { contactName, avatarUrl } = route.params as RouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <CustomTopBar
        variant="message"
        navigation={navigation}
        label={
          <MessageContactHeader
            contactName={contactName}
            avatarUrl={avatarUrl}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Conversation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contact: {},
  contactName: {
    fontSize: 10,
    fontFamily: "SatoshiBold",
    color: Colors.orange100,
  },
  contactHeader: {
    height: 80,
  },
});
