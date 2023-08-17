import cubejs from "@cubejs-client/core";
import ProviderList from "../interface/providerList";
import SelectedProviderActivity from "../interface/providerActivity";

const useCubeApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTA3OTMwNDN9.by1HD6M6l-g0pTEWRaXvYwsSWFdSI9VejrTdOGOodPM",
  {
    apiUrl:
      "https://silver-quelea.gcp-europe-west3-a.cubecloudapp.dev/cubejs-api/v1",
  }
);

const fetchProviderList = async (query: any) => {
  // Fetch data from cubejs
  const resultSet = await useCubeApi.load(query);
  console.log("RESULT SET:", resultSet);
  // Map data to ProviderData interface and format it
  const providerData: ProviderList[] = resultSet
    .tablePivot()
    .map((provider: any) => {
      return {
        provider: provider["datamart_daily_user_activities.provider"],
      };
    });

  return providerData;
};

const fetchActivityPerProvider = async (query: any, provider: string) => {
  console.log("hi");
  const resultSet = await useCubeApi.load(query);
  console.log("RESULT SET:", resultSet);

  const providerActivity = resultSet
    .tablePivot()
    .filter(
      (providerData: any) =>
        providerData["datamart_daily_user_activities.provider"] === provider
    )
    .map((providerData: any) => {
      if (
        providerData["datamart_daily_user_activities.provider"] === provider
      ) {
        return {
          activities: parseInt(providerData["datamart_daily_user_activities.activities"]),
        };
      }
    });

  return providerActivity;
};
const fetchCubeApi = { fetchProviderList, fetchActivityPerProvider };

export default fetchCubeApi;
