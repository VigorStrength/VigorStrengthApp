import { useQuery } from "@tanstack/react-query";
import { getDailyStandAloneWorkoutItemsByIds } from "../../api/apiWorkoutPlan";

export function useDailyStandAloneWorkoutItems(
  standAloneWorkoutItemIds: string[]
) {
  const {
    data: dailyStandAloneWorkoutItems,
    error,
    isPending,
  } = useQuery({
    queryKey: ["dailyStandAloneWorkoutItems", standAloneWorkoutItemIds],
    queryFn: () =>
      getDailyStandAloneWorkoutItemsByIds(standAloneWorkoutItemIds),
    enabled: !!standAloneWorkoutItemIds.length,
    throwOnError: true,
  });

  return { dailyStandAloneWorkoutItems, error, isPending };
}
