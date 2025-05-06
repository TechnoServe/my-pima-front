import { useQuery } from "@apollo/client";
import { GET_INFRASTRUCTURE_CHECKLIST } from "../../../graphql/queries/wt_dashboardRequests";

export function useInfrastructureChecklist(wetmillId) {
  const { data, loading, error } = useQuery(GET_INFRASTRUCTURE_CHECKLIST, {
    variables: { wetmillId },
    skip: !wetmillId,
  });
  const result = data?.getInfrastructureChecklist || {
    items: [],
    goodItems: [],
    repairItems: [],
  };
  return { ...result, loading, error };
}
