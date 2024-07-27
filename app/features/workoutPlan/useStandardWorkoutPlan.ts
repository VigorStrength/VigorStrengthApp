import { useQuery } from "@tanstack/react-query";
import { getStandardWorkoutPlan } from "../../api/apiWorkoutPlan";

export function useStandardWorkoutPlan() {
  const {
    data: standardWorkoutPlan,
    error,
    isPending,
  } = useQuery({
    queryKey: ["standardWorkoutPlan"],
    queryFn: getStandardWorkoutPlan,
    throwOnError: true,
  });

  return { standardWorkoutPlan, error, isPending };
}
