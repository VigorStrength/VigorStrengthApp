import { useQuery } from "@tanstack/react-query";
import { getDailySupersetsByIds } from "../../api/apiWorkoutPlan";

export function useDailySets(dailySetIds: string[]) {
  const {
    data: dailySets,
    error,
    isPending,
  } = useQuery({
    queryKey: ["dailySets", dailySetIds],
    queryFn: () => getDailySupersetsByIds(dailySetIds),
    enabled: !!dailySetIds.length,
    throwOnError: true,
  });

  return { dailySets, error, isPending };
}
