import { useQuery } from "@tanstack/react-query";
import { getDailyStandAloneWorkoutItemById } from "../../api/apiWorkoutPlan";

export function useDailyStandAloneWorkoutItem(standAloneWorkoutItemId: string) {
  const {
    data: dailyStandAloneWorkoutItem,
    error,
    isPending,
  } = useQuery({
    queryKey: ["dailyStandAloneWorkoutItem", standAloneWorkoutItemId],
    queryFn: () => getDailyStandAloneWorkoutItemById(standAloneWorkoutItemId),
    enabled: !!standAloneWorkoutItemId,
    throwOnError: true,
  });

  return { dailyStandAloneWorkoutItem, error, isPending };
}
