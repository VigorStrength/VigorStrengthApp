import { StandardWorkoutDay } from "./constants/types";

export const dailyExercisesIdsFromWorkoutDay = (
  day: StandardWorkoutDay
): string[] => {
  return [
    ...day?.warmUps?.flatMap((circuit) => circuit.exerciseIds),
    ...day?.workouts?.flatMap((circuit) => circuit.exerciseIds),
    ...day?.coolDowns?.flatMap((circuit) => circuit.exerciseIds),
  ];
};
