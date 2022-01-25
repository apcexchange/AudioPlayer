//play

export const play = async (playBackObject, uri) => {
  try {
    return await playBackObject.loadAsync({ uri }, { shouldPlay: true });
  } catch (error) {
    console.log("error playing", error.message);
  }
};

//pause
export const pause = async (playBackObject, uri) => {
  try {
    return await playBackObject.setStatusAsync({ uri }, { shouldPlay: false });
  } catch (error) {
    console.log("error pausing", error.message);
  }
};

//resume
export const resume = async (playBackObject) => {
  try {
    return await playBackObject.playAsync();
  } catch (error) {
    console.log("error pausing", error.message);
  }
};

//select new music

export const playNext = async (playBackObject, uri) => {
  try {
    await playBackObject.stopAsync();
    await playBackObject.unloadAsync();
    return await play(playBackObject, uri);
  } catch (error) {
    console.log("error selecting Next", error.message);
  }
};
