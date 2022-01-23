import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as MediaLibrary from "expo-media-library";

interface AudioProviderProps {}

const AudioProvider = (props: AudioProviderProps) => {
  const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    console.log(permission);
  };

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text>AudioProvider</Text>
    </View>
  );
};

export default AudioProvider;

const styles = StyleSheet.create({
  container: {},
});
