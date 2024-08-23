import { StandardWorkoutDay } from "./constants/types";

export const dailyExercisesIdsFromWorkoutDay = (
  day: StandardWorkoutDay
): string[] => {
  return [
    ...day?.warmUps?.flatMap((circuit) => circuit.exerciseIds),
    ...day?.coolDowns?.flatMap((circuit) => circuit.exerciseIds),
  ];
};

export const capitalize = (str: string) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const setToArray = (set: Set<string>) => Array.from(set);

export const formatSecondsToMinutes = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
  }`;
};

export const formatMillisecondsToMinutes = (milliseconds: number) => {
  const seconds = Math.floor(milliseconds / 1000);
  return formatSecondsToMinutes(seconds);
};
