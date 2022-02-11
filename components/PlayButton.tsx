import AntDesign from "@expo/vector-icons/build/AntDesign";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface PlayButtonProps {
  iconType: string;
  size: number;
  color: string;
  onPress: () => void;
}

const PlayButton = (props: PlayButtonProps) => {
  const { iconType, onPress, size = 40, color = "black" } = props;

  const getIconName = (type: string) => {
    switch (type) {
      case "PLAY":
        return "pausecircle";
      case "PAUSE":
        return "playcircleo";
      case "NEXT":
        return "forward";
      case "PREV":
        return "banckward";
    }
  };

  return (
    <AntDesign
      {...props}
      name={getIconName(iconType)}
      size={size}
      color={color}
      onPress={onPress}
    />
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  container: {},
});
