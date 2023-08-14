"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import ProviderData from "@/utils/interface/providerData";

const ProviderList: React.FC = () => {
  const dataProviders = useSelector(
    (state: RootState) => state.providers.providers
  );

  console.log("Here's the current state of the store: ", dataProviders);
  return (
    <div>
      <ul className="text-primary">
        {dataProviders.map((element: ProviderData, index: number) => {
          return <li key={index}>{element.provider}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProviderList;
