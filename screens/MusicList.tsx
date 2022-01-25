import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import MusicListItem from "../components/MusicListItem";
import OptionModal from "../components/OptionModal";
import { AudioContext } from "../context/AudioProvider";
import { Audio } from "expo-av";

interface MusicListProps {
  //   music: string;r
}

const MusicList = (_props: MusicListProps) => {
  const audio = useContext(AudioContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [soundObject, setSoundObject] = useState(null);
  const [playBackObject, setPlayBackObject] = useState(null);
  const [currentAudio, setCurrentAudio] = useState({});

  const onPressPlay = () => {
    console.log("onPressPlay");
  };

  const onPressDelete = () => {
    alert(`do you wannt to delete this music`);
  };

  const onPressPlayList = () => {
    console.log("onPressPlayList");
  };

  async function handleAudioPress(audio) {
    //firts time play
    if (soundObject === null) {
      const playBackObject = new Audio.Sound();
      const status = await playBackObject
        .loadAsync({ uri: audio.uri }, { shouldPlay: true })
        .catch((error) => {});
      setPlayBackObject(playBackObject);
      setSoundObject(status);
      setCurrentAudio(audio);
      return;
    }

    // pause
    if (soundObject.isLoaded && soundObject.isPlaying) {
      const status = await playBackObject.setStatusAsync({ shouldPlay: false });
      setSoundObject(status);
    }

    //resume

    if (
      soundObject.isLoaded &&
      !soundObject.isPlaying &&
      currentAudio.id === audio.id
    ) {
      const status = await playBackObject.playAsync();
      setSoundObject(status);
    }
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
              onAudioPress={() => handleAudioPress(item)}
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
