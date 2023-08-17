"use client";

import ProviderList from "@/utils/interface/providerList";
/**
 * This file contains the redux slice for the providers.
 */
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ProvidersState {
  providers: ProviderList[];
  selectedProvider: string ;
  selectedProviderActivity: number;
  isLoaded: boolean;
  error: string | null;
}
// Define the initial state using that type
const initialState: ProvidersState = {
  providers: [],
  selectedProvider: '',
  selectedProviderActivity: 0,
  isLoaded: false,
  error: null,
};

// Define reducers and actions
export const providersSlice = createSlice({
  name: "providers",
  initialState,
  reducers: {
    // Set the providers to the state and set loading to false and error to null to indicate that the request has been completed
    setProvidersList: (state, { payload }) => {
      // state.isLoaded = false;
      state.error = null;
      state.providers = payload;
      if (state.providers.length > 0) {
        state.isLoaded = true;
        console.log(
          "Store updated:",
          "isLoaded:",
          state.isLoaded,
          state.providers,
        );
        console.log("Provider List:", state.providers);
      } else {
        state.error = "No providers!";
      }
    },
    setSelectedProvider: (state, { payload }) => {
      state.error = null;
      state.selectedProvider = payload;
      if (state.selectedProvider)
        console.log("Provider selected:", state.selectedProvider);
    },
    setSelectedProviderActivity: (state, { payload }) => {
      state.error = null;
      state.selectedProviderActivity = payload;
      if (state.selectedProvider)(console.log("Provider Activity:", state.selectedProvider));
    }
  },
});

export const { setProvidersList, setSelectedProvider, setSelectedProviderActivity } = providersSlice.actions;

export default providersSlice.reducer;
