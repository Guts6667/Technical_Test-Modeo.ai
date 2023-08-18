const providerList = {
  dimensions: ["datamart_daily_user_activities.provider"],
  order: {
    "datamart_daily_user_activities.activities": "desc",
  },
};

const activityPerProvider = {
  order: {
    "datamart_daily_user_activities.activities": "desc",
  },
  measures: ["datamart_daily_user_activities.activities"],
  timeDimensions: [
    {
      dimension: "datamart_daily_user_activities.date",
      granularity: "month",
    },
  ],
  dimensions: ["datamart_daily_user_activities.provider"],
};
export const queries = { providerList, activityPerProvider };
