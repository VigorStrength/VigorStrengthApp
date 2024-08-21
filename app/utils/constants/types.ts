export type workoutTimeRange = [min: number, max: number];

export type ExercisLog = {
  setNumber?: number;
  proposedReps: number;
  actualReps?: number;
  proposedWeight?: number;
  actualWeight?: number;
};

export type Workout = {
  id: string;
  name: string;
  description: string;
  videoURL: string;
  coverURL: string;
  targetMuscles: string[];
  equipmentNeeded: string[];
  instructions: string[];
  time: number;
  proposedLog: ExercisLog;
};

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

export type ActiveWorkout = {
  userId: string;
  exerciseId: string;
  circuitId: string;
  workoutPlanId: string;
  completed: boolean;
  completedLogs: ExercisLog[];
};
