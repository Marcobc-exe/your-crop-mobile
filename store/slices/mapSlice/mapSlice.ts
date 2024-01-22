import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
  mapLocation: {
    latitude: number | null;
    longitude: number | null
  };
  enableEdition: boolean;
  enableGetLocation: boolean;
  enableDraw: boolean;
};

const initialState: initialStateProps = {
  mapLocation: {
    latitude: null,
    longitude: null
  },
  enableEdition: false,
  enableGetLocation: false,
  enableDraw: false,
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
  },
});

export const { switchEditionMap, handleMapLocation } = mapSlice.actions;
export default mapSlice.reducer;
