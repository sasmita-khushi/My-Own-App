import { useEffect, useRef } from "react";
import { Pressable, View, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withRepeat,
  measure,
  useAnimatedRef,
  runOnUI,
} from "react-native-reanimated";
import { transform } from "typescript";
export default function box() {
  const sv = useSharedValue(0);
  const myRef = useAnimatedRef();

  const animeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: sv.value }],
    };
  });

  const handlePress = () => {
    runOnUI(() => {
      sv.value = withSpring(sv.value + 0.5);
      const measurement = measure(myRef);
      console.log(measurement);
    })();
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Animated.View
        ref={myRef}
        className=" h-24 w-24 bg-pink-400 rounded-xl"
        style={animeStyle}
      ></Animated.View>
      <Pressable onPress={handlePress}>
        <Text className="text-2xl  mt-10 bg-green-400 p-2">Press Me</Text>
      </Pressable>
    </View>
  );
}
