import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import MusicListItem from "../components/MusicListItem";
import OptionModal from "../components/OptionModal";
import { AudioContext } from "../context/AudioProvider";
import { Audio } from "expo-av";
import { pause, play, playNext, resume } from "../misc/AudioController";

interface MusicListProps {
  //   music: string;r
}

const MusicList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  //   const [soundObject, setSoundObject] = useState(null);
  //   const [playBackObject, setPlayBackObject] = useState(null);
  //   const [currentAudio, setCurrentAudio] = useState({});

  // const audio = useContext(AudioContext);
  const {
    audioFiles,
    currentAudio,
    playBackObject,
    soundObject,
    setSoundObject,
    setPlayBackObject,
    setCurrentAudio,
  } = useContext(AudioContext);

  console.log(currentAudio);
  const onPressPlay = () => {
    console.log("onPressPlay");
  };

  const onPressDelete = () => {
    alert(`do you wannt to delete this music`);
  };

  const onPressPlayList = () => {
    console.log("onPressPlayList");
  };

  async function handleAudioPress(audioFiles) {
    try {
      //firts time play
      if (soundObject === null) {
        const playBackObject = new Audio.Sound();
        const status = await play(playBackObject, audioFiles.uri);
        setPlayBackObject(playBackObject);
        setSoundObject(status);
        setCurrentAudio(audioFiles);
        return;
      }

      // pause
      if (soundObject.isLoaded && soundObject.isplaying) {
        const status = await pause(playBackObject);
        setSoundObject(status);
      }

      //resume

      if (soundObject.isLoaded && !soundObject.isPlaying) {
        const status = await resume(playBackObject);
        setSoundObject(status);
      }

      //select another audio file

      if (soundObject.isLoaded && currentAudio.id !== audioFiles.id) {
        const status = await playNext(playBackObject, audioFiles.uri);
        setSoundObject(status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <FlatList
        data={audioFiles}
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
