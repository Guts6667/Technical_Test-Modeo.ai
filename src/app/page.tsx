"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchData from "../utils/service/dataFetching"; // Adjust the path accordingly
import { RootState } from "@/Redux/store";
import ProviderList from "./components/ProviderList";
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
      <h1>Dashboard</h1>
      <span>
        Test realized for{" "}
        <a className="text-tertiary" href="modeo.ai">
          Modeo.ai
        </a>
      </span>
      {dataProviders.loading && <ProviderList />}
    </React.Fragment>
  );
};

export default Home;
