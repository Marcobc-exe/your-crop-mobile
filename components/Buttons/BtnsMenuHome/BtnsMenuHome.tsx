import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from "../../../constants";

type btnMenuHome = {
  openMenuFilters: boolean;
  openMenuCreator: boolean;
  handleCreator: (id: number) => void;
};

export const BtnsMenuHome: FC<btnMenuHome> = ({
  openMenuFilters,
  openMenuCreator,
  handleCreator,
}) => {
  return (
    <>
      {openMenuFilters && (
        <View style={styles.containerBtnFilters}>
          <TouchableOpacity activeOpacity={0.7} style={styles.btnFilters}>
            <Text style={styles.txtFilters}>Irrigating</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.btnFilters}>
            <Text style={styles.txtFilters}>Crops</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.btnFilters}>
            <Text style={styles.txtFilters}>Failures</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.btnFilters}>
            <Text style={styles.txtFilters}>Units</Text>
          </TouchableOpacity>
        </View>
      )}

      {openMenuCreator && (
        <View style={styles.containerBtnCreators}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnCreators}
            onPress={() => handleCreator(1)}
          >
            <Text style={styles.txtCreators}>New sector</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnCreators}
            onPress={() => handleCreator(2)}
          >
            <Text style={styles.txtCreators}>New unit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnCreators}
            onPress={() => handleCreator(3)}
          >
            <Text style={styles.txtCreators}>New map</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerBtnFilters: {
    // backgroundColor: "pink",
    height: 90,
    maxWidth: windowWidth - 100,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginLeft: 10,
  },
  btnFilters: {
    backgroundColor: "rgba(255, 255, 254, 1)",
    width: 85,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  txtFilters: {
    color: "#154163",
    fontWeight: "600",
  },
  containerBtnCreators: {
    // backgroundColor: "pink",
    height: 37,
    maxWidth: windowWidth - 100,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginLeft: 10,
    position: "absolute",
    bottom: 6,
    left: 50,
  },
  btnCreators: {
    backgroundColor: "rgba(255, 255, 254, 1)",
    width: 90,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  txtCreators: {
    color: "#218c74",
    fontWeight: "600",
  },
});
