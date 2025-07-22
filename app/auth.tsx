import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

const AuthScreen = () => {
  const [isSingup, setIsSignup] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const theme = useTheme();
  const router = useRouter();

  const { signIn, signUp } = useAuth();

  const handleAuth = async () => {
    if (!userDetails.email || !userDetails.password) {
      setError("Please fill the fields");
      return;
    }
    if (userDetails.password.length < 6) {
      setError("Passwords must be at least 6 characters long");
      return;
    }
    setError("");
    if (isSingup) {
      const error = await signUp(userDetails.email, userDetails.password);
      if (error) {
        setError(error);
        return;
      }
    } else {
      const error = await signIn(userDetails.email, userDetails.password);
      if (error) {
        setError(error);
        return;
      }
      router.replace("/");
    }
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
          secureTextEntry
          onChangeText={handleInputChange("password")}
        />
        {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}
        <Button style={styles.button} mode="contained" onPress={handleAuth}>
          {isSingup ? "Sign Up" : "Sign In"}
        </Button>
        <Button
          style={styles.switchModeButton}
          mode="text"
          onPress={handleSwitchMode}
        >
          {isSingup
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

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
