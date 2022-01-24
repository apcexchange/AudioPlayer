import React, { useContext } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import { AudioContext } from "../context/AudioProvider";
interface MusicListProps {
  //   music: string;r
}

const MusicList = (_props: MusicListProps) => {
  const audio = useContext(AudioContext);

  return (
    <FlatList
      data={audio}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.list}>{item.filename}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
    /* {audio.map((audio) => (
        <Text key={audio.id} style={styles.list}>
          {audio.filename}
        </Text>
      ))} */
  );
};

export default MusicList;

const styles = StyleSheet.create({
  list: { margin: 10, fontSize: 18 },
});
