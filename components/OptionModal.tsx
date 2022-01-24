import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../assets/colors/Colors";

interface OptionModalProps {}

const OptionModal = ({
  visible,
  currentItem,
  onClose,
  onPressPlay,
  onPressPlayList,
  onPressDelete,
}) => {
  const { filename } = currentItem;

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modal}>
        <Text style={styles.title} numberOfLines={2}>
          {filename}
        </Text>
        <View style={styles.optionCointainer}>
          <TouchableWithoutFeedback onPress={onPressPlay}>
            <Text style={styles.option}>Play</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onPressPlayList}>
            <Text style={styles.option}>add to playList</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onPressDelete}>
            <Text style={styles.option}>delete</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBg} />
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default OptionModal;

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: Colors.WHITE,
    zIndex: 1000,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  modalBg: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.1)",
  },

  optionCointainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    paddingBottom: 0,
  },

  option: {
    fontSize: 18,
    padding: 10,
  },
});
