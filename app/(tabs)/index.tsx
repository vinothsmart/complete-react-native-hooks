import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome React Native</Text>
      <Link style={styles.navButton} href="/auth">
        <Text style={styles.navButtonText}>Login Page</Text>
      </Link>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    width: 100,
    height: 20,
    backgroundColor: "coral",
    borderRadius: 8,
    textAlign: "center",
  },
  navButtonText: {
    color: "white",
    textAlign: "center",
    lineHeight: 20,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
});
