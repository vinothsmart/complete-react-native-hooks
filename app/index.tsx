import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome React Native</Text>
      <Link
        style={{
          width: 100,
          height: 50,
          backgroundColor: "coral",
          borderRadius: 8,
          textAlign: "center",
        }}
        href="/login"
      >
        Login Page
      </Link>
    </View>
  );
}
