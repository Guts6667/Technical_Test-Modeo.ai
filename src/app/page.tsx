"use client";
import React from "react";
import { RootState } from "../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import loadCubeApi from "@/utils/service/useCubeApi";
import { queries } from "@/utils/service/queries";
import { setProviders, getProviders } from "@/Redux/providersSlice";

const Home: React.FC = () => {
  const dataProviders = useSelector((state: RootState) => state.providers);
  const [datas, setDatas] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  console.log(dataProviders);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const fetchCubeData = async () => {
      try {
        setLoading(true); 
        const result = await loadCubeApi(queries.activitiesPerProvider);
        setDatas(result.tablePivot()); // Update state with fetched data
        dispatch(setProviders(result.tablePivot()));
        dispatch(getProviders());
        setLoading(false); 
      } catch (error) {
        console.error(error);
        setLoading(false); 
      }
    };

    fetchCubeData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <span>
        Test realized for{" "}
        <a className="text-tertiary" href="modeo.ai">
          Modeo.ai
        </a>
      </span>
    </div>
  );
};

export default Home;
