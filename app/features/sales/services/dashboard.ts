import { procedure } from "~/utils/procedure";

const chartData = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

const mockData = {
  dashboard: {
    revenue: {
      value: "$45,231.89",
      compared: "+20.1% from last month",
    },
    subscription: {
      value: "+2350",
      compared: "+180.1% from last month",
    },
    sales: {
      value: "+12,234",
      compared: "+20.1% from last month",
    },
    activeUser: {
      value: "+2350",
      compared: "+180.1% from last month",
    },
  },
  overview: {
    chart: chartData,
  },
};

export const dashboardService = {
  getLatest: procedure.query<typeof mockData>(() => ({
    queryKey: ["dashboard"],
    queryFn: async () => {
      console.log("fetching dashboard data");

      // sleep for 1 second to simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 1_000));

      return mockData;
    },
  })),
};
