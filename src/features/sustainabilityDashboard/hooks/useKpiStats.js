import { useQuery } from "@apollo/client";
import { GET_KPI_STATS } from "../../../graphql/queries/wt_dashboardRequests";

export function useKpiStats(wetmillId) {
    const { data, loading, error } = useQuery(GET_KPI_STATS, {
        variables: { wetmillId },
        skip: !wetmillId,
    });

    const stats = data?.getKpiStats || { cherry: 0, total: 0 };

    return {
        loading,
        error,
        price: stats.cherry,
        totalSales: stats.total,
    };
}
