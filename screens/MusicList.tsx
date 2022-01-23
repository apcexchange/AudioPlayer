import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as MediaLibrary from "expo-media-library";

interface MusicListProps {
  //   music: string;r
}

const MusicList = (_props: MusicListProps) => {
  const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    console.log(permission);
  };

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text>MusicList</Text>
    </View>
  );
};

export default MusicList;

const styles = StyleSheet.create({
  container: {},
});
