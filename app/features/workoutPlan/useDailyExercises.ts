import { useQuery } from "@tanstack/react-query";
import { getDailyExercisesByIds } from "../../api/apiWorkoutPlan";

export function useDailyExercises(dailyExercisesIDs: string[]) {
  const {
    data: dailyExercises,
    error,
    isPending,
  } = useQuery({
    queryKey: ["dailyExercises", dailyExercisesIDs],
    queryFn: () => getDailyExercisesByIds(dailyExercisesIDs),
    enabled: !!dailyExercisesIDs.length,
    throwOnError: true,
  });

  return { dailyExercises, error, isPending };
}
