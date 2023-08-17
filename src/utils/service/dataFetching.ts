import  { fetchCubeApi } from "@/utils/service/useCubeApi";
import { queries } from "@/utils/service/queries";
import { setProvidersList } from "@/Redux/providersSlice";

/**
 *  Fetch data from cubejs API and dispatch it to the store
 * @param dispatch
 * @returns array of providers
 *
 */
const loadProviderList = async (dispatch: any) => {
  try {
    // Calls the function to fetch data from cubejs API
    const result = await fetchCubeApi.fetchProviderList(queries.providerList);
    console.log("%cResult from fetchData: ",  "color: yellow;  font-size: 14px", result);
    dispatch(setProvidersList(result));
  } catch (error) {
    console.error(error);
  }
};

export default loadProviderList;
