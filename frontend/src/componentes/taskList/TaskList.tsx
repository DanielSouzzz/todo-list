import TaskItem from "../TaskItem/TaskItem";
import type { Task } from "../../types/Task";
import styles from "./TaskList.module.css";

interface Props {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
  onEdit: (id: number, title: string) => void;
}

export default function TaskList({ tasks, onDelete, onToggle, onEdit }: Props) {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
