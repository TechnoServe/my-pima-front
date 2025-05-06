import { useQuery } from "@apollo/client";
import { GET_MANAGER_NEEDS_RANKING } from "../../../graphql/queries/wt_dashboardRequests";

export function useManagerNeeds(wetmillId) {
  const { data, loading, error } = useQuery(GET_MANAGER_NEEDS_RANKING, {
    variables: { wetmillId },
    skip: !wetmillId,
  });
  const raw = data?.getOperationsRanking || []; 
  const chartData = {
    labels: raw.map((r) => r.issue),
    datasets: [
      {
        label: "Rank",
        data: raw.map((r) => r.rank),
        backgroundColor: "#1b2a4e",
        borderRadius: 6,
      },
    ],
  };
  return { chartData, loading, error, raw };
}
