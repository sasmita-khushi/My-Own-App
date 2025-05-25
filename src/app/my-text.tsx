import { useEffect } from "react";
import { View, Text } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
} from "react-native-reanimated";
export default function app() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className=" font-thin text-3xl">Make</Text>
      <MyText />
      <Text className=" font-thin text-3xl">AweSoMe!</Text>
    </View>
  );
}

function MyText() {
  const sv = useSharedValue(0);

  const animatedLifeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: interpolate(sv.value, [0, 1], [0, 10]) }],
      opacity: interpolate(sv.value, [0, 0.5, 1], [0, 1, 0]),
    };
  });

  const animatedWorkStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: interpolate(sv.value, [1, 2], [0, 15]) }],
      opacity: interpolate(sv.value, [1, 1.5, 2], [0, 1, 0]),
    };
  });
  //   const animatedEverythingStyle = useAnimatedStyle(() => {
  //     return {
  //       transform: [{ translateY: interpolate(sv.value, [2, 3], [0, 15]) }],
  //       opacity: interpolate(sv.value, [2, 2.5, 3], [0, 1, 0]),
  //     };
  //   });
  useEffect(() => {
    sv.value = withRepeat(withTiming(2, { duration: 6000 }), -1, false);
  }, []);
  return (
    <>
      <Animated.View
        style={[animatedLifeStyle, { overflow: "hidden" }]}
        className="absolute flex-row items-center justify-center"
      >
        <View className="h-10 w-40 bg-sky-500 justify-center items-center">
          <Text className="text-white text-3xl font-thin">LiFeStYle</Text>
        </View>
      </Animated.View>

      <Animated.View
        style={animatedWorkStyle}
        className="flex-row items-center justify-center"
      >
        <View className="h-10 w-40 bg-green-500 justify-center items-center">
          <Text className="text-white text-3xl font-thin">WoRk</Text>
        </View>
      </Animated.View>

      {/* <Animated.View
        style={animatedEverythingStyle}
        className="flex-row items-center justify-center"
      >
        <View className="h-10 w-40 bg-red-500 justify-center items-center">
          <Text className="text-white text-3xl font-thin">EverYthIng</Text>
        </View>
      </Animated.View> */}
    </>
  );
}
