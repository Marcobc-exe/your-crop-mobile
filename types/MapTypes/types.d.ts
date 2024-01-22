type mapLocationProps = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

type Camera = {
  center: {
    latitude: number;
    longitude: number;
  };
  pitch: number;
  heading: number;

  // Only on iOS MapKit, in meters. The property is ignored by Google Maps.
  //  altitude: number,

  // Only when using Google Maps.
  zoom: number;
};

export { mapLocationProps, Camera };
