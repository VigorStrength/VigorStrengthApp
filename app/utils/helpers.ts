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

export const capitalize = (str: string) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const setToArray = (set: Set<string>) => Array.from(set);
