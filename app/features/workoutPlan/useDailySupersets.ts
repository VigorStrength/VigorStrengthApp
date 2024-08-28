import { useQuery } from "@tanstack/react-query";
import { getDailySupersetsByIds } from "../../api/apiWorkoutPlan";

export function useDailySupersets(supersetIds: string[]) {
  const {
    data: dailySupersets,
    error,
    isPending,
  } = useQuery({
    queryKey: ["dailySupersets", supersetIds],
    queryFn: () => getDailySupersetsByIds(supersetIds),
    enabled: !!supersetIds.length,
    throwOnError: true,
  });

  return { dailySupersets, error, isPending };
}
