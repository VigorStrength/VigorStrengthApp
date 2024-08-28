import { useQuery } from "@tanstack/react-query";
import { getDailySupersetById } from "../../api/apiWorkoutPlan";

export function useDailySuperset(dailySupersetId: string) {
  const {
    data: dailySupersets,
    error,
    isPending,
  } = useQuery({
    queryKey: ["dailySupersets", dailySupersetId],
    queryFn: () => getDailySupersetById(dailySupersetId),
    enabled: !!dailySupersetId,
    throwOnError: true,
  });

  return { dailySupersets, error, isPending };
}
