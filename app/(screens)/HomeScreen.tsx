import { SafeAreaView } from "react-native";
import { MapUI } from "../../components/MapUI/MapUI";
import { MapContainer } from "../../components/Map/Map";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <MapContainer />
      <MapUI />
    </SafeAreaView>
  );
};

export default HomeScreen;
