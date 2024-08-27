import axiosInstance, { baseURL } from "./axiosInstance";

export async function getStandardWorkoutPlan() {
  try {
    const response = await axiosInstance.get(
      `${baseURL}/user/workout-plans/standard`
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
}

export async function getActiveWorkoutPlan() {
  try {
    const response = await axiosInstance.get(
      `${baseURL}/user/workout-plans/active`
    );

    const {
      workoutPlanStatusId,
      userId,
      workoutPlanId,
      workoutPlanName,
      startDate,
      progress,
      completionDate,
      completed,
    } = response.data;

    return {
      workoutPlanStatusId,
      userId,
      workoutPlanId,
      workoutPlanName,
      progress,
      startDate,
      completionDate,
      completed,
    };
  } catch (error: any) {
    throw new Error(error?.message);
  }
}

export async function getDailyExerciseById(dailyExerciseId: string) {
  try {
    const response = await axiosInstance.get(
      `${baseURL}/user/workout-plans/daily-exercises/${dailyExerciseId}`
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
}

export async function getDailyExercisesByIds(dailyExercisesIDs: string[]) {
  try {
    const response = await axiosInstance.post(
      `${baseURL}/user/workout-plans/daily-exercises`,
      { dailyExercisesIDs }
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
}
