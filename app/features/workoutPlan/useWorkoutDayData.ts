import {
  StandardStandAloneWorkout,
  StandardWorkoutCircuit,
} from "../../utils/constants/types";
import { extractExerciseIds } from "../../utils/helpers";
import { useDailyExercises } from "./useDailyExercises";
import { useDailySet } from "./useDailySet";
import { useDailySets } from "./useDailySets";
import { useDailyStandAloneWorkoutItems } from "./useDailyStandAloneWorkoutItems";
import { useDailySupersets } from "./useDailySupersets";

export function useWorkoutDayData(workoutDay: any) {
  const {
    warmUpsExerciseIds,
    coolDownsExerciseIds,
    dailyStandAloneWorkoutItemsIds,
    dailySetsIds,
    dailySupersetsIds,
  } = extractExerciseIds(workoutDay);

  const {
    dailyStandAloneWorkoutItems,
    error: standAloneWorkoutItemsError,
    isPending: isStandAloneWorkoutItemsPending,
  } = useDailyStandAloneWorkoutItems(dailyStandAloneWorkoutItemsIds);

  const {
    dailySets,
    error: setsError,
    isPending: setsPending,
  } = useDailySets(dailySetsIds);

  const {
    dailySupersets,
    error: supersetError,
    isPending: supersetPending,
  } = useDailySupersets(dailySupersetsIds);

  const standAloneExerciseIds =
    dailyStandAloneWorkoutItems?.flatMap(
      (standAloneWorkoutItem: StandardStandAloneWorkout) =>
        standAloneWorkoutItem?.exerciseId
    ) || [];

  const setsExerciseIds =
    dailySets?.flatMap((set: StandardWorkoutCircuit) => set?.exerciseIds) || [];

  const supersetsExerciseIds =
    dailySupersets?.flatMap(
      (superset: StandardWorkoutCircuit) => superset?.exerciseIds
    ) || [];

  const dailyExercisesIds = [
    ...warmUpsExerciseIds,
    ...coolDownsExerciseIds,
    ...standAloneExerciseIds,
    ...setsExerciseIds,
    ...supersetsExerciseIds,
  ];

  const {
    dailyExercises,
    error: exercisesError,
    isPending: exercisesPending,
  } = useDailyExercises(dailyExercisesIds);

  const isPending = supersetPending || exercisesPending;
  setsPending || isStandAloneWorkoutItemsPending;
  const error =
    supersetError || exercisesError || setsError || standAloneWorkoutItemsError;
  return {
    dailyExercises,
    error,
    isPending,
  };
}
