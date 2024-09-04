import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Video,
  ResizeMode,
  AVPlaybackStatus,
  AVPlaybackStatusSuccess,
} from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { Slider } from "react-native-awesome-slider";
import { Colors } from "../../GlobalStyles";
import Icon from "../../components/Icon";
import { Icon as RNIcon } from "react-native-paper";
import {
  formatMillisecondsToMinutes,
  formatSecondsToMinutes,
} from "../../utils/helpers";

type Props = {
  workout: any;
  onNext: () => void;
  onPrevious: () => void;
};

const WorkoutPlayer = ({ workout, onNext, onPrevious }: Props) => {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);
  const progress = useSharedValue(
    (status as AVPlaybackStatusSuccess)?.positionMillis || 0
  );
  const min = useSharedValue(0);
  const max = useSharedValue(
    (status as AVPlaybackStatusSuccess)?.durationMillis || 1
  );
  const showOverlay =
    status &&
    (status as AVPlaybackStatusSuccess)?.isLoaded &&
    (status as AVPlaybackStatusSuccess)?.positionMillis > 0 &&
    (status as AVPlaybackStatusSuccess)?.playableDurationMillis ===
      (status as AVPlaybackStatusSuccess)?.positionMillis;

  const handlePlayPause = () => {
    if (status && status.isLoaded) {
      if ((status as AVPlaybackStatusSuccess).isPlaying) {
        videoRef.current?.pauseAsync();
      } else {
        videoRef.current?.playAsync();
      }
    }
  };

  const handleMute = () => {
    if (status && (status as AVPlaybackStatusSuccess)?.isLoaded) {
      videoRef.current?.setIsMutedAsync(
        !(status as AVPlaybackStatusSuccess)?.isMuted
      );
    }
  };

  const handleSeek = (value: number) => {
    if (
      videoRef.current &&
      status &&
      (status as AVPlaybackStatusSuccess)?.isLoaded
    ) {
      videoRef.current?.setPositionAsync(value);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.replayAsync();
    }
  };

  const handleFastForward = () => {
    if (
      videoRef.current &&
      status &&
      (status as AVPlaybackStatusSuccess)?.isLoaded
    ) {
      const duration = (status as AVPlaybackStatusSuccess)?.durationMillis;
      const position = (status as AVPlaybackStatusSuccess)?.positionMillis;
      const videoLength = (status as AVPlaybackStatusSuccess)
        ?.playableDurationMillis;
      if (
        duration !== undefined &&
        position !== undefined &&
        position !== videoLength
      ) {
        videoRef.current?.setPositionAsync(position + 15000);
      }
    }
  };

  const handleRewind = () => {
    if (
      videoRef.current &&
      status &&
      (status as AVPlaybackStatusSuccess)?.isLoaded
    ) {
      const position = (status as AVPlaybackStatusSuccess)?.positionMillis;
      if (position !== undefined && position > 15000) {
        videoRef.current?.setPositionAsync(position - 15000);
      } else {
        videoRef.current?.setPositionAsync(0);
      }
    }
  };

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
      {showOverlay && (
        <View style={styles.overlay}>
          <TouchableOpacity onPress={handleRestart}>
            <RNIcon source="replay" size={48} color={Colors.orange100} />
          </TouchableOpacity>
        </View>
      )}

      {/* Outsource this as it's own component*/}
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
              renderBubble={() => null}
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
          {/* <TouchableOpacity onPress={handleRewind}>
            <RNIcon source="rewind-15" size={24} color={Colors.neutral350} />
          </TouchableOpacity> */}
          <Icon
            name="skipBack"
            width={32}
            height={32}
            fill={Colors.neutral350}
            onPress={onPrevious}
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
            width={32}
            height={32}
            fill={Colors.neutral350}
            onPress={onNext}
          />
          {/* <TouchableOpacity onPress={handleFastForward}>
            <RNIcon
              source="fast-forward-15"
              size={24}
              color={Colors.neutral350}
            />
          </TouchableOpacity> */}
          <Icon
            name={
              (status as AVPlaybackStatusSuccess)?.isMuted
                ? "enableAudio"
                : "disableAudio"
            }
            onPress={handleMute}
            width={32}
            height={32}
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
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.neutralBackgroundChip,
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "center",
    paddingHorizontal: 16,
    width: "100%",
    height: 62,
    marginTop: 12,
  },
});
