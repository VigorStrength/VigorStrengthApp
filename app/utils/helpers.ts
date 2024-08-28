import {
  StandardWorkoutCircuit,
  StandardWorkoutDay,
  StandardWorkoutItem,
} from "./constants/types";

export const dailyExercisesIdsFromWorkoutDay = (
  day: StandardWorkoutDay
): string[] => {
  return [
    ...day?.warmUps?.flatMap((circuit) => circuit.exerciseIds),
    ...day?.coolDowns?.flatMap((circuit) => circuit.exerciseIds),
  ];
};

export const extractExerciseIds = (workoutDay: StandardWorkoutDay) => {
  const warmUpsExerciseIds =
    workoutDay?.warmUps?.flatMap(
      (warmUp: StandardWorkoutCircuit) => warmUp?.exerciseIds
    ) || [];
  const coolDownsExerciseIds =
    workoutDay?.coolDowns?.flatMap(
      (coolDown: StandardWorkoutCircuit) => coolDown?.exerciseIds
    ) || [];
  const standAloneExerciseIds =
    workoutDay?.workouts?.flatMap((workoutItem: StandardWorkoutItem) =>
      workoutItem.itemType === "exercise" ? workoutItem.itemId : []
    ) || [];
  const dailySupersetIds =
    workoutDay?.workouts?.flatMap((workoutItem: StandardWorkoutItem) =>
      workoutItem.itemType === "superset" ? workoutItem.itemId : []
    ) || [];

  return {
    warmUpsExerciseIds,
    coolDownsExerciseIds,
    standAloneExerciseIds,
    dailySupersetIds,
  };
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
