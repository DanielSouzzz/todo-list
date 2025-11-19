import { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, updateCompletedStatus, deleteTask } from "../service/taskService";
import type { Task } from "../types/Task";

export function useTasks() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async (): Promise<void> => {
    try {
        setLoading(true);
        const res = await getTasks();
        setTasks(res);
    } catch (error){
        console.error("Erro ao carregar tarefas: ", error);
    } finally {
        setLoading(false);
    }
  };

const addTask = async (task: Task): Promise<void> => {
  try {
    const res = await createTask({
      title: task.title,
      completed: task.completed,
    });

    setTasks(prev => [...prev, res]);
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", error);
  }
};

  const removeTask = async (id: number): Promise<void> => {
    try {
      await deleteTask(id);
      setTasks(prev => prev.filter(t => t.id !== id));
    } catch (error) {
      console.error("Erro ao remover tarefa:", error);
    }
  };

  const toggleUpdate = async (id: number, completed: boolean): Promise<void> => {
    try {
      await updateCompletedStatus({ id, completed });

      setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed } : t))
    );
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
  }
};

const editTask = async (id: number, title: string): Promise<void> => {
  try {
    const updated = await updateTask(id, { title });

    setTasks(prev =>
      prev.map(t => (t.id === id ? updated : t))
    );
  } catch (error) {
    console.error("Erro ao editar tarefa:", error);
  }
};

  useEffect(() => {
    load();
  }, []);

  return { tasks, loading, addTask, removeTask, toggleUpdate, editTask };
};