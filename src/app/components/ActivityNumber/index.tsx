"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import * as echarts from "echarts";

const ActivityNumber: React.FC = () => {
  const dataProviders = useSelector(
    (state: RootState) => state.providers.providers
  );

  useEffect(() => {
    if (dataProviders.length > 0) {
      const stackedLineChart = echarts.init(
        document.getElementById("stackedLineChart") as HTMLElement,
        "dark"
      );

      const option: echarts.EChartsOption = {
        // We need to make sure that each line has a different color
        title: {
          text: "ActivityNumber",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: dataProviders.map((provider) => provider.provider),
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: dataProviders.map((provider) => ({
          name: provider.provider,
          type: "line",
          stack: "Total",
          // We need to make sure that each line has a white color and the tertiary color on hover
          color: "#fff",
          data: provider.activities,
        })),
      };

      stackedLineChart.setOption(option);
    }
  }, [dataProviders]);

  return (
    <section className="p-5">
      <h2 className="font-bold text-lg">ActivityNumber</h2>
      <div
        id="stackedLineChart"
        style={{ width: "100%", height: "500px" }}
      ></div>
    </section>
  );
};

export default ActivityNumber;
