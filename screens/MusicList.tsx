import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import MusicListItem from "../components/MusicListItem";
import OptionModal from "../components/OptionModal";
import { AudioContext } from "../context/AudioProvider";
interface MusicListProps {
  //   music: string;r
}

const MusicList = (_props: MusicListProps) => {
  const audio = useContext(AudioContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const onPressPlay = () => {
    console.log("onPressPlay");
  };

  const onPressDelete = () => {
    alert(`do you wannt to delete this music`);
  };

  const onPressPlayList = () => {
    console.log("onPressPlayList");
  };

  function handleAudioPress() {
    console.log("onAudio...");
  }

  return (
    <>
      <FlatList
        data={audio}
        renderItem={({ item }) => {
          return (
            <MusicListItem
              title={item.filename}
              duration={item.duration}
              onPress={() => {
                setCurrentItem(item);
                setModalVisible(true);
              }}
              onAudioPress={handleAudioPress}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <OptionModal
        onPressPlay={onPressPlay}
        onPressDelete={onPressDelete}
        onPressPlayList={onPressPlayList}
        currentItem={currentItem}
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      />
    </>
  );
};

export default MusicList;

const styles = StyleSheet.create({
  list: { margin: 10, fontSize: 18 },
});
