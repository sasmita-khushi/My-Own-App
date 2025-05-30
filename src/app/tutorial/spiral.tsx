import { View } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function SpiralPage() {
  const sv = useSharedValue({ x: 0, y: 0 });
  const context = useSharedValue({ x: 0, y: 0 });

  const redCircle = useDerivedValue(() => {
    return withSpring({ x: sv.value.x, y: sv.value.y });
  });

  const yellowCircle = useDerivedValue(() => {
    return withSpring({ x: redCircle.value.x, y: redCircle.value.y });
  });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      context.value = { x: sv.value.x, y: sv.value.y };
    })
    .onUpdate((event) => {
      sv.value = {
        x: context.value.x + event.translationX,
        y: context.value.y + event.translationY,
      };
    });

  const blueCircleAnimeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sv.value.x }, { translateY: sv.value.y }],
    };
  });

  const redCircleAnimeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: redCircle.value.x },
        { translateY: redCircle.value.y },
      ],
    };
  });

  const YellowCircleAnimeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: yellowCircle.value.x },
        { translateY: yellowCircle.value.y },
      ],
    };
  });
  return (
    <MainContainer className=" flex-1 justify-center items-center ">
      <GestureDetector gesture={gesture}>
        <BlueCircle
          className=" bg-blue-500 w-10 h-10 rounded-full absolute shadow cursor-pointer z-30 "
          style={blueCircleAnimeStyle}
        ></BlueCircle>
      </GestureDetector>
      <RedCircle
        className="bg-red-400 w-10 h-10 rounded-full absolute z-20"
        style={redCircleAnimeStyle}
      ></RedCircle>
      <YellowCircle
        className="bg-yellow-400 w-10 h-10 rounded-full absolute z-10"
        style={YellowCircleAnimeStyle}
      ></YellowCircle>
    </MainContainer>
  );
}
const MainContainer = View;
const BlueCircle = Animated.View;
const RedCircle = Animated.View;
const YellowCircle = Animated.View;
