import { useQuery } from "@tanstack/react-query";
import { getDailySupersetById } from "../../api/apiWorkoutPlan";

export function useDailySuperset(dailySupersetId: string) {
  const {
    data: dailySuperset,
    error,
    isPending,
  } = useQuery({
    queryKey: ["dailySuperset", dailySupersetId],
    queryFn: () => getDailySupersetById(dailySupersetId),
    enabled: !!dailySupersetId,
    throwOnError: true,
  });

  return { dailySuperset, error, isPending };
}
