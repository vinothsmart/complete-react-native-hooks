import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function AuthScreen() {
  const [isSingup, setIsSignup] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleAuth = async () => {
    // setUserDetails((prev) => ({
    //   ...prev,
    // }));
  };

  const handleInputChange =
    (key: keyof typeof userDetails) => (value: string) => {
      setUserDetails((prev) => ({
        ...prev,
        [key]: value,
      }));
    };

  const handleSwitchMode = () => {
    setIsSignup((prev) => !prev);
  };

  console.log(userDetails);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title} variant="headlineMedium">
          {isSingup ? "Create Account" : "Welcome Back"}
        </Text>
        <TextInput
          style={styles.input}
          label="Email"
          autoCapitalize="none"
          placeholder="example@gmail.com"
          keyboardType="email-address"
          mode="outlined"
          onChangeText={handleInputChange("email")}
        />
        <TextInput
          style={styles.input}
          label="Password"
          autoCapitalize="none"
          mode="outlined"
          onChangeText={handleInputChange("password")}
        />
        <Button style={styles.button} mode="contained">
          {isSingup ? "Sign Up" : "Sign In"}
        </Button>
        <Button style={styles.switchModeButton} mode="text">
          {isSingup
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  switchModeButton: {
    marginTop: 16,
  },
});
