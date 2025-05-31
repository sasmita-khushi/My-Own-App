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
  //   return (
  //     <View className="flex-1 justify-center items-center">
  //       <Text>Hello!</Text>
  //       <Link href="./tutorial/tap">Go to Tap PAge</Link>
  //     </View>
  //   );
  // }
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

      <Link href="./anime-prop">
        <Text>Go to prop page</Text>
      </Link>
      <Link href="./circle">
        <Text>Go to hello page</Text>
      </Link>
      <Link href="./rotate">
        <Text>Go to rotate page</Text>
      </Link>
      <Link href="./my-text">
        <Text>Go to my-text page</Text>
      </Link>
      <Link href="./shake">
        <Text>Go to shake page</Text>
      </Link>
      <Link href="./tutorial/tap">
        <Text>Go to tap page</Text>
      </Link>
      <Link href="./my-anim">
        <Text>Go to My Animation pag</Text>e
      </Link>
      <Link href="./tutorial/pan-gesture">
        <Text>Go to Pan Gesture page</Text>
      </Link>
      <Link href="./tutorial/spatial">
        <Text>Go to spatial page</Text>
      </Link>
      <Link href="./tutorial/slide">
        <Text>Go to slide page</Text>
      </Link>
      <Link href="./tutorial/pop-circle">
        <Text>Go to Pop Circle Page</Text>
      </Link>
      <Link href="./tutorial/pop-circle-react">
        <Text>Go to Pop Circle React Page</Text>
      </Link>
      <Link href="./tutorial/pressable-circle">
        <Text>Go to Pressable Circle Page</Text>
      </Link>
      <Link href="./tutorial/flip-card">
        <Text>Go to Flip-Card Page</Text>
      </Link>
      <Link href="./tutorial/spiral">
        <Text>Go to Spiral Page</Text>
      </Link>
      <Link href="./tutorial/layout-anime">
        <Text>Go to Layout Animation Page</Text>
      </Link>
      <Link href="./check-box-page">
        <Text>Go to Check Box page</Text>
      </Link>
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
