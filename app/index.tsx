import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CustomStatusBar } from "../components/StatusBar/CustomStatusBar";
import { Plus } from "phosphor-react-native";
import { windowHeight, windowWidth } from "../constants";
import { router } from "expo-router";

const Index = () => {
  const listOfMaps = [];
  console.log(listOfMaps.length ? 1 : 0)
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar style="light" />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.title}>Your Crop mobile</Text>
      </View>

      <View style={styles.containerSubTitle}>
        <Text style={styles.subTitle}>Create a new map with your crops!</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnAddMap}
          onPress={() =>
            router.push({
              pathname: "/(screens)/HomeScreen/",
              params: {
                areMaps: listOfMaps.length ? 1 : 0,
              },
            })
          }
        >
          <Plus size={70} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121E27",
  },
  containerTitle: {
    alignItems: "center",
    marginTop: 150,
  },
  title: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "600",
  },
  containerSubTitle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    position: "absolute",
    width: windowWidth,
    height: windowHeight,
    gap: 18,
  },
  subTitle: {
    color: "#fff",
    fontSize: 18,
  },
  btnAddMap: {
    backgroundColor: "#154163",
    borderRadius: 50,
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    marginTop: 20,
  },
});
