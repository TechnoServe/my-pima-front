import { useQuery } from "@apollo/client";
import { GET_FINANCIAL_BREAKDOWN } from "../../../graphql/queries/wt_dashboardRequests";
import { centerTextPlugin } from "../utils/chartUtils";

export function useFinancialBreakdown(wetmillId) {
  const { data, loading, error } = useQuery(
    GET_FINANCIAL_BREAKDOWN,
    {
      variables: { wetmillId },
      skip: !wetmillId,
    }
  );

  // default values until the query returns
  const fb = data?.getFinancialBreakdown || {
    totalProfit: 0,
    reserves: 0,
    socialActivities: 0,
    secondPaymentToFarmers: 0,
  };

  // build the doughnut slices (percentages or actual numbers)
  const chartData = {
    labels: [
      "Second payment to farmers",
      "Social activities",
      "Reserves",
    ],
    datasets: [
      {
        data: [
          fb.secondPaymentToFarmers,
          fb.socialActivities,
          fb.reserves,
        ],
        backgroundColor: ["#087c8f", "#005f6b", "#1b2a4e"],
        borderWidth: 2,
      },
    ],
  };

  // options now include a `centerText` block, so the plugin above will read it
  const chartOptions = {
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: "top", labels: { boxWidth: 12, padding: 8 } },
      tooltip: { padding: 10 },
      centerText: {
        text: `FBI ${fb.totalProfit.toLocaleString()}`, // <- updated every hook call
        font: "bold 18px Arial",
        color: "#000",
      },
    },
  };

  return {
    chartData,
    chartOptions,
    plugins: [centerTextPlugin], // only this plugin needed here
    loading,
    error,
    raw: fb.totalProfit,
  };
}
