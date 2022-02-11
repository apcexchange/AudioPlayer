import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MusicList from "../screens/MusicList";
import Player from "../screens/Player";
import PlayList from "../screens/PLayList";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import Favorite from "../screens/Favorite";

interface AppNavigatorProps {}

const { Screen, Navigator } = createBottomTabNavigator();

const AppNavigator = (props: AppNavigatorProps) => {
  return (
    <Navigator>
      <Screen
        name="musicList"
        component={MusicList}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <MaterialIcons name="headset" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="player"
        component={Player}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <FontAwesome5 name="compact-disc" size={size} color={color} />
            );
          },
        }}
      />
      <Screen
        name="favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialIcons name="favorite-border" size={size} color={color} />
            );
          },
        }}
      />
      <Screen
        name="playlist"
        component={PlayList}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="playlist-music"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
  
  },
});
