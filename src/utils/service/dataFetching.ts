import loadCubeApi from "@/utils/service/useCubeApi";
import { queries } from "@/utils/service/queries";
import { setProviders, getProviders } from "@/Redux/providersSlice";

/**
 *  Fetch data from cubejs API and dispatch it to the store
 * @param dispatch
 * @returns array of providers
 *
 */
const fetchData = async (dispatch: any) => {
  try {
    // Calls the function to fetch data from cubejs API
    const result = await loadCubeApi(queries.activitiesPerProvider);
    console.log("%cResult from fetchData: ",  "color: yellow;  font-size: 14px", result);
    dispatch(setProviders(result));
    dispatch(getProviders());
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
