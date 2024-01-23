import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
  unitName: string | null;
  unitID: number | null;
  unitLocation: {
    latitude: number | null;
    longitude: number | null;
  };
  enableGetUnitLocation: boolean;
};

const initialState: initialStateProps = {
  unitName: null,
  unitID: null,
  unitLocation: {
    latitude: null,
    longitude: null,
  },
  enableGetUnitLocation: false,
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
    },
    handleUnitProps: (state, action) => {
      state.unitID = action.payload.unitID;
      state.unitName = action.payload.unitName;
    },
  },
});

export const { switchEditionUnit, handleUnitLocation, handleUnitProps } =
  unitSlice.actions;
export default unitSlice.reducer;
