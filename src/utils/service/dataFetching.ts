import { queries } from "@/utils/service/queries";
import { setProvidersList, setSelectedProvider } from "@/Redux/providersSlice";
import fetchCubeApi from "./useCubeApi";

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
    console.log(
      "%cResult from loadProviderList: ",
      "color: yellow;  font-size: 14px",
      result
    );
    dispatch(setProvidersList(result));
  } catch (error) {
    console.error(error);
  }
};

const loadActivityPerProvider = async (dispatch: any, provider: string) => {
  try {
    // Calls the function to fetch data from cubejs API
    const result = await fetchCubeApi.fetchActivityPerProvider(
      queries.activityPerProvider,
      provider
    );
    console.log(
      "%cResult from loadActivityPerProvider: ",
      "color: yellow;  font-size: 14px",
      result
    );
    dispatch(setSelectedProvider(result));
  } catch (error) {
    console.error(error);
  }
};

export const dataFetching = { loadProviderList, loadActivityPerProvider };
export default dataFetching;
