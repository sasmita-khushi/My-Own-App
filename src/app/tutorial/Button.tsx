import { View, Pressable } from "react-native";
import { useState } from "react";
import Animated, {
  FadeIn,
  FadeOut,
  FadeInLeft,
  FadeOutLeft,
  FadeOutRight,
  BounceIn,
  BounceOut,
  Keyframe,
  Easing,
} from "react-native-reanimated";

export default function Btn() {
  const [showButton, setShowButton] = useState(true);

  const handlePress = () => {
    setShowButton((prev) => !prev);
  };

  const enteringAnim = new Keyframe({
    0: {
      transform: [{ rotate: "0deg" }],
    },
    100: {
      transform: [{ rotate: "360deg" }],
    },
  });

  return (
    <View className="flex-1 ">
      {showButton && (
        <Animated.View
          className=" bg-blue-500 h-20 w-52 rounded-lg mb-7 absolute "
          entering={enteringAnim}
          exiting={BounceOut}
        ></Animated.View>
      )}
      <Pressable
        onPress={handlePress}
        className="bg-blue-500 h-96 w-96 mt-64"
      />
    </View>
  );
}
