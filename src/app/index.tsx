import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  PressableProps,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

export type IconName = keyof typeof Ionicons.glyphMap;

export default function homePage() {
  const [gretting, setGretting] = useState("");

  useEffect(() => {
    const updateGretting = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour <= 12) {
        setGretting("Good Morning");
      } else if (currentHour >= 12 && currentHour < 17) {
        setGretting("Good Afternoon");
      } else if (currentHour >= 17 && currentHour < 21) {
        setGretting("Good Evening");
      } else {
        setGretting("Good Night");
      }
    };
    updateGretting();
    const interval = setInterval(updateGretting, 60000);
    return () => clearInterval(interval);
  }, []);

  const onPress = () => {
    alert("hii");
  };
  return (
    <View>
      <View className=" bg-blue-400 flex-row mt-16 ">
        <View className="bg-red-200 w-6/12  justify-end">
          <Text style={styles.greeting}>{gretting}</Text>
        </View>
        <View className="bg-yellow-300 w-6/12 items-center p-3 flex-row justify-end">
          <MenuIcon name="notifications-outline" size={26} onPress={onPress} />
          <MenuIcon name="timer-outline" size={26} className="ml-3" />
          <MenuIcon name="settings-outline" size={26} className="ml-3" />
        </View>
      </View>
      <Link href="./anime-prop">Go to hello page</Link>
      <Link href="./circle">Go to circle page</Link>
      <Link href="./rotate">Go to rotate page</Link>
      <Link href="./my-text">Go to my-text page</Link>
      <Link href="./shake">Go to shake page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 8,
  },
});

export function MenuIcon(
  props: PressableProps & { name: IconName; color?: string; size?: number }
) {
  const { name, color, size, ...rest } = props;
  return (
    <Pressable {...rest}>
      <Ionicons name={name} size={size || 26} color={color} />
    </Pressable>
  );
}
