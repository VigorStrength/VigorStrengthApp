import axiosInstance, { baseURL } from "./axiosInstance";

export async function getActiveWorkoutStatus(exerciseId: string) {
  try {
    const response = await axiosInstance.get(
      `${baseURL}/user/exercises/${exerciseId}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
}

export async function getSuperSet(supersetId: string) {
  try {
    const response = await axiosInstance.get(
      `${baseURL}/user/supersets/${supersetId}`
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
}

export async function markWorkoutAsCompleted(
  exerciseId: string,
  circuitId: string
) {
  try {
    const response = await axiosInstance.post(
      `${baseURL}/user/exercises/${exerciseId}/complete/${circuitId}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
}
