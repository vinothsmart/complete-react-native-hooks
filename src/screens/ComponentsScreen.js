import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = { color: "red" };
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text> {greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default memo(ComponentsScreen);
