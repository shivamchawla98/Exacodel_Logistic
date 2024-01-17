import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface MarkerTypes {
//   lat: number;
//   lng: number;
//   imageUrl: string;
// }
interface searchLatLansTypes {
  lat: number;
  lng: number;
}

interface WarehouseSlice {
  markers: any[];
  searchLatLng: searchLatLansTypes;
  warehouseId: string;
  moveInDate: Date;
  moveOutDate: Date;
}

const initialState: WarehouseSlice = {
  searchLatLng: {
    lat: -1,
    lng: -1,
  },
  warehouseId: "",
  markers: [{ latitude: "20.5937", longitude: "78.9629" }],
  moveInDate: new Date(),
  moveOutDate: new Date(),
};

const WarehoueSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // updateMarksers: (state, action: PayloadAction<MarkerTypes>) => {
    //   state.markers.push(action.payload);
    // },
    updateSearchLatLng: (state, action: PayloadAction<searchLatLansTypes>) => {
      state.searchLatLng.lat = action.payload["lat"];
      state.searchLatLng.lng = action.payload["lng"];
    },
    updateWarehouseId: (state, action: PayloadAction<string>) => {
      state.warehouseId = action.payload;
    },
    updateWarehouseMarkers: (state, action: PayloadAction<[]>) => {
      state.markers = action.payload;
    },
    updateMoveInDate: (state, action: PayloadAction<Date>) => {
      state.moveInDate = action.payload;
    },
    updateMoveOutDate: (state, action: PayloadAction<Date>) => {
      state.moveOutDate = action.payload;
    },
  },
});

export const {
  updateSearchLatLng,
  updateWarehouseId,
  updateWarehouseMarkers,
  updateMoveInDate,
  updateMoveOutDate,
} = WarehoueSlice.actions;

export default WarehoueSlice.reducer;
