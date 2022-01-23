import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MusicList from "../screens/MusicList";
import Player from "../screens/Player";
import PlayList from "../screens/PLayList";

interface AppNavigatorProps {}

const { Screen, Navigator } = createBottomTabNavigator();

const AppNavigator = (props: AppNavigatorProps) => {
  return (
    <Navigator>
      <Screen name="musicList" component={MusicList} />
      <Screen name="player" component={Player} />
      <Screen name="playlist" component={PlayList} />
    </Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {},
});
