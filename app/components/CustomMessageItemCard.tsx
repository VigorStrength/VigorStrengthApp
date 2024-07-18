import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { CardProps } from "react-native-paper";
import { Colors } from "../GlobalStyles";
import Icon from "./Icon";
import CustomAvatar from "./CustomAvatar";

type Status = "read" | "unread";
interface Props extends TouchableOpacityProps {
  contactName: string;
  message: string;
  avatarUrl?: any;
  time: string;
  status: Status;
}

const CustomMessageItemCard = ({
  contactName,
  message,
  avatarUrl,
  time,
  status,
  ...props
}: Props) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.card}>
        <View
          style={[styles.content, , status === "read" && { paddingLeft: 24 }]}
        >
          <View style={[styles.contact]}>
            {status === "unread" ? (
              <Icon name="unread" fill={Colors.orange100} />
            ) : undefined}
            <CustomAvatar size="medium" avatarUrl={avatarUrl} />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.contactCardHeader}>
              <Text
                style={styles.contactName}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {contactName}
              </Text>
              <View style={styles.action}>
                <Text style={styles.timestamp}>{`${time}:00 AM`}</Text>
                <Icon
                  name={"chevronRight"}
                  width={32}
                  height={32}
                  fill={Colors.orange100}
                />
              </View>
            </View>
            <Text style={styles.message} numberOfLines={2} ellipsizeMode="tail">
              {message}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomMessageItemCard;

const styles = StyleSheet.create({
  card: {
    width: 393,
    // height: 64,
    borderRadius: 0,
    paddingVertical: 20,
    // backgroundColor: Colors.neutral900,
  },
  content: {
    flexDirection: "row",
    paddingRight: 16,
  },
  avatar: {
    marginLeft: 6,
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
    height: "100%",
  },
  contactCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactName: {
    flex: 1,
    fontSize: 20,
    fontFamily: "SatoshiBold",
    color: Colors.orange100,
  },
  message: {
    fontSize: 16,
    color: Colors.neutral350,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
  },
  timestamp: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.neutral400,
  },
});
