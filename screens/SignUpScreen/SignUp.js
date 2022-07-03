import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  // const onRegisterPressed = () => {
  //   console.warn("onRegisterPressed");
  // };
  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
  }
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  }
  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  }
  const onSignInApple = () => {
    console.warn('onSignInApple');
  }
  // const onSignInPressed = () => {
  //   console.warn("onSignInPressed");
  // };
  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };
  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.root} >
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput placeholder="Username" value={userName} setValue={setUserName} />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
        <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />

        <CustomButton text="Register" onPress={() => navigation.navigate("SignIn")} />
        <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed} >Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>

        <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9" />
        <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
        <CustomButton text="Sign In with Apple" onPress={onSignInApple} bgColor="#e3e3e3" fgColor="#363636" />
        <CustomButton text="Have an account? Sign in" onPress={() => navigation.navigate("SignIn")} type="TERTIARY" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "#808080",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
})

export default SignUp