import { ArrowBendUpLeft, Check, Trash } from "phosphor-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  onPressConfirmdPolygon,
  onPressRemovePolygon,
  onPressUndoPolygon,
} from "../../store/slices/sectorSlice/sectorSlice";

export const ControllPanel = () => {
  const dispatch = useAppDispatch();
  const { polygonCoords, enableGetSectorCoordinates } = useAppSelector(
    (state) => state.sector
  );
  const disabled = polygonCoords.length === 0 ? true : false;
  const disabledCheck = polygonCoords.length === 0 || polygonCoords.length < 3;

  return (
    <>
      {enableGetSectorCoordinates && (
        <View style={styles.container}>
          <TouchableOpacity
            disabled={disabled}
            style={[styles.btnController, { opacity: disabled ? 0.5 : 1 }]}
            activeOpacity={0.5}
            onPress={() => dispatch(onPressUndoPolygon())}
          >
            <ArrowBendUpLeft size={25} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            disabled={disabled}
            style={[styles.btnController, { opacity: disabled ? 0.5 : 1 }]}
            activeOpacity={0.5}
            onPress={() => dispatch(onPressRemovePolygon())}
          >
            <Trash size={25} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            disabled={disabledCheck ? true : false}
            style={[styles.btnController, { opacity: disabledCheck ? 0.5 : 1 }]}
            activeOpacity={0.5}
            onPress={() => dispatch(onPressConfirmdPolygon())}
          >
            <Check size={25} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(21, 65, 99, 1)",
    borderRadius: 30,
    minHeight: 120,
    width: 45,
    padding: 5,
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    // left: windowWidth - 65,
    right: 20,
    top: "25%",
    // top: 100
    // bottom: 300
  },
  btnController: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
