import { useQuery } from "@tanstack/react-query";
import { getDailyExercisesByIds } from "../../api/apiWorkoutPlan";

export function useDailyExercises(dailyExercisesIDs: string | string[]) {
  // Normalize dailyExercisesIDs to an array of strings
  const normalizedDailyExercisesIDs = Array.isArray(dailyExercisesIDs)
    ? dailyExercisesIDs
    : [dailyExercisesIDs];

  const {
    data: dailyExercises,
    error,
    isPending,
  } = useQuery({
    queryKey: ["dailyExercises", normalizedDailyExercisesIDs],
    queryFn: () => getDailyExercisesByIds(normalizedDailyExercisesIDs),
    enabled: !!normalizedDailyExercisesIDs.length,
    throwOnError: true,
  });

  return { dailyExercises, error, isPending };
}
