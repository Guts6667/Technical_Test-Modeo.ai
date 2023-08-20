'use client';
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

const TotalActivity: React.FC = () => {
  const selectedProviderActivity = useSelector(
    (state: RootState) => state.providers.selectedProviderActivity
  );
  console.log("Activity:", selectedProviderActivity);
  const totalActivity = selectedProviderActivity.reduce(
    (acc, cur) => acc + parseInt(cur.activities),
    0
  );
  return (
    <div className="flex flex-col gap-2 my-7 ">
      <h3 className="font-bold text-lg">Total Activity</h3>
      <div className=" flex self-center font-bold justify-center items-center p-5 border-2 p-5 rounded-full border-tertiary w-36 h-36 text-center ">
        <span className="text-tertiary text-3xl">{totalActivity}</span>
      </div>
    </div>
  );
};

export default TotalActivity;
