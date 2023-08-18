"use client";

import SelectedProviderActivity from "@/utils/interface/providerActivity";
import ProviderList from "@/utils/interface/providerList";
/**
 * This file contains the redux slice for the providers.
 */
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ProvidersState {
  providers: ProviderList[];
  selectedProvider: string;
  selectedProviderActivity: SelectedProviderActivity[];
  isLoaded: boolean;
  error: string | null;
}
// Define the initial state using that type
const initialState: ProvidersState = {
  providers: [],
  selectedProvider: "no provider selected",
  selectedProviderActivity: [],
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
          state.providers
        );
        console.log("Store Provider List:", state.providers);
      } else {
        state.error = "No providers!";
      }
    },
    setSelectedProvider: (state, { payload }) => {
      state.error = null;
      state.selectedProvider = payload;
      console.log("Store Provider selected:", state.selectedProvider);
    },
    setSelectedProviderActivity: (state, { payload }) => {
      state.error = null;
      state.selectedProviderActivity = payload;
      console.log("Store Provider Activity:", state.selectedProviderActivity);
    },
    resetSelectedProvidersDatas: (state) => {
      state.providers = state.providers;
      state.selectedProvider = initialState.selectedProvider;
      state.selectedProviderActivity = initialState.selectedProviderActivity;
    },
  },
});

export const {
  setProvidersList,
  setSelectedProvider,
  setSelectedProviderActivity,
  resetSelectedProvidersDatas,
} = providersSlice.actions;

export default providersSlice.reducer;
