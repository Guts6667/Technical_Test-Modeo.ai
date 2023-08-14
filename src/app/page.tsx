"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchData from "../utils/service/dataFetching"; // Adjust the path accordingly
import { RootState } from "@/Redux/store";
import ProviderList from "./components/ProviderList";
import ActivityNumber from "./components/ActivityNumber";
/**
 *  Home page
 * @description This is the home page of the app where the data is fetched and displayed
 * @component Home
 * @category Pages
 * @returns {React Component} Home
 */
const Home: React.FC = () => {
  const dataProviders = useSelector((state: RootState) => state.providers);
  const dispatch = useDispatch();
  // Fetch data from cubejs and dispatch it to the store on component mount
  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return (
    <React.Fragment>
      <header className="flex flex-col w-full items-center p-5">
        <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
        <span>
          Test realized for{" "}
          <a className="text-tertiary font-bold" href="modeo.ai">
            Modeo.ai
          </a>
        </span>
      </header>

       <ProviderList />
       <ActivityNumber />
    </React.Fragment>
  );
};

export default Home;
