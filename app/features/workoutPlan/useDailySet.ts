import { useQuery } from "@tanstack/react-query";
import { getDailySetById } from "../../api/apiWorkoutPlan";

export function useDailySet(dailySetId: string) {
  const {
    data: dailySet,
    error,
    isPending,
  } = useQuery({
    queryKey: ["dailySet", dailySetId],
    queryFn: () => getDailySetById(dailySetId),
    enabled: !!dailySetId,
    throwOnError: true,
  });

  return { dailySet, error, isPending };
}
