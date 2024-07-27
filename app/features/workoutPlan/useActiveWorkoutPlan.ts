import { useQuery } from "@tanstack/react-query";
import { getActiveWorkoutPlan } from "../../api/apiWorkoutPlan";

export function useActiveWorkoutPlan() {
  const {
    data: activeWorkoutPlan,
    error,
    isPending,
  } = useQuery({
    queryKey: ["activeWorkoutPlan"],
    queryFn: getActiveWorkoutPlan,
    throwOnError: true,
  });

  return { activeWorkoutPlan, error, isPending };
}
