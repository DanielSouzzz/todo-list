import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  updateCompletedStatus,
} from "../api/todoApi";

export function useTasks() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await getTasks();
    setTasks(res.data);
    setLoading(false);
  }

  async function addTask(title: string) {
    const res = await createTask({ title });
    setTasks((prev) => [...prev, res.data]);
  }

  async function removeTask(id: number) {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  async function toggleComplete(id: number, completed: boolean) {
    await updateCompletedStatus({ id, completed });
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed } : t))
    );
  }

  async function editTask(id: number, title: string) {
    const res = await updateTask(id, { title });
    setTasks((prev) => prev.map((t) => (t.id === id ? res.data : t)));
  }

  useEffect(() => {
    load();
  }, []);

  return { tasks, loading, addTask, removeTask, toggleComplete, editTask };
}
