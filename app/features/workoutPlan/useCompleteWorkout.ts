import { useMutation } from "@tanstack/react-query";
import { markWorkoutAsCompleted } from "../../api/apiWorkout";

export function useCompleteWorkout(exerciseId: string, circuitId: string) {
  const { mutate, error, isPending } = useMutation({
    mutationFn: () => markWorkoutAsCompleted(exerciseId, circuitId),
    // onSuccess: () => {
    //navigation.navigate("Workout Complete Success")
    // }
    throwOnError: true,
  });

  return { completeWorkout: mutate, error, isPending };
}
