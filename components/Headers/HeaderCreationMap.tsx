import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../store";
import { statusBarHeight, windowWidth } from "../../constants";
import { FC } from "react";

type headerCreationMapProps = {
  show: boolean;
};

export const HeaderCreationMap: FC<headerCreationMapProps> = ({ show }) => {
  const { mapName } = useAppSelector((state) => state.map);
  const { unitName, unitID } = useAppSelector((state) => state.unit);

  return (
    <>
      {mapName != null && !show && (
        <SafeAreaView style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.txtTitle}>{mapName}</Text>
            {unitName != null && unitID != null && !show && (
              <>
                <Text style={styles.txtTitle}>|</Text>
                <Text style={styles.txtTitle}>
                  {unitName}({unitID})
                </Text>
              </>
            )}
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    height: 40,
    width: windowWidth,
    marginTop: statusBarHeight,
    paddingHorizontal: 20,
    // position: "absolute",
  },
  subContainer: {
    flexDirection: "row",
    gap: 12,
    height: 40,
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#154163",
    borderRadius: 30,
    paddingTop: 5
  },
  txtTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
