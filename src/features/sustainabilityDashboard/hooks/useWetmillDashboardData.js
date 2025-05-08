import { useManagerNeeds } from "./useManagerNeeds";
import { useMissingDocuments } from "./useMissingDocuments";
import { useInfrastructureChecklist } from "./useInfrastructureChecklist";
import { useFinancialBreakdown } from "./useFinancialBreakdown";
import { useEmployeeStats } from "./useEmployeeStats";
import { useCpqiStats } from "./useCpqiStats";
import { useCpqiChecklist } from "./useCpqiChecklist";
import { useTrainingByTopic } from "./useTrainingByTopic";
import { useTrainingOverall } from "./useTrainingOverall";
import { useKpiStats } from "./useKpiStats";
import { useParchmentDistribution } from "./useParchmentDistribution";

export function useWetmillDashboardData(wetmillId) {
    const managerNeeds = useManagerNeeds(wetmillId);
    const missingDocuments = useMissingDocuments(wetmillId);
    const infrastructure = useInfrastructureChecklist(wetmillId);
    const financials = useFinancialBreakdown(wetmillId);
    const employeeStats = useEmployeeStats(wetmillId);
    const cpqiStats = useCpqiStats(wetmillId);
    const cpqiChecklist = useCpqiChecklist(wetmillId);
    const trainingByTopic = useTrainingByTopic(wetmillId);
    const trainingOverall = useTrainingOverall(wetmillId);
    const kpiStats = useKpiStats(wetmillId);
    const parchmentDist = useParchmentDistribution(wetmillId);

    return {
        managerNeeds,
        missingDocuments,
        infrastructure,
        financials,
        employeeStats,
        cpqiStats,
        cpqiChecklist,
        trainingByTopic,
        trainingOverall,
        kpiStats,
        parchmentDist
    };
}
