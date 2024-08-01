export type workoutTimeRange = [min: number, max: number];

export type StandardWorkoutCircuit = {
  id: string;
  exerciseIds: string[];
  restTime: number;
  proposedLaps: number;
};

export type StandardWorkoutDay = {
  id: string;
  name: string;
  workoutWeekNumber: number;
  workoutDayNumber: number;
  imageURL: string;
  warmUps: StandardWorkoutCircuit[];
  workouts: StandardWorkoutCircuit[];
  coolDowns: StandardWorkoutCircuit[];
  workoutTimeRange: workoutTimeRange;
};

export type WorkoutDayParams = {
  day: StandardWorkoutDay;
};
