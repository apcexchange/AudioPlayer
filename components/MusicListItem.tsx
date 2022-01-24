import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface MusicListItemProps {}

const { height, width } = Dimensions.get("screen");

const MusicListItem = (props: MusicListItemProps) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.thumbnailContainer}>
          <Text style={styles.thumbnail}> A </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>this is the title of the music</Text>
        </View>
        <View>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width / 3,
  },
  thumbnail: {
    fontSize: 30,
  },
  thumbnailContainer: {
    backgroundColor: "red",
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
  },
});
