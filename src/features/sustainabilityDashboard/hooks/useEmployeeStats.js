import { useQuery } from "@apollo/client";
import { GET_EMPLOYEE_STATS } from "../../../graphql/queries/wt_dashboardRequests";

export function useEmployeeStats(wetmillId) {
    const { data, loading, error } = useQuery(
        GET_EMPLOYEE_STATS,
        {
            variables: { wetmillId },
            skip: !wetmillId,
            fetchPolicy: 'no-cache'
        }
    );

    // default 0s
    const es = data?.getEmployeeStats || {
        menOwnership: 0, womenOwnership: 0,
        menFarmers: 0, womenFarmers: 0,
        menPermanent: 0, womenPermanent: 0,
        menTemporary: 0, womenTemporary: 0,
        menDaily: 0, womenDaily: 0, data: 0
    };

    // shape into Chart.js bar data
    const labels = [
        "Ownership",
        "Farmer Members",
        "Permanent Employees",
        "Temporary Employees",
        "Daily Workers",
    ];
    const chartData = {
        labels,
        datasets: [
            {
                label: "Men",
                data: [
                    es.menOwnership,
                    es.menFarmers,
                    es.menPermanent,
                    es.menTemporary,
                    es.menDaily,
                ],
                backgroundColor: "#1b2a4e",
                borderRadius: 4,
            },
            {
                label: "Women",
                data: [
                    es.womenOwnership,
                    es.womenFarmers,
                    es.womenPermanent,
                    es.womenTemporary,
                    es.womenDaily,
                ],
                backgroundColor: "#005f6b",
                borderRadius: 4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { position: "top", labels: { boxWidth: 12, usePointStyle: true } },
            tooltip: { mode: "index", intersect: false, padding: 10 },
        },
        scales: {
            x: { grid: { display: true }, display: false },
            y: {
                beginAtZero: true,
                ticks: { stepSize: 1, precision: 0 },
                grid: { borderDash: [5, 5] },
            },
        },
    };

    return { chartData, chartOptions, loading, error, raw: es.data };
}
