"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import * as echarts from "echarts";

const ActivityNumber: React.FC = () => {
  const selectedProviderActivity = useSelector(
    (state: RootState) => state.providers.selectedProviderActivity
  );
  selectedProviderActivity.map((element) => console.log(element.activities));
  console.log("Activity:", selectedProviderActivity);
  // We need to build a responsive line chart using Apache eCharts
  const option = {
    title: {
      text: "Provider Activities",
      // Let's change the color of the title
      textStyle: {
        color: "white",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "Septembre",
        "October",
        "November",
        "December",
      ],
    },
    yAxis: {
      type: "value",
    },

    tooltip: {
      // Add tooltip configuration here
      trigger: "axis", // Show tooltip when hovering over data points
      formatter: "{b}: {c}", // Format of the tooltip content
    },

    series: [
      {
        data: selectedProviderActivity.map((element) => element.activities),
        type: "line",
      },
    ],
  };
  // Let's make the chart resize when the window resizes
  window.addEventListener("resize", () => {
    const chartContainer = document.getElementById("activity-number");
    const chart = echarts.init(chartContainer);
    chart.resize();
  });
  useEffect(() => {
    const chartContainer = document.getElementById("activity-number");
    const chart = echarts.init(chartContainer);
    chart.setOption(option); // option is the chart configuration you defined

    // Clean up the chart instance when the component unmounts
    return () => {
      chart.dispose();
    };
  }, [option]);

  return (
    <div
      id="activity-number"
      className=" w-full h-64 bg-white rounded-lg shadow-md"
    ></div>
  );
};

export default ActivityNumber;
