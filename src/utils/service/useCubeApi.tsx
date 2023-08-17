import cubejs from "@cubejs-client/core";
import ProviderList from "../interface/providerList"

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


export  const fetchCubeApi =  {fetchProviderList}

