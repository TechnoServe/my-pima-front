import { useQuery } from "@apollo/client";
import { GET_TRAINING_BY_TOPIC } from "../../../graphql/queries/wt_dashboardRequests";

export function useTrainingByTopic(wetmillId) {
  const { data, loading, error } = useQuery(GET_TRAINING_BY_TOPIC, {
    variables: { wetmillId },
    skip: !wetmillId,
  });

  // raw array of { topic, male, female }
  const raw = data?.getTrainingAttendanceByTopic || [];

  // build chart.js data here once
  const chartData = {
    labels: raw.map((t) => t.topic),
    datasets: [
      {
        label: "Male",
        data: raw.map((t) => t.male),
        backgroundColor: "#087c8f",
      },
      {
        label: "Female",
        data: raw.map((t) => t.female),
        backgroundColor: "#1b2a4e",
      },
    ],
  };

  console.log(chartData);

  return { raw, loading, error, chartData };
}
