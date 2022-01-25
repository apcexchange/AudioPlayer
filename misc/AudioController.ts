//play

import { Sound } from "expo-av/build/Audio";

export const play = async (playBackObject: Sound, uri: string) => {
  try {
    return await playBackObject.loadAsync({ uri }, { shouldPlay: true });
  } catch (error) {
    console.log("error playing", error);
  }
};

//pause
export const pause = async (playBackObject: {
  setStatusAsync: (arg0: { shouldPlay: boolean }) => any;
}) => {
  try {
    return await playBackObject.setStatusAsync({ shouldPlay: false });
  } catch (error) {
    console.log("error pausing", error);
  }
};

//resume
export const resume = async (playBackObject: { playAsync: () => any }) => {
  try {
    return await playBackObject.playAsync();
  } catch (error) {
    console.log("error pausing", error);
  }
};

//select new music

export const playNext = async (
  playBackObject: { stopAsync: () => any; unloadAsync: () => any },
  uri: string
) => {
  try {
    await playBackObject.stopAsync();
    await playBackObject.unloadAsync();
    return await play(playBackObject, uri);
  } catch (error) {
    console.log("error selecting Next", error);
  }
};
