import { GestureResponderEvent, Pressable, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function myCircle() {
  const CIRCLE_SIZE = 50;
  const circlePositionSv = useSharedValue({ x: 0, y: 0 });
  const scaleSv = useSharedValue(0);

  const circleAnimeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: circlePositionSv.value.x },
        { translateY: circlePositionSv.value.y },
        { scale: scaleSv.value },
      ],
    };
  });

  const gesture = Gesture.Tap()
    .onBegin(() => {
      scaleSv.value = 0.8;
    })
    .onEnd((event) => {
      const { x, y } = event;
      const newX = x - CIRCLE_SIZE / 2;
      const newY = y - CIRCLE_SIZE / 2;
      circlePositionSv.value = withTiming({ x: newX, y: newY });
      scaleSv.value = withTiming(1, { duration: 400 }); // Scale up the circle
    });

  // const handlePress = (event: GestureResponderEvent): void => {};

  return (
    <GestureDetector gesture={gesture}>
      <MainContainer className=" flex-1 bg-pink-100">
        <Circle
          className="bg-blue-500 rounded-full absolute "
          style={[
            circleAnimeStyle,
            { height: CIRCLE_SIZE, width: CIRCLE_SIZE },
          ]}
        ></Circle>
      </MainContainer>
    </GestureDetector>
  );
}

const MainContainer = View;
const Circle = Animated.View;
