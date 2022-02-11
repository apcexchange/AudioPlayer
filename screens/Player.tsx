import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import Slider from "@react-native-community/slider";
import React, { useContext } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import PlayButton from "../components/PlayButton";
import { AudioContext } from "../context/AudioProvider";

const { width } = Dimensions.get("window");
interface PlayerProps {}

const Player = () => {
  const handlePress = () => {
    console.log("pressed");
  };

  const { totalCount } = useContext(AudioContext);

  return (
    <View style={styles.container}>
      <View style={styles.audioCountContainer}>
        <Text style={styles.audioCount}>`1/{totalCount}`</Text>
      </View>
      <View style={styles.midBannerContainer}>
        <MaterialCommunityIcons name="music-circle" size={300} color="black" />
      </View>
      <View style={styles.audioContainer}>
        <Text style={styles.currentlyplaying} numberOfLines={1}>
          Titel of the song
        </Text>
        <View style={styles.sliderContainer}>
          <Text> 4:00 </Text>
          <Slider
            style={{ width: width - 120, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
          />
          <Text> 4:00 </Text>
        </View>
        <View style={styles.controlContainer}>
          <PlayButton
            iconType="PREV"
            onPress={handlePress}
            style={{ marginHorizontal: 15 }}
          />
          <PlayButton iconType="PLAY" style={{ marginHorizontal: 15 }} />
          <PlayButton iconType="NEXT" style={{ marginHorizontal: 15 }} />
        </View>
      </View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  audioCountContainer: {},
  audioCount: {
    textAlign: "right",
    padding: 10,
  },
  midBannerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  audioContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  currentlyplaying: {
    fontSize: 16,
    padding: 15,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  controlContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
});
