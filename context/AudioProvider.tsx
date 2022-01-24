import React, { useEffect, createContext, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import * as MediaLibrary from "expo-media-library";

interface AudioProviderProps {}

export const AudioContext = createContext({});

const AudioProvider = ({ children }: string | any) => {
  const [audioFiles, setAudioFiles] = useState([]);

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
          onPress: () => permissionAlert(),
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

        if (!permission.granted && permission.canAskAgain) {
          request();

          if (permission.status === "denied" && permission.canAskAgain) {
            permissionAlert();
          }

          if (permission.status === "granted") {
            getAudioFiles();
          }

          if (permission.status === "denied" && !permission.canAskAgain) {
            Alert.alert("You cannot use this App without the permissions");
          }
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
    // console.log(media.assets.length);

    setAudioFiles(media.assets);
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <AudioContext.Provider value={audioFiles}>{children}</AudioContext.Provider>
  );
};

export default AudioProvider;
