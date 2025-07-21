import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";

export default function AuthScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text>Create Account</Text>
        <TextInput
          placeholder="example@gmail.com"
          keyboardType="email-address"
        />
      </View>
    </KeyboardAvoidingView>
  );
}
