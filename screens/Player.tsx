import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface PlayerProps {}

const Player = () => {
  return (
    <View style={styles.container}>
      <Text>Player</Text>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {},
});
