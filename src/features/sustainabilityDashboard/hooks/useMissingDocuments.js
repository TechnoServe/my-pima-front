import { useQuery } from "@apollo/client";
import { GET_MISSING_DOCUMENTS } from "../../../graphql/queries/wt_dashboardRequests";

export function useMissingDocuments(wetmillId) {
  const { data, loading, error } = useQuery(GET_MISSING_DOCUMENTS, {
    variables: { wetmillId },
    skip: !wetmillId,
  });
  const items = data?.getMissingDocuments || [];
  return { items, loading, error };
}
