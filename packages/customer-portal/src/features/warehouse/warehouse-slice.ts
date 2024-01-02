import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MarkerTypes {
  lat: number;
  lng: number;
  imageUrl: string;
}
interface searchLatLansTypes {
  lat: number;
  lng: number;
}

interface WarehouseSlice {
  // markers: MarkerTypes[];
  searchLatLng: searchLatLansTypes;
  warehouseId: string;
}

const initialState: WarehouseSlice = {
  searchLatLng: {
    lat: -1,
    lng: -1,
  },
  warehouseId: "",
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
  },
});

export const { updateSearchLatLng, updateWarehouseId } = WarehoueSlice.actions;

export default WarehoueSlice.reducer;
