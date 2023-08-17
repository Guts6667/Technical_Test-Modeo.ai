"use client";

import ProviderList from "@/utils/interface/providerList";
/**
 * This file contains the redux slice for the providers.
 */
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ProvidersState {
  providers: ProviderList[];
  selectedProvider: string | null;
  isLoaded: boolean;
  error: string | null;
}
// Define the initial state using that type
const initialState: ProvidersState = {
  providers: [],
  selectedProvider: null,
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
          "selectedProvider:",
          state.selectedProvider
        );
        console.log(state.providers);
        console.log("selectedProvider:", state.selectedProvider);
      } else {
        state.error = "No providers!";
      }
    },
    setSelectedProvider: (state, { payload }) => {
      state.error = null;
      state.providers = state.providers;
      state.selectedProvider = payload;
      if (state.selectedProvider)
        console.log("Provider selected:", state.selectedProvider);
    },
  },
});

export const { setProvidersList, setSelectedProvider } = providersSlice.actions;

export default providersSlice.reducer;
