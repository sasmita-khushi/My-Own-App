import { View, Text } from "react-native";
import CheckBox from "../ui/check-box";
import { useState } from "react";

export default function CheckBoxPage() {
  const [checked, setChecked] = useState(false);
  const toggleCheck = () => {
    setChecked((prev) => !prev);
  };

  return (
    <View>
      <CheckBox checked={checked} onChange={toggleCheck} />
      <Text>
        Hii<Text>hinbdkjghoiueyuogi</Text>
      </Text>
    </View>
  );
}
