import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
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
      <ScrollView style={styles.content}>
        <View style={styles.timeLabelContainer}>
          <Text style={styles.timeLabel}>Today 1:29 PM</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Conversation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 56,
    paddingHorizontal: 16,
  },
  timeLabelContainer: {
    paddingTop: 18,
    paddingBottom: 12,
    alignItems: "center",
  },
  timeLabel: {
    fontSize: 10,
    lineHeight: 15,
    color: Colors.neutral300,
  },
});
