import { StyleSheet, Text, View } from "react-native";
import {
  Video,
  ResizeMode,
  AVPlaybackStatus,
  AVPlaybackStatusSuccess,
} from "expo-av";
import React, { useRef, useState } from "react";
import { Colors } from "../../GlobalStyles";
import Icon from "../../components/Icon";

type Props = {
  workout: any;
};

const WorkoutPlayer = ({ workout }: Props) => {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);

  const handlePlayPause = () => {
    if (status && status.isLoaded) {
      if ((status as AVPlaybackStatusSuccess).isPlaying) {
        videoRef.current?.pauseAsync();
      } else {
        videoRef.current?.playAsync();
      }
    }
  };

  console.log(workout);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: workout.videoURL }}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.controlPanel}>
        <View style={styles.controlHeader}>
          <Text style={styles.exerciseTitle}>{workout?.name}</Text>
        </View>
        <View style={styles.controls}>
          <Icon
            name="moreHorizontal"
            width={44}
            height={44}
            fill={Colors.neutral350}
          />
          <Icon
            name="skipBack"
            width={44}
            height={44}
            fill={Colors.neutral350}
            onPress={handlePlayPause}
          />
          <Icon
            name={
              (status as AVPlaybackStatusSuccess)?.isPlaying
                ? "pauseFilled"
                : "playFilled"
            }
            width={62}
            height={62}
            fill={Colors.orange100}
            onPress={handlePlayPause}
          />
          <Icon
            name="skipForward"
            width={44}
            height={44}
            fill={Colors.neutral350}
          />
          <Icon
            name={
              (status as AVPlaybackStatusSuccess)?.isMuted
                ? "enableAudio"
                : "disableAudio"
            }
            width={44}
            height={44}
            fill={Colors.neutral350}
          />
        </View>
      </View>
    </View>
  );
};

export default WorkoutPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  video: {
    width: "100%",
    height: 446,
  },
  controlPanel: {
    position: "absolute",
    bottom: 0,
    height: 175,
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  exerciseTitle: {
    fontSize: 20,
    fontFamily: "Satoshi",
    color: Colors.orange100,
  },
  controlHeader: {
    paddingHorizontal: 16,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    width: "100%",
    height: 62,
    marginTop: 18,
  },
});
