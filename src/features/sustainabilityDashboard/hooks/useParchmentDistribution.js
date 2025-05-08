import { useQuery } from "@apollo/client";
import { GET_PARCHMENT_DISTRIBUTION } from "../../../graphql/queries/wt_dashboardRequests";

export function useParchmentDistribution(wetmillId) {
    const { data, loading, error } = useQuery(
        GET_PARCHMENT_DISTRIBUTION,
        { variables: { wetmillId }, skip: !wetmillId }
    );

    const dist = data?.getParchmentDistribution || [];
    const chartData = {
        labels: dist.map(d => d.grade),
        datasets: [{
            data: dist.map(d => d.value),
            backgroundColor: ["#1b2a4e", "#087c8f", "#005f6b", "#cccccc", "#eeeeee"],
            borderWidth: 3,
            hoverOffset: 15,
            cutout: "65%",
        }],
    };

    return { chartData, loading, error };
}
