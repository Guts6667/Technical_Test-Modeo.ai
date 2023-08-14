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
    <div className="p-5 flex flex-col gap-5">
        <h2 className="font-bold text-lg">Providers</h2>
      <ul className="text-primary flex flex-row gap-5">
        {dataProviders.map((element: ProviderData, index: number) => {
          return <li className="px-5 py-2 rounded-full border-2 border-tertiary cursor-pointer hover:bg-tertiary transition duration-200" key={index}>{element.provider}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProviderList;
