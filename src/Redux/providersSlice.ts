"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ProvidersState {
  providers: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ProvidersState = {
  providers: [],
  loading: false,
  error: null,
};

export const providersSlice = createSlice({
  name: "providers",
  initialState,
  reducers: {
    setProviders: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.providers = payload;
    },
    fetchProvidersSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.providers = payload;
    },
    fetchProvidersFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.providers = [];
    },
    getProviders: (state) => {
      state.loading = true;
      console.log("getProviders", state.providers);
    },
    setSelectedProvider: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.providers = payload;
    }
  },
});

export const {
  setProviders,
  fetchProvidersSuccess,
  fetchProvidersFailure,
  getProviders,
  setSelectedProvider
} = providersSlice.actions;

export default providersSlice.reducer;
