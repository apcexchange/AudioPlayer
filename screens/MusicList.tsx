import React, { useContext } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { AudioContext } from "../context/AudioProvider";
interface MusicListProps {
  //   music: string;r
}

const MusicList = (_props: MusicListProps) => {
  const audio = useContext(AudioContext);
  console.log("item logged:", audio);

  return (
    <ScrollView>
      {audio.map((audio) => (
        <Text key={audio.id} style={styles.list}>
          {audio.filename}
        </Text>
      ))}
    </ScrollView>
  );
};

export default MusicList;

const styles = StyleSheet.create({
  list: { margin: 10, fontSize: 18 },
});
