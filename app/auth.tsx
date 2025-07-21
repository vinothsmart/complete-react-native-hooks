import { KeyboardAvoidingView, Platform, Text, View } from "react-native";

export default function AuthScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome to Auth</Text>
      </View>
    </KeyboardAvoidingView>
  );
}
