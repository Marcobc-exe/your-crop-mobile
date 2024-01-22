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
  const [mapUIHeight, setMapUIHeight]: useStateProp<number> =
    useState(windowHeight);
  
  const handleCreator = (id: number) => {
    setIndexCreate(id);
  };

  const handleMapUIHeight = (height: number) => {
    setMapUIHeight(height)
  }

  return (
    <View
      style={[
        styles.containerUI,
        {
          width: areMaps !== "0" ? "20%" : "100%",
          height: mapUIHeight,
        },
      ]}
    >
      {areMaps === "1" && <ButtonsHome handleCreator={handleCreator} />}
      {areMaps === "0" && <ModalsStepper handleMapUIHeight={handleMapUIHeight}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  containerUI: {
    zIndex: 12,
    position: "absolute",
    bottom: 0,
    backgroundColor: "green",
  },
});
