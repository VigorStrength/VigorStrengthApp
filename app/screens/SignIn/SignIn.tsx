import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Colors } from "../../GlobalStyles";
import CustomTextInput from "../../components/CustomTextInput";
import CustomDivider from "../../components/CustomDivider";
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";

type Props = {
  navigation: any;
  route: any;
};

const SignIn = ({ navigation }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <Icon source="chevron-left" size={24} color={Colors.orange100} />
        </TouchableOpacity>
        <Text style={styles.logoLabel}>LOGO</Text>
        <Icon source="help-circle-outline" size={24} color={Colors.orange100} />
      </View>
      <Text style={styles.contentHeaderLabel}>Let's Get Sexy</Text>
      <View style={styles.actionContent}>
        <CustomTextInput label="Email" />
        <CustomTextInput label="Password" style={styles.passwordInput} />
        <CustomDivider rightLabel="Forgot Password" />
        <CustomButton
          size="largeSignin"
          right="arrowRight"
          children="Sign In"
          onPress={handleSignIn}
        />
        <CustomDivider middleLabel="or" />
        <CustomButton size="large" left="apple" children="Sign in with Apple" />
        <CustomButton
          size="large"
          left="google"
          children="Sign In with Google"
          style={styles.lastButtonContainer}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 18,
    paddingHorizontal: 16,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoLabel: {
    fontSize: 20,
    lineHeight: 25,
    color: Colors.orange100,
    fontFamily: "IntegralCF-Bold",
  },
  contentHeaderLabel: {
    fontSize: 24,
    lineHeight: 30,
    marginTop: 45,
    marginLeft: 16,
    alignContent: "flex-start",
    color: Colors.neutral400,
    fontFamily: "IntegralCF-Bold",
    textTransform: "uppercase",
  },
  actionContent: {
    marginTop: 45,
    alignItems: "center",
  },
  passwordInput: {
    marginTop: 16,
  },
  lastButtonContainer: {
    marginTop: 16,
  },
});
