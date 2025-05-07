import { useQuery } from "@apollo/client";
import { GET_CPQI_CHECKLIST } from "../../../graphql/queries/wt_dashboardRequests";

export function useCpqiChecklist(wetmillId) {
  const { data, loading, error } = useQuery(
    GET_CPQI_CHECKLIST,
    { variables:{ wetmillId }, skip:!wetmillId }
  );
  return {
    sections: data?.getCpqiChecklist || [],
    loading, error
  };
}
