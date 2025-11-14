import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/tasks";

export async function getTasks() {
  return axios.get(API_URL);
}

export async function getTaskById(id: number) {
  return axios.get(`${API_URL}/${id}`);
}

export async function createTask(task: { title: string }) {
  return axios.post(API_URL, task);
}

export async function updateTask(id: number, task: { title?: string; completed?: boolean }) {
  return axios.put(`${API_URL}/${id}`, task);
}

export async function updateCompletedStatus(task: { id: number; completed: boolean }) {
  return axios.put(`${API_URL}/completed`, task);
}

export async function deleteTask(id: number) {
  return axios.delete(`${API_URL}/${id}`);
}
