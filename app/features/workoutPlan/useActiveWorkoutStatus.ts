import { useQuery } from "@tanstack/react-query";
import { getActiveWorkoutStatus } from "../../api/apiWorkout";

export function useActiveWorkoutStatus(exerciseId: string) {
  const {
    data: activeWorkoutStatus,
    error,
    isPending,
  } = useQuery({
    queryKey: ["activeWorkoutStatus", exerciseId],
    queryFn: () => getActiveWorkoutStatus(exerciseId),
    throwOnError: true,
  });

  return { activeWorkoutStatus, error, isPending };
}
