import axiosInstance, { baseURL } from "./axiosInstance";

export async function getStandardWorkoutPlan() {
  try {
    const response = await axiosInstance.get(
      `${baseURL}/workout-plans/standard`
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
    throw new Error(error?.message || "Unexpected error");
  }
}
