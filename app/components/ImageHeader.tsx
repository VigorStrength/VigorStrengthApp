import { StyleSheet, Image, ViewProps } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../GlobalStyles";

interface Props extends ViewProps {
  coverUrl: any;
  scrollY?: any;
}

const ImageHeader = ({ coverUrl, ...props }: Props) => {
  return (
    <Animated.View {...props} style={[styles.container, props.style]}>
      <Image style={styles.image} source={coverUrl} />
      <LinearGradient
        colors={[Colors.neutralGradient, Colors.orange80, Colors.orange100]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.65, 1]}
        style={styles.gradient}
      />
    </Animated.View>
  );
};

export default ImageHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 355,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    // width: "100%",
    // height: "100%",
    // resizeMode,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
    zIndex: 1,
  },
});
