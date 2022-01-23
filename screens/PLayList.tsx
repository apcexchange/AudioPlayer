import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface PlayListProps {}

const PlayList = (_props: PlayListProps) => {
  return (
    <View style={styles.container}>
      <Text>PlayList</Text>
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  container: {},
});
