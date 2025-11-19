import axios from "axios";
import type { Task } from "../types/Task";

type UpdateCompletedPayload = Pick<Task, "id" | "completed">;

const BASE_URL= "http://localhost:8080/api/v1/tasks"

export const getTasks = async (): Promise<Task[]> => {
    const response = await axios.get<Task[]>(`${BASE_URL}`);
    return response.data;
};

    // Omit<Task, "id"> remove o campo id da interface evitando definir ao criar uma nova task
export const createTask = async (task: Omit<Task, "id">): Promise<Task> => {
    const response = await axios.post<Task>(BASE_URL, task);
    return response.data;
};

export const updateTask = async (
  id: number,
  payload: { title: string }
): Promise<Task> => {
  const response = await axios.put<Task>(`${BASE_URL}/${id}`, payload);
  return response.data; // Retorna a task
};

export const updateCompletedStatus = async (
  payload: UpdateCompletedPayload
): Promise<string> => {
  const response = await axios.put<{ message: string }>(
    `${BASE_URL}/completed`,
    payload
  );
  return response.data.message;
};


export const deleteTask = async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`);
};