import { createSlice } from "@reduxjs/toolkit";

type coordinates = {
  latitude: number;
  longitude: number;
};

type initialStateProps = {
  sectorName: string | null;
  sectorID: number | null;
  sectorCoordinates: coordinates[];
  enableGetSectorCoordinates: boolean;
  state?: number | null;
  deviceId?: number | null;
  program?: number | null;
  area?: number | null;
  crop?: string | null;
  pumps?: [number] | null;
  listSectors?: unknown[];
};

const initialState: initialStateProps = {
  sectorName: null,
  sectorID: null,
  sectorCoordinates: [],
  enableGetSectorCoordinates: false,
  state: null,
  deviceId: null,
  program: null,
  area: null,
  crop: null,
  pumps: [1],
  listSectors: []
};

export const sectorSlice = createSlice({
  name: "sector",
  initialState,
  reducers: {
    switchEditionSector: (state) => {
      state.enableGetSectorCoordinates = !state.enableGetSectorCoordinates;
    },
    handleSectorList: (state, action) => {
      state.listSectors?.push({
        id: state.sectorID,
        deviceId: state.deviceId,
        name: state.sectorName,
        state: state.state,
        program: state.program,
        area: state.area,
        crop: state.crop,
        pump: state.pumps,
      })
    },
    handleSectorProps: (state, action) => {
      const sectorName = action.payload.sectorName;
      const sectorID = action.payload.sectorID;

      state.sectorName = sectorName;
      state.sectorID = sectorID;
    },
  },
});

export const { switchEditionSector, handleSectorList, handleSectorProps } =
  sectorSlice.actions;
export default sectorSlice.reducer;
