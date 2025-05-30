import { View, Pressable, Text } from "react-native";
import { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
  Keyframe,
  LinearTransition,
  SequencedTransition,
  FadeOut,
  CurvedTransition,
  JumpingTransition,
} from "react-native-reanimated";

export default function BoxPage() {
  const [num, setNum] = useState<number[]>([]);
  //[] [1] [1,2] [1,2,3] [1,2,3,4]

  const handlePress = () => {
    setNum((prev) => [...prev, prev.length + 1]);
  };

  const handleRemove = () => {
    setNum((prev) => {
      const newArr = [...prev];
      newArr.pop();
      return newArr;
    });
  };

  const removeByIndex = (index: number) => {
    setNum((prev) => {
      const newArr = [...prev];
      newArr.splice(index, 1);
      return newArr;
    });
  };
  return (
    <Container className=" p-20">
      <Text className="text-2xl font-bold mb-10">Layout Animation</Text>
      <View className=" flex-row mr-10">
        <Pressable
          onPress={handlePress}
          className=" w-32 h-10 bg-blue-500 justify-center items-center mr-10 "
        >
          <Text className="text-white font-thin text-2xl">Add</Text>
        </Pressable>
        <Pressable
          className=" w-32 h-10 bg-red-500 justify-center items-center"
          onPress={handleRemove}
        >
          <Text className="text-white font-thin text-2xl">Remove</Text>
        </Pressable>
      </View>

      <Animated.View className="mt-10 " layout={JumpingTransition}>
        {num.map((e, index) => (
          <Box key={index} text={e} remove={removeByIndex} />
        ))}
      </Animated.View>
    </Container>
  );
}

const Container = View;

export function Box(props: { text: number; remove: (index: number) => void }) {
  // const rotateFrame = new Keyframe({
  //   0: {
  //     transform: [{ rotate: "0deg" }],
  //   },
  //   100: {
  //     transform: [{ rotate: "360deg" }],
  //   },
  // });

  // const rotateReverseFrame = new Keyframe({
  //   0: {
  //     transform: [{ rotate: "360deg" }],
  //   },
  //   100: {
  //     transform: [{ rotate: "0deg" }],
  //   },
  // }).duration(2000);

  return (
    <Animated.View className=" w-10 h-10 bg-green-400 mr-10 justify-center items-center relative mt-10">
      <Pressable
        onPress={() => props.remove(props.text - 1)}
        className="flex-1 justify-center items-center"
      >
        <Text>{props.text}</Text>
      </Pressable>
    </Animated.View>
  );
}
