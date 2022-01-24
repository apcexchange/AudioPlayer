import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../assets/colors/Colors";

interface MusicListItemProps {}

const { height, width } = Dimensions.get("screen");

const getThumbnailText = (filename: string) => filename[0];

const convertTime = (minutes) => {
  if (minutes) {
    const hrs = minutes / 60;
    const minute = hrs.toString().split(".")[0];
    const percent = parseInt(hrs.toString().split(".")[1].slice(0, 2));
    const sec = Math.ceil((60 * percent) / 100);

    if (parseInt(minute) < 10 && sec < 10) {
      return `0${minute}:0${sec}`;
    }
    if (parseInt(minute) < 10) {
      return `0${minute}:${sec}`;
    }

    if (sec < 10) {
      return `${minute}:0${sec}`;
    }
    return `${minute}:${sec}`;
  }
};
const MusicListItem = ({ title, duration, onPress, onAudioPress }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onAudioPress}>
          <View style={styles.subContainer}>
            <View style={styles.thumbnailContainer}>
              <Text style={styles.thumbnail}> {getThumbnailText(title)} </Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
              <Text style={styles.time}>{convertTime(duration)}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.icon}>
          <Entypo
            name="dots-three-vertical"
            size={20}
            color="black"
            onPress={onPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center",
    alignSelf: "center",
    marginVertical: 10,
    width: width - 40,
  },
  thumbnail: {
    fontSize: 25,
    color: Colors.WHITE,
  },
  thumbnailContainer: {
    backgroundColor: "grey",
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
  },
  time: {
    fontSize: 14,
    color: Colors.LIGHT_GRAY,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: {
    marginLeft: 15,
    width: width - 160,
  },
  icon: {
    padding: 8,
  },
});
