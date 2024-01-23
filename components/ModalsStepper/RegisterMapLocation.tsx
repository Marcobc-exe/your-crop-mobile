import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store";
import { handleMapLocation } from "../../store/slices/mapSlice/mapSlice";
import { FC } from "react";
import { statusBarHeight, windowHeight, windowWidth } from "../../constants";

type registerMapLocation = {
  registerMap: () => void;
};

export const RegisterMapLocation: FC<registerMapLocation> = ({
  registerMap,
}) => {
  const dispatch = useAppDispatch();
  const { mapLocation } = useAppSelector((state) => state.map);
  const areMapDrawed =
    mapLocation.latitude !== null && mapLocation.longitude !== null;

  const handleRemoveMapLocation = () => {
    if (!areMapDrawed) return;

    dispatch(handleMapLocation({ latitude: null, longitude: null }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={areMapDrawed ? false : true}
        activeOpacity={0.8}
        style={[
          styles.btnAction,
          {
            backgroundColor: areMapDrawed ? "#27ae60" : "rgba(39, 174, 96, .5)",
            borderColor: areMapDrawed ? "#fff" : "rgba(255, 255, 255, .5)",
          },
        ]}
        onPress={registerMap}
      >
        <Text style={styles.txtBtnAction}>Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!areMapDrawed ? true : false}
        activeOpacity={0.8}
        style={[
          styles.btnAction,
          {
            backgroundColor: areMapDrawed ? "#e74c3c" : "rgba(231, 76, 60, .5)",
            borderColor: areMapDrawed ? "#fff" : "rgba(255, 255, 255, .5)",
          },
        ]}
        onPress={handleRemoveMapLocation}
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
    // backgroundColor: "blue",
    position: "absolute",
    bottom: 60
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
