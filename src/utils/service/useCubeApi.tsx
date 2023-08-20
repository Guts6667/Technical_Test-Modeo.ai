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
  query.filters = query.filters || [];

  query.filters.push({
    dimension: "datamart_daily_user_activities.provider",
    operator: "equals",
    values: [provider],
  });
  try {
    const resultSet = await useCubeApi.load(query);
    console.log("RESULT SET:", resultSet);

    // Map data to your desired format;
    console.log("Provider:", provider);

    const providerActivity = resultSet.tablePivot().map((dataItem: any) => {
      return {
        provider: dataItem["datamart_daily_user_activities.provider"],
        // You might need to adjust this property access based on your actual response
        activities: dataItem["datamart_daily_user_activities.activities"],
      };
    });

    console.log("Provider Activity:", providerActivity[0].activities);
    return providerActivity;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array or handle the error appropriately
  }
};
const fetchCubeApi = { fetchProviderList, fetchActivityPerProvider };

export default fetchCubeApi;
