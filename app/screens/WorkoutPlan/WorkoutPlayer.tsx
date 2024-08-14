import { StyleSheet, Text, View } from "react-native";
import {
  Video,
  ResizeMode,
  AVPlaybackStatus,
  AVPlaybackStatusSuccess,
} from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import {
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Slider } from "react-native-awesome-slider";
import { Colors } from "../../GlobalStyles";
import Icon from "../../components/Icon";
import {
  formatMillisecondsToMinutes,
  formatSecondsToMinutes,
} from "../../utils/helpers";

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

  const handleSeek = (value: number) => {
    if (
      videoRef.current &&
      status &&
      (status as AVPlaybackStatusSuccess)?.isLoaded
    ) {
      const duration = (status as AVPlaybackStatusSuccess)?.durationMillis;
      if (duration !== undefined) {
        videoRef.current?.setPositionAsync(value * duration);
      }
    }
  };

  const progress = useSharedValue(
    (status as AVPlaybackStatusSuccess)?.positionMillis || 0
  );
  let min = useSharedValue(0);
  let max = useSharedValue(
    (status as AVPlaybackStatusSuccess)?.durationMillis || 1
  );

  useEffect(() => {
    if (status && (status as AVPlaybackStatusSuccess).isLoaded) {
      progress.value = withTiming(
        (status as AVPlaybackStatusSuccess)?.positionMillis
      );
      max.value = withTiming(
        (status as AVPlaybackStatusSuccess)?.durationMillis || 1
      );
    }
  }, [status]);

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
          <View style={styles.sliderContainer}>
            <Slider
              progress={progress}
              minimumValue={min}
              maximumValue={max}
              onValueChange={handleSeek}
              theme={{
                minimumTrackTintColor: Colors.orange100,
                maximumTrackTintColor: Colors.neutral350,
              }}
            />
            <View style={styles.timeContainer}>
              <Text style={styles.timeLabel}>
                {formatMillisecondsToMinutes(
                  (status as AVPlaybackStatusSuccess)?.positionMillis || 0
                )}
              </Text>
              <Text style={styles.timeLabel}>
                {formatSecondsToMinutes(workout?.time || 0)}
              </Text>
            </View>
          </View>
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
    height: 196,
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
  sliderContainer: {
    marginTop: 24,
  },
  slider: {
    width: "100%",
    height: 10,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  timeLabel: {
    fontSize: 12,
    fontFamily: "Satoshi",
    color: Colors.neutral350,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    width: "100%",
    height: 62,
    marginTop: 12,
  },
});
