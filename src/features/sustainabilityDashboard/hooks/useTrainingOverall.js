import { useQuery } from "@apollo/client";
import { GET_TRAINING_OVERALL } from "../../../graphql/queries/wt_dashboardRequests";

export function useTrainingOverall(wetmillId) {
  const { data, loading, error } = useQuery(GET_TRAINING_OVERALL, {
    variables: { wetmillId },
    skip: !wetmillId,
  });

  const male = data?.getTrainingAttendanceOverall?.male || 0;
  const female = data?.getTrainingAttendanceOverall?.female || 0;

  const chartData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [male, female],
        backgroundColor: ["#087c8f", "#1b2a4e"],
      },
    ],
  };

  return { loading, error, chartData };
}
