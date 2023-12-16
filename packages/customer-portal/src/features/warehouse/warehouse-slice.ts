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
  markers: MarkerTypes[];
  searchLatLng: searchLatLansTypes;
}

const initialState: WarehouseSlice = {
  searchLatLng: {
    lat: -1,
    lng: -1,
  },
  markers: [
    {
      lat: -1,
      lng: -1,
      imageUrl: "",
    },
  ],
};

const WarehoueSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateMarksers: (state, action: PayloadAction<MarkerTypes>) => {
      state.markers.push(action.payload);
    },
    updateSearchLatLng: (state, action: PayloadAction<searchLatLansTypes>) => {
      state.searchLatLng.lat = action.payload["lat"];
      state.searchLatLng.lng = action.payload["lng"];
    },
  },
});

export const { updateMarksers, updateSearchLatLng } = WarehoueSlice.actions;

export default WarehoueSlice.reducer;
