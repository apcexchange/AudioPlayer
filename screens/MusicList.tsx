import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import MusicListItem from "../components/MusicListItem";
import OptionModal from "../components/OptionModal";
import { AudioContext } from "../context/AudioProvider";
import { Audio } from "expo-av";
import { pause, play, playNext, resume } from "../misc/AudioController";
import { Entypo } from "@expo/vector-icons";

interface MusicListProps {
  //   music: string;r
}

const MusicList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const {
    audioFiles,
    currentAudio,
    selectedId,
    soundObject,
    isPlaying,
    setIsPlaying,
    playBackObject,
    setSoundObject,
    setCurrentAudio,
    setPlayBackObject,
    setSelectedId,
  } = useContext(AudioContext);

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

        setSoundObject(status);
        setCurrentAudio(audioFiles);
        setPlayBackObject(playBackObject);
        setIsPlaying(true);
        setSelectedId(audioFiles.id);
        return;
      }

      if (
        soundObject.isLoaded &&
        !soundObject.isPlaying &&
        currentAudio.id === audioFiles.id
      ) {
        const status = await resume(playBackObject);
        setSoundObject(status);
        setIsPlaying(true);
      }

      if (
        soundObject.isLoaded &&
        soundObject.isPlaying &&
        currentAudio.id === audioFiles.id
      ) {
        const status = await pause(playBackObject);
        setSoundObject(status);
        setIsPlaying(false);
      }
      if (soundObject.isLoaded && currentAudio.id !== audioFiles.id) {
        const status = await playNext(playBackObject, audioFiles.uri);

        setSoundObject(status);
        setCurrentAudio(audioFiles);
        setIsPlaying(true);
        setSelectedId(audioFiles.id);
      }

      if (soundObject.didJustFinish) {
        const status = await playNext(playBackObject, audioFiles.uri);
        setSoundObject(status);
        setCurrentAudio(audioFiles);
        setIsPlaying(true);
        setSelectedId(audioFiles.id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // const name = item.name === selectedIndex ? item.name : "nnnnnn"
  const getThumbnailText = (filename: string) => filename[0];

  const renderPlayPauseIcon = (isPlaying) => {
    if (isPlaying) {
      return <Entypo name="controller-play" size={20} color="black" />;
    } else {
      return <Entypo name="controller-paus" size={20} color="black" />;
    }
  };

  return (
    <>
      <FlatList
        data={audioFiles}
        renderItem={({ item }) => {
          return (
            <MusicListItem
              isPlaying={isPlaying}
              title={item.filename}
              duration={item.duration}
              thumbnail={
                item.id === selectedId
                  ? renderPlayPauseIcon(isPlaying)
                  : getThumbnailText(item.filename)
              }
              onPress={() => {
                setCurrentItem(item);
                setModalVisible(true);
              }}
              onAudioPress={() => handleAudioPress(item)}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
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
