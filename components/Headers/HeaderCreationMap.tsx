import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../store";
import { statusBarHeight, windowWidth } from "../../constants";
import { FC } from "react";
import { MapTrifold, PlusSquare, Polygon } from "phosphor-react-native";

type headerCreationMapProps = {
  show: boolean;
};

export const HeaderCreationMap: FC<headerCreationMapProps> = ({ show }) => {
  const { mapName } = useAppSelector((state) => state.map);
  const { unitName, unitID } = useAppSelector((state) => state.unit);
  const { sectorName, sectorID } = useAppSelector((state) => state.sector);

  return (
    <>
      {mapName != null && (
        <SafeAreaView style={styles.container}>
          <View style={styles.subContainer}>
            <MapTrifold size={24} color="white" style={{ marginTop: 2 }}/>
            <Text style={styles.txtTitle}>{mapName}</Text>
          </View>
            {unitName != null && unitID != null && !show && (
              <View style={styles.subContainer}>
                <PlusSquare size={24} color="white" style={{ marginTop: 2 }}/>
                <Text style={styles.txtTitle}>
                  {unitName}({unitID})
                </Text>
              </View>
            )}
            {sectorName != null && sectorID != null && !show && (
              <View style={styles.subContainer}>
                <Polygon size={24} color="white" style={{ marginTop: 2 }}/>
                <Text style={styles.txtTitle}>{sectorName}({sectorID})</Text>
              </View>
            )}
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20,
    gap: 3
  },
  subContainer: {
    flexDirection: "row",
    gap: 12,
    minHeight: 40,
    backgroundColor: "rgba(21, 65, 99, .8)",
    borderRadius: 30,
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  txtTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    maxWidth: 260
  },
});
