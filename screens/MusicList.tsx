import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface MusicListProps {
  //   music: string;
}

const MusicList = (_props: MusicListProps) => {
  return (
    <View style={styles.container}>
      <Text>MusicList</Text>
    </View>
  );
};

export default MusicList;

const styles = StyleSheet.create({
  container: {},
});
