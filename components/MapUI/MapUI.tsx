import { StyleSheet, Text, View } from "react-native";
import { ButtonsHome } from "../Buttons/ButtonsHome/ButtonsHome";
import { useState } from "react";
import { useStateProp } from "../../types/ReactHooksTypes/types";
import { useLocalSearchParams } from "expo-router";
import { platform, windowHeight } from "../../constants";
import { ModalsStepper } from "../ModalsStepper/ModalsStepper";

export const MapUI = () => {
  const { areMaps } = useLocalSearchParams();
  const [indexCreate, setIndexCreate]: useStateProp<null | string> =
    useState(null);
  const handleCreator = (id: number) => {
    setIndexCreate(id);
  };

  return (
    <View
      style={[
        styles.containerUI,
        {
          width: areMaps !== "0" ? "20%" : "100%",
          height: areMaps !== "0" ? 200 : windowHeight,
        },
      ]}
    >
      {areMaps === "1" && <ButtonsHome handleCreator={handleCreator} />}
      {areMaps === "0" && <ModalsStepper />}
    </View>
  );
};

const styles = StyleSheet.create({
  containerUI: {
    zIndex: 12,
    position: "absolute",
    bottom: 0,
    // backgroundColor: "green",
  },
});
