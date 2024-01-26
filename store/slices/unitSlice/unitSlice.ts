import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
  unitName: string | null;
  unitID: number | null;
  unitLocation: {
    latitude: number | null;
    longitude: number | null;
  };
  enableGetUnitLocation: boolean;
  connected?: boolean;
  failure?: boolean;
  irrigating?: boolean;
  listUnits?: unknown[];
};

const initialState: initialStateProps = {
  unitName: null,
  unitID: null,
  unitLocation: {
    latitude: null,
    longitude: null,
  },
  enableGetUnitLocation: false,
  connected: false,
  failure: false,
  irrigating: false,
  listUnits: [],
};

export const unitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    switchEditionUnit: (state) => {
      state.enableGetUnitLocation = !state.enableGetUnitLocation;
    },
    handleUnitLocation: (state, action) => {
      state.unitLocation = action.payload;

      state.listUnits?.push({
        id: state.unitID,
        name: state.unitName,
        connected: state.connected,
        failure: state.failure,
        irrigating: state.irrigating,
        coodinates: [
          action.payload.latitude,
          action.payload.longitude
        ],
      });
    },
    handleUnitProps: (state, action) => {
      state.unitID = action.payload.unitID; // parse to integer
      state.unitName = action.payload.unitName;
    },
  },
});

export const { switchEditionUnit, handleUnitLocation, handleUnitProps } =
  unitSlice.actions;
export default unitSlice.reducer;
