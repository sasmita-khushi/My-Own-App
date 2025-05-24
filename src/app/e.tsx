import { Button, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
export default function myButton() {
  const svX = useSharedValue(0);
  const svY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: svX.value + 1 },
        { translateY: svY.value + 100 },
      ],
    };
  });

  const handleShake = () => {
    svX.value = 0;
    svX.value = withRepeat(withTiming(100, { duration: 1000 }), -1, true);
  };
  const handleBounce = () => {
    svY.value = 0;
    svY.value = withRepeat(withTiming(100, { duration: 1000 }), -1, true);
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Animated.View style={animatedStyle}>
        <View className=" h-20 w-32 bg-blue-600 rounded mb-2"></View>
      </Animated.View>
      <Button title="Shake" onPress={handleShake} />
      <Button title="Bounce" onPress={handleBounce} />
    </View>
  );
}
