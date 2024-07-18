import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";
import { icons } from "../utils/constants/icons";
import Icon from "./Icon";
import { Colors } from "../GlobalStyles";
import CustomDivider from "./CustomDivider";

type IconName = keyof typeof icons;
type Props = {
  left: IconName;
  label: string;
};

const AccountAction = ({ left, label }: Props) => {
  return (
    <>
      <CustomDivider />
      <View style={styles.actionsContent}>
        <TouchableOpacity style={styles.container}>
          <View style={styles.content}>
            <Icon name={left} width={44} height={44} fill={Colors.orange100} />
            <View style={styles.labelContainer}>
              <Text style={styles.label}>{label}</Text>
              <Icon
                name="chevronRight"
                width={44}
                height={44}
                fill={Colors.orange100}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <CustomDivider />
    </>
  );
};

export default AccountAction;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
  },
  actionsContent: {
    marginVertical: 16,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    fontFamily: "SatoshiBold",
    textTransform: "capitalize",
    color: Colors.orange100,
  },
  labelContainer: {
    flex: 1,
    marginLeft: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
