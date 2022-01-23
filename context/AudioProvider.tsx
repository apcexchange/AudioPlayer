import React, { useEffect, createContext } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { getPermissionsAsync } from "expo-media-library";

interface AudioProviderProps {}

const AudioContext = createContext({});

const AudioProvider = ({ children }: any) => {
  const permissionAlert = () => {
    Alert.alert(
      "Permission is required",
      "you need to give permission to be able to use this App",
      [
        {
          text: "give permission",
          onPress: () => getPermission(),
        },
        {
          text: "cancel",
          onPress: () => permissionAlert(),
        },
      ]
    );
  };

  const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    console.log(permission);
    if (permission.granted) {
      //get all file
      getAudioFiles();
    }
    if (!permission.granted && permission.canAskAgain) {
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();

      if (status === "denied" && canAskAgain) {
        permissionAlert();
      }

      if (status === "granted") {
        //get all files
        getAudioFiles();
      }

      if (status === "denied" && !canAskAgain) {
        Alert.alert("You cannot use this App without the permissions");
        getPermission();
      }
    }
  };

  const getAudioFiles = async () => {
    const media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    });
    console.log(media);
  };

  useEffect(() => {
    getPermission();
  }, []);

  return <AudioContext.Provider value={[]}>{children}</AudioContext.Provider>;
};

export default AudioProvider;

const styles = StyleSheet.create({
  container: {},
});
