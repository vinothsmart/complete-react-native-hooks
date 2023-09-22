import React, { memo } from "react";
import { Text, StyleSheet } from "react-native";

const CompoentsScreen = () => {
  return <Text style={styles.textStyle}>This is the components screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default memo(CompoentsScreen);
