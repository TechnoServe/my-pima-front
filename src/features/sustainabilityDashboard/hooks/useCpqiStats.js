import { useQuery } from "@apollo/client";
import { GET_CPQI_STATS } from "../../../graphql/queries/wt_dashboardRequests";

export function useCpqiStats(wetmillId) {
    const { data, loading, error } = useQuery(
        GET_CPQI_STATS,
        { variables: { wetmillId }, skip: !wetmillId }
    );

    const s = data?.getCpqiStats || {
        sections: [], overallYesPct: 0, overallNoPct: 0,
    };

    // stacked-bar data
    const labels = s.sections.map(x => x.sectionName);
    const chartData = {
        labels,
        datasets: [
            { label: "Yes %", data: s.sections.map(x => x.yesPct), backgroundColor: "#087c8f" },
            { label: "No %", data: s.sections.map(x => x.noPct), backgroundColor: "#cccccc" },
        ],
    };
    const chartOptions = {
        responsive: true, maintainAspectRatio: true,
        scales: {
            x: { stacked: true, grid: { display: false } },
            y: {
                stacked: true, beginAtZero: true, max: 100,
                ticks: { callback: v => v + "%" }
            }
        },
        plugins: {
            legend: { position: "top" },
            tooltip: { callbacks: { label: ctx => ctx.raw.toFixed(1) + "%" } }
        }
    };

    // overall doughnut
    const pieData = {
        labels: ["Yes %", "No %"],
        datasets: [{
            data: [s.overallYesPct, s.overallNoPct],
            backgroundColor: ["#087c8f", "#cccccc"]
        }]
    };
    const pieOptions = {
        cutout: "60%",
        responsive: true, maintainAspectRatio: true,
        plugins: {
            legend: { position: "top" },
            tooltip: { callbacks: { label: ctx => ctx.raw.toFixed(1) + "%" } }
        }
    };

    return { bar: { chartData, chartOptions }, pie: { pieData, pieOptions }, loading, error };
}
