import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MusicListItem from "./components/MusicListItem";
import AudioProvider from "./context/AudioProvider";
import AppNavigator from "./navigation/AppNavigator";
import MusicList from "./screens/MusicList";

export default function App() {
  return (
    // <AudioProvider>
    //   <NavigationContainer>
    //     <AppNavigator />
    //   </NavigationContainer>
    // </AudioProvider>

    <MusicListItem />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
