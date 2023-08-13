const activitiesPerProvider = {
  order: {
    "datamart_daily_user_activities.activities": "asc",
  },
  measures: ["datamart_daily_user_activities.activities"],
  timeDimensions: [
    {
      dimension: "datamart_daily_user_activities.date",
    },
  ],
  dimensions: ["datamart_daily_user_activities.provider"],
};

export const queries = { activitiesPerProvider}
