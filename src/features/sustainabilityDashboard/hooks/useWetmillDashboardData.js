import { useManagerNeeds } from "./useManagerNeeds";
import { useMissingDocuments } from "./useMissingDocuments";
import { useInfrastructureChecklist } from "./useInfrastructureChecklist";
import { useFinancialBreakdown } from "./useFinancialBreakdown";
import { useEmployeeStats } from "./useEmployeeStats";

export function useWetmillDashboardData(wetmillId) {
    const managerNeeds = useManagerNeeds(wetmillId);
    const missingDocuments = useMissingDocuments(wetmillId);
    const infrastructure = useInfrastructureChecklist(wetmillId);
    const financials = useFinancialBreakdown(wetmillId);
    const employeeStats = useEmployeeStats(wetmillId);

    return {
        managerNeeds,
        missingDocuments,
        infrastructure,
        financials,
        employeeStats
    };
}
