import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Colors } from "../../GlobalStyles";
import CustomTextInput from "../../components/CustomTextInput";
import CustomDivider from "../../components/CustomDivider";
import CustomButton from "../../components/CustomButton";

type Props = {
  navigation: any;
  route: any;
};

const SignIn = ({ navigation }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "LOGO",
      headerBackTitleVisible: false,
      headerTintColor: Colors.orange100,
    });
  }, [navigation]);

  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  contentHeaderLabel: {
    fontSize: 24,
    lineHeight: 30,
    marginTop: 18,
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
