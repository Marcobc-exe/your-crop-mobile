import MapView, { MAP_TYPES } from "react-native-maps";
import { platform, windowHeight } from "../../constants";
import { useStateProp } from "../../types/ReactHooksTypes/types";
import { Camera, mapLocationProps } from "../../types/MapTypes/types";
import { useState } from "react";

export const MapContainer = () => {
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
    ></MapView>
  );
};
