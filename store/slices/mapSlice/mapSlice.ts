import { createSlice } from "@reduxjs/toolkit";
import 'react-native-get-random-values'
import { v4 } from 'uuid'

type initialStateProps = {
  mapName: string | null;
  mapLocation: {
    latitude: number | null;
    longitude: number | null;
  };
  enableEdition: boolean;
  enableGetLocation: boolean;
  enableDraw: boolean;
  listMaps?: unknown[];
};

const initialState: initialStateProps = {
  mapName: null,
  mapLocation: {
    latitude: null,
    longitude: null,
  },
  enableEdition: false,
  enableGetLocation: false,
  enableDraw: false,
  listMaps: [],
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    switchEditionMap: (state) => {
      state.enableGetLocation = !state.enableGetLocation;
    },
    handleMapLocation: (state, action) => {
      state.mapLocation = action.payload;
    },
    handleMapName: (state, action) => {
      state.mapName = action.payload;
    },
    addNewMap: (state) => {
      const randomId = v4()

      state.listMaps?.push({
        id: randomId,
        name: state.mapName,
        center: `${state.mapLocation.latitude}; ${state.mapLocation.longitude}`,
        zoom: 14,
      });
    },
  },
});

export const { switchEditionMap, handleMapLocation, handleMapName, addNewMap } =
  mapSlice.actions;
export default mapSlice.reducer;
