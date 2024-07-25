import axiosInstance, { baseURL } from "./axiosInstance";

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
      completionDate,
      completed,
    } = response.data;
    return {
      workoutPlanStatusId,
      userId,
      workoutPlanId,
      workoutPlanName,
      startDate,
      completionDate,
      completed,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
