import { View } from "react-native";
import { CustomModalInputs } from "./CustomModalInputs";

export const ModalsStepper = () => {
  const handleEnterMap = (action: string | undefined) => {
    console.log(action)
  }

  return (
    <View>
      <CustomModalInputs
        modalHeight={260}
        inputs={1}
        title="Enter map details"
        placeholder={["Enter map name"]}
        btnActions={2}
        bgColor={["#27ae60", "#e74c3c"]}
        btnText={["Accept", "Cancel"]}
        onPress={handleEnterMap}
      />
    </View>
  );
};
