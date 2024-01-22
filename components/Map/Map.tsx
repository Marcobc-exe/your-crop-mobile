import MapView, { MAP_TYPES, Marker } from "react-native-maps";
import { platform, windowHeight } from "../../constants";
import { useStateProp } from "../../types/ReactHooksTypes/types";
import { Camera, mapLocationProps } from "../../types/MapTypes/types";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { handleMapLocation } from "../../store/slices/mapSlice/mapSlice";
import { Circle } from "phosphor-react-native";
import { StyleSheet, View } from "react-native";

export const MapContainer = () => {
  const dispatch = useAppDispatch();
  const [mapLocation, setMapLocation]: useStateProp<mapLocationProps> =
    useState({
      latitude: -32.420329,
      longitude: -70.952348,
      latitudeDelta: 2,
      longitudeDelta: 2,
    });

  const [camera, setCamera]: useStateProp<Camera> = useState({
    center: {
      latitude: -33.399604991488204,
      longitude: -70.57655071359267,
    },
    pitch: 0,
    heading: 0,
    zoom: 17,
  });

  const { enableGetLocation, mapLocation: mapPosition } = useAppSelector(
    (state) => state.map
  );

  const handlePositionMap = (event) => {
    if (enableGetLocation) {
      const { coordinate } = event.nativeEvent;
      console.log(coordinate);
      dispatch(handleMapLocation(coordinate));
    }
  };

  return (
    <MapView
      initialRegion={mapLocation}
      initialCamera={camera}
      mapType={MAP_TYPES.TERRAIN}
      userInterfaceStyle="light"
      minZoomLevel={12}
      maxZoomLevel={20}
      zoomEnabled={true}
      zoomControlEnabled={false}
      scrollEnabled={true}
      showsBuildings={false}
      showsIndoorLevelPicker={false}
      style={{
        width: "100%",
        height: platform === "ios" ? windowHeight : "100%",
        zIndex: 9,
      }}
      onPress={handlePositionMap}
    >
      {enableGetLocation &&
        mapPosition.latitude !== null &&
        mapPosition.longitude !== null && (
          <Marker
            coordinate={{
              latitude: mapPosition.latitude,
              longitude: mapPosition.longitude,
            }}
          >
            <View style={styles.marker}>
              <Circle size={15} color="pink" weight="fill"/>
            </View>
          </Marker>
        )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  marker: {
    backgroundColor: "#154163",
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
})