import { View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Colors } from "../GlobalStyles";
import Icon from "./Icon";
import { Key } from "react";

type Props = {
  state: any;
  navigation: any;
};

const CustomTabBar = ({ state, navigation }: Props) => {
  return (
    <BlurView intensity={100} style={styles.tabBar} tint="default">
      <View style={styles.tabContainer}>
        {state.routes.map((route: any, index: any) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const iconName =
            route.name === "HomeScreen"
              ? "home"
              : route.name === "Nutrition"
              ? "nutrition"
              : route.name === "Insights"
              ? "insights"
              : route.name === "Social"
              ? "message"
              : "profile";

          //   const width =
          //     route.name === "HomeScreen"
          //       ? 52
          //       : route.name === "Nutrition"
          //       ? 52
          //       : route.name === "Insights"
          //       ? 50
          //       : route.name === "Social"
          //       ? 54
          //       : 42;

          return (
            <View key={route.key} style={styles.tabItem}>
              <Icon
                name={iconName}
                width={44}
                height={44}
                fill={isFocused ? Colors.orange100 : Colors.neutral350}
                onPress={onPress}
                onLongPress={onLongPress}
              />
            </View>
          );
        })}
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 96,
    paddingHorizontal: 40,
    paddingVertical: 23,
    borderTopWidth: 0,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  tabItem: {
    alignItems: "center",
  },
});

export default CustomTabBar;
