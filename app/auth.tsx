import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function AuthScreen() {
  const [isSingup, setIsSignup] = useState();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text>{isSingup ? "Create Account" : "Welcome Back"}</Text>
        <TextInput
          label="Email"
          autoCapitalize="none"
          placeholder="example@gmail.com"
          keyboardType="email-address"
          mode="outlined"
        />
        <TextInput label="Password" autoCapitalize="none" mode="outlined" />
        <Button mode="contained">{isSingup ? "Sign Up" : "Sign In"}</Button>
        <Button mode="text">
          {isSingup
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
