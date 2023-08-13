import cubejs from '@cubejs-client/core';

const useCubeApi = cubejs(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTA3OTMwNDN9.by1HD6M6l-g0pTEWRaXvYwsSWFdSI9VejrTdOGOodPM',
  { apiUrl: 'https://silver-quelea.gcp-europe-west3-a.cubecloudapp.dev/cubejs-api/v1' }
);

const loadCubeApi = async (query : any) => {
  const resultSet = await useCubeApi.load(query);
  console.log(resultSet);
  return resultSet;
}

export default loadCubeApi;
