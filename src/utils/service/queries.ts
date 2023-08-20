const providerList = {
  dimensions: ["datamart_daily_user_activities.provider"],
  order: {
    "datamart_daily_user_activities.activities": "desc",
  },
};

const activityPerProvider = {
  dimensions: ["datamart_daily_user_activities.provider"],
  order: {
    "datamart_daily_user_activities.activities": "desc",
  },
  measures: ["datamart_daily_user_activities.activities"],
  timeDimensions: [
    {
      dimension: "datamart_daily_user_activities.date",
      granularity: "month",
      dateRange: ["2023-01-01", "2023-12-31"],
    },
  ],
};
export const queries = { providerList, activityPerProvider };
