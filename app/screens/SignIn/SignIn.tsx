import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../GlobalStyles";
import CustomTextInput from "../../components/CustomTextInput";
import CustomDivider from "../../components/CustomDivider";
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon as RNIcon } from "react-native-paper";
import Icon from "../../components/Icon";
import { useLogin } from "../../hooks/Authentication/useLogin";
import Loader from "../../components/Loader";

type Props = {
  navigation: any;
  route: any;
};

const SignIn = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userSignIn, data, error, isPending } = useLogin({ navigation });

  const handleSignIn = () => {
    userSignIn({ email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Icon
          onPress={() => navigation.navigate("Welcome")}
          name="chevronLeft"
          width={44}
          height={44}
          fill={Colors.orange100}
        />
        <Text style={styles.logoLabel}>LOGO</Text>
        <RNIcon
          source="help-circle-outline"
          size={24}
          color={Colors.orange100}
        />
      </View>
      <Text style={styles.contentHeaderLabel}>Let's Get Sexy</Text>
      <View style={styles.actionContent}>
        <CustomTextInput
          label="Email"
          value={email}
          onChangeText={(input) => setEmail(input)}
        />
        <CustomTextInput
          label="Password"
          secureTextEntry={true}
          style={styles.passwordInput}
          value={password}
          onChangeText={(input) => setPassword(input)}
        />
        <CustomDivider rightLabel="Forgot Password" />
        <CustomButton
          size="largeSignin"
          right="arrowRight"
          children={isPending ? <Loader /> : "Sign In"}
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
    width: 320,
  },
  lastButtonContainer: {
    marginTop: 16,
  },
});
