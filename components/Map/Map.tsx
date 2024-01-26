import MapView, { MAP_TYPES, Marker } from "react-native-maps";
import { platform, windowHeight } from "../../constants";
import { useStateProp } from "../../types/ReactHooksTypes/types";
import { Camera, mapLocationProps } from "../../types/MapTypes/types";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { handleMapLocation } from "../../store/slices/mapSlice/mapSlice";
import { Circle, PlusSquare } from "phosphor-react-native";
import { StyleSheet, View } from "react-native";
import { handleUnitLocation } from "../../store/slices/unitSlice/unitSlice";

type polygonCoordsProps = {
  latitude: number;
  longitude: number;
};

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
  const [polygonCoords, setPolygonCoords]: useStateProp<polygonCoordsProps[]> =
    useState([]);

  const {
    enableGetLocation,
    mapLocation: mapPosition,
    listMaps,
  } = useAppSelector((state) => state.map);
  console.log(listMaps)
  const { enableGetUnitLocation, unitLocation } = useAppSelector(
    (state) => state.unit
  );
  const { enableGetSectorCoordinates } = useAppSelector(
    (state) => state.sector
  );

  const handlePositionMap = (event) => {
    if (enableGetLocation) {
      const { coordinate } = event.nativeEvent;
      console.log(coordinate);
      dispatch(handleMapLocation(coordinate));
    }

    if (enableGetUnitLocation) {
      const { coordinate } = event.nativeEvent;
      console.log(coordinate);
      dispatch(handleUnitLocation(coordinate));
    }

    if (enableGetSectorCoordinates) {
      const { coordinate } = event.nativeEvent;
      console.log(coordinate);
      setPolygonCoords((prevValue: polygonCoordsProps[]) => [
        ...prevValue,
        coordinate,
      ]);
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
      {/* POINT MAP POSITION */}
      {enableGetLocation &&
        mapPosition.latitude !== null &&
        mapPosition.longitude !== null && (
          <Marker
            coordinate={{
              latitude: mapPosition.latitude,
              longitude: mapPosition.longitude,
            }}
          >
            <View style={styles.mapLocation}>
              <Circle size={15} color="pink" weight="fill" />
            </View>
          </Marker>
        )}

      {/* UNITS POSITIONS */}
      {enableGetUnitLocation &&
        unitLocation.latitude !== null &&
        unitLocation.longitude !== null && (
          <Marker
            coordinate={{
              latitude: unitLocation.latitude,
              longitude: unitLocation.longitude,
            }}
          >
            <View style={styles.unitLocation}>
              <PlusSquare size={15} color="pink" weight="fill" />
            </View>
          </Marker>
        )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapLocation: {
    backgroundColor: "#154163",
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  unitLocation: {
    backgroundColor: "#154163",
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
