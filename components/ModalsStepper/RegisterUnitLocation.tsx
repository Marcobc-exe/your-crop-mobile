import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store";
import { handleUnitLocation } from "../../store/slices/unitSlice/unitSlice";
import { windowWidth } from "../../constants";
import { FC } from "react";

type registerUnitLocationProps = {
  registerUnit: () => void;
};

export const RegisterUnitLocation: FC<registerUnitLocationProps> = ({
  registerUnit,
}) => {
  const dispatch = useAppDispatch();
  const { unitLocation } = useAppSelector((state) => state.unit);
  const areUnitDrawed =
    unitLocation.latitude !== null && unitLocation.longitude !== null;

  const handleRemoveUnitLocation = () => {
    if (!areUnitDrawed) return;

    dispatch(handleUnitLocation({ latitude: null, longitude: null }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={areUnitDrawed ? false : true}
        activeOpacity={0.8}
        style={[
          styles.btnAction,
          {
            backgroundColor: areUnitDrawed
              ? "#27ae60"
              : "rgba(39, 174, 96, .5)",
            borderColor: areUnitDrawed ? "#fff" : "rgba(255, 255, 255, .5)",
          },
        ]}
        onPress={registerUnit}
      >
        <Text style={styles.txtBtnAction}>Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!areUnitDrawed ? true : false}
        activeOpacity={0.8}
        style={[
          styles.btnAction,
          {
            backgroundColor: areUnitDrawed
              ? "#e74c3c"
              : "rgba(231, 76, 60, .5)",
            borderColor: areUnitDrawed ? "#fff" : "rgba(255, 255, 255, .5)",
          },
        ]}
        onPress={handleRemoveUnitLocation}
      >
        <Text style={styles.txtBtnAction}>Borrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    position: "absolute",
    bottom: 60,
  },
  btnAction: {
    borderWidth: 2,
    width: 160,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
  },
  txtBtnAction: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});