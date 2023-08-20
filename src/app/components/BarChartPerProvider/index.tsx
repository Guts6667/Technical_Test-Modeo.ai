'use client';
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import ProviderActivity from "../../../utils/interface/providerActivity";

const BarChart: React.FC = () => {
  const ProviderActivity = useSelector(
    (state: RootState) => state.providers.selectedProviderActivity
  );
  const selectedProvider = useSelector(
    (state: RootState) => state.providers.selectedProvider
  );

  // Create a ref to hold the chart instance
  const chartRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    // Initialize the chart when the component mounts
    if (!chartRef.current) {
      chartRef.current = echarts.init(document.getElementById("main"));
    }

    if (ProviderActivity.length > 0) {
      const activities = ProviderActivity.map(
        (dataItem: ProviderActivity) => dataItem.activities
      );

      // Update the chart's options with the retrieved data
      // Let's add a tooltip to the chart that will show the provider name and the activity value
      const option = {
        title: {
          text: "Provider Activity",
          textStyle: {
            color: "white",
          },
        },
        tooltip: {
          // Move tooltip configuration here
          trigger: "axis",
          formatter: "{b}: {c}", // Format to show provider name and activity value
        },

        xAxis: {
          type: "category", // Use category type for the y-axis
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ], // List of months
        },
        yAxis: {
          type: "value",
          data: activities, // Use the activity values as y-axis data
        },
        series: [
          {
            data: activities, // Use the activity values as series data
            type: "bar",
          },
        ],
      };

      // Set the updated options to the chart
      chartRef.current.setOption(option);
    }
    // Let's make the chart resize when the window resizes
    window.addEventListener("resize", () => {
      chartRef.current?.resize();
    });

    // Clean up the chart when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
      }
    };
  }, [ProviderActivity]);

  return (
    <div
      className="w-full h-64 bg-white rounded-lg shadow-md w-full h-[400px]"
      id="main"
     
    />
  );
};

export default BarChart;
