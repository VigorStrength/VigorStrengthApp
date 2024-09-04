import { StandardWorkoutCircuit } from "../../utils/constants/types";
import { extractExerciseIds } from "../../utils/helpers";
import { useDailyExercises } from "./useDailyExercises";
import { useDailySupersets } from "./useDailySupersets";

export function useWorkoutDayData(workoutDay: any) {
  const {
    warmUpsExerciseIds,
    coolDownsExerciseIds,
    standAloneExerciseIds,
    dailySupersetIds,
  } = extractExerciseIds(workoutDay);
  const {
    dailySupersets,
    error: supersetError,
    isPending: supersetPending,
  } = useDailySupersets(dailySupersetIds);
  const supersetsExerciseIds =
    dailySupersets?.flatMap(
      (superset: StandardWorkoutCircuit) => superset?.exerciseIds
    ) || [];

  const dailyExercisesIds = [
    ...warmUpsExerciseIds,
    ...coolDownsExerciseIds,
    ...standAloneExerciseIds,
    ...supersetsExerciseIds,
  ];

  const {
    dailyExercises,
    error: exercisesError,
    isPending: exercisesPending,
  } = useDailyExercises(dailyExercisesIds);

  const isPending = supersetPending || exercisesPending;
  const error = supersetError || exercisesError;

  return {
    dailyExercises,
    error,
    isPending,
  };
}
