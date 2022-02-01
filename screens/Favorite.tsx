import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface FavoriteProps {}

const Favorite = (_props: FavoriteProps) => {
  return (
    <View style={styles.container}>
      <Text>Favorite</Text>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {},
});
