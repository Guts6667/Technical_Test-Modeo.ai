"use client";

/**
 * This file contains the redux slice for the providers.
 */
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ProvidersState {
  providers: any[];
  loading: boolean;
  error: string | null;
}
// Define the initial state using that type
const initialState: ProvidersState = {
  providers: [],
  loading: false,
  error: null,
};

// Define reducers and actions
export const providersSlice = createSlice({
  name: "providers",
  initialState,
  reducers: {
    // Set the providers to the state and set loading to false and error to null to indicate that the request has been completed
    setProviders: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.providers = payload;
    },
    // Set loading to true to indicate that the request is in progress
    fetchProvidersSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.providers = payload;
    },
    // Set loading to false and set error to the error message to indicate that the request has failed
    fetchProvidersFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.providers = [];
    },
    getProviders: (state) => {
      state.loading = true;
      state.error = null;
      console.log("getProviders", state.providers);
    },
  
  },
});

export const {
  setProviders,
  fetchProvidersSuccess,
  fetchProvidersFailure,
  getProviders,
} = providersSlice.actions;

export default providersSlice.reducer;
