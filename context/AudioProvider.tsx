import React, { useEffect, createContext, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import * as MediaLibrary from "expo-media-library";

interface AudioProviderProps {}

export const AudioContext = createContext({});

const AudioProvider = ({ children }: string | any) => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [permissionError, setPermissionError] = useState(false);
  const [soundObject, setSoundObject] = useState(null);
  const [playBackObject, setPlayBackObject] = useState(null);
  const [currentAudio, setCurrentAudio] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  const permissionAlert = () => {
    Alert.alert(
      "Permission is required",
      "you need to give permission to be able to use this App",
      [
        {
          text: "give permission",
          onPress: () => request(),
        },
        {
          text: "cancel",
        },
      ]
    );
  };

  const request = async () => {
    await MediaLibrary.requestPermissionsAsync()
      .then((permission) => {
        console.log(permission);

        if (permission.granted) {
          getAudioFiles();
        }

        if (permission.status === "denied" && permission.canAskAgain) {
          permissionAlert();
        }

        if (!permission.granted && permission.canAskAgain) {
          request();
        }

        // if (!permission.granted && permission.canAskAgain) {
        //   permissionAlert();
        // }

        if (permission.status === "granted") {
          getAudioFiles();
        }

        if (permission.status === "denied" && !permission.canAskAgain) {
          setPermissionError(true);
          console.log(permissionError);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAudioFiles = async () => {
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    }).catch((error) => console.log(error));

    media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      first: media.totalCount,
    }).catch((error) => console.log(error));

    setAudioFiles(media.assets);
  };

  useEffect(() => {
    request();
  }, []);

  if (permissionError && permissionError) {
    return (
      <View style={styles.errorView}>
        <Text style={styles.error}>
          you have refused permission, you need to give acces for the App to
          read your music
        </Text>
      </View>
    );
  } else {
    return (
      <AudioContext.Provider
        value={{
          audioFiles,
          playBackObject,
          soundObject,
          currentAudio,
          isPlaying,
          setIsPlaying,
          setCurrentAudio,
          setSoundObject,
          setAudioFiles,
          setPlayBackObject,
        }}
      >
        {children}
      </AudioContext.Provider>
    );
  }
};

export default AudioProvider;

const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    margin: 10,
    padding: 10,
  },

  errorView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
