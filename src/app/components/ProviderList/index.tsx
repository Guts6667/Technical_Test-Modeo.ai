"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import ProviderData from "@/utils/interface/providerList";
import {
  resetSelectedProvidersDatas,
  setSelectedProvider,
} from "@/Redux/providersSlice";
import dataFetching from "@/utils/service/dataFetching";

const ProviderList: React.FC = () => {
  const [previousProvider, setPreviousProvider] = React.useState<string>("");
  const dataProviders = useSelector(
    (state: RootState) => state.providers.providers
  );
  const selectedProvider = useSelector(
    (state: RootState) => state.providers.selectedProvider
  );
  const selectedProviderActivity = useSelector(
    (state: RootState) => state.providers.selectedProviderActivity
  );
  console.log("Selected Provider Activity:", selectedProviderActivity);
  const dispatch = useDispatch();

  const selectProvider = (provider: string) => {
    // dispatch(resetSelectedProvidersDatas());·
    dataFetching.loadActivityPerProvider(dispatch, provider);
  };

  return (
    <div className="p-5 flex flex-col gap-5">
      <h2 className="font-bold text-lg">Providers</h2>
      <ul className="text-primary flex flex-row gap-5">
        {dataProviders.map((element: ProviderData, index: number) => {
          return (
            <li
              onClick={() => {
                selectProvider(element.provider);
              }}
              className=" px-5 py-2 rounded-full border-2 border-tertiary cursor-pointer hover:bg-tertiary transition duration-200"
              key={index}
            >
              {element.provider}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProviderList;
