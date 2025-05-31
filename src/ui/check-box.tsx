import { View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type CheckBoxProps = {
  checked?: boolean;
  onChange?: () => void;
};

export default function CheckBox(props: CheckBoxProps) {
  const scaleSv = useSharedValue(0);

  const rippleCircleAnimeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleSv.value }],
      opacity: interpolate(scaleSv.value, [0, 0.5, 1], [1, 1, 0]),
      // backgroundColor: props.isChecked ? "#3b82f6" : "#c0c1c4",
    };
  });

  const handlePress = () => {
    if (props.onChange) {
      props.onChange();
    }
    scaleSv.value = 0;
    scaleSv.value = withTiming(1, { duration: 400 });
  };

  return (
    <Container
      onPress={handlePress}
      className=" items-center justify-center h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer mt-10 ml-10"
    >
      <RippleCircle
        className={[
          " h-10 w-10 rounded-full absolute",
          props.checked ? "bg-blue-500" : "bg-gray-400",
        ].join(" ")}
        style={rippleCircleAnimeStyle}
      ></RippleCircle>
      <Box
        className={[
          " h-6 w-6 border rounded-sm justify-center items-center absolute",
          props.checked
            ? "bg-blue-600 border-blue-600"
            : "bg-white border-gray-500",
        ].join(" ")}
      >
        {props.checked && (
          <Ionicons
            name="checkmark"
            size={20}
            className={[props.checked ? "text-white" : "text-black"].join(" ")}
          />
        )}
      </Box>
    </Container>
  );
}

const Container = Pressable;
const Box = View;
const RippleCircle = Animated.View;
