import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Colors } from "../../GlobalStyles";
import Icon from "../../components/Icon";
import CustomTopBar from "../../components/CustomTopBar";
import CustomSearchBar from "../../components/CustomSearchBar";
import CustomMessageItemCard from "../../components/CustomMessageItemCard";
import CustomDivider from "../../components/CustomDivider";

type Props = {
  navigation: any;
};

const Messages = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomTopBar label="Messages" iconName="newMessage" />
      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <CustomSearchBar size="large" value="" />
        </View>
        <View style={styles.messagesContainer}>
          <CustomMessageItemCard
            contactName="Koala Honey Wife 🐨🍯💍"
            message="I'll call you sometime soon so we can talk okay?"
            time="10"
            avatarUrl={require("../../../assets/koala-honey-wife.jpeg")}
            status="read"
            children=""
          />
          <CustomDivider style={styles.divider} />
          <CustomMessageItemCard
            contactName="Fbd🍀"
            message="Hey you :))"
            time="10"
            avatarUrl={require("../../../assets/koala-honey-wife.jpeg")}
            status="unread"
            children=""
          />
          <CustomDivider style={styles.divider} />
          <CustomMessageItemCard
            contactName="Lorem Ipsum"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            time="10"
            avatarUrl={require("../../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg")}
            status="read"
            children=""
          />
          <CustomDivider style={styles.divider} />
          <CustomMessageItemCard
            contactName="Lorem Ipsum"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            time="10"
            avatarUrl={require("../../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg")}
            status="unread"
            children=""
          />
          <CustomDivider style={styles.divider} />
          <CustomMessageItemCard
            contactName="Lorem Ipsum"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            time="10"
            avatarUrl={require("../../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg")}
            status="read"
            children=""
          />
          <CustomDivider style={styles.divider} />
          <CustomMessageItemCard
            contactName="Lorem Ipsum"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            time="10"
            avatarUrl={require("../../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg")}
            status="unread"
            children=""
          />
          <CustomDivider style={styles.divider} />
          <CustomMessageItemCard
            contactName="Lorem Ipsum"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            time="10"
            avatarUrl={require("../../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg")}
            status="unread"
            children=""
          />
          <CustomDivider style={styles.divider} />
          <CustomMessageItemCard
            contactName="Lorem Ipsum"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            time="10"
            avatarUrl={require("../../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg")}
            status="unread"
            children=""
          />
          <CustomDivider style={styles.divider} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 54,
  },
  searchContainer: {
    padding: 16,
  },
  messagesContainer: {
    paddingTop: 2,
  },
  divider: {
    paddingLeft: 84,
  },
});
