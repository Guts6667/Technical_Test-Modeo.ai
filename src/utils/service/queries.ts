const providerList = {
  dimensions: ["datamart_daily_user_activities.provider"],
  order: {
    "datamart_daily_user_activities.activities": "desc",
  },
};

const query2 = {
  measures: ["datamart_daily_user_activities.activities"],
  timeDimensions: [
    {
      dimension: "datamart_daily_user_activities.date",
      granularity: "month",
    },
  ],
  order: {
    "datamart_daily_user_activities.date": "asc",
  },
};

const query3 = {
  measures: ["datamart_daily_user_activities.activities"],
  timeDimensions: [
    {
      dimension: "datamart_daily_user_activities.date",
    },
  ],
  dimensions: ["datamart_daily_user_activities.provider"],
  order: {
    "datamart_daily_user_activities.activities": "desc",
  },
};

export const queries = { providerList, query2, query3 };
