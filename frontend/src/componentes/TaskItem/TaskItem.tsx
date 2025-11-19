import { useState } from "react";
import type { Task } from "../../types/Task";

import styles from "./TaskItem.module.css";

interface Props {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
  onEdit: (id: number, title: string) => void;
}

export default function TaskItem({ task, onDelete, onToggle, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  function handleSave() {
    if (!title.trim()) return;
    onEdit(task.id!, title);
    setEditing(false);
  }

  return (
    <li className={styles.item}>
      
      <label className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={task.completed}
          onChange={() => onToggle(task.id!, !task.completed)}
        />
        <span className={styles.customCheckbox}></span>
      </label>

      {editing ? (
        <>
          <input
            className={styles.inputEdit}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button className="btn btn-success btn-sm" onClick={handleSave}>
            Save
          </button>

          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            className={`${styles.title} ${
              task.completed ? styles.completed : ""
            }`}
          >
            {task.title}
          </span>

          <button
            className="btn btn-outline-warning btn-sm"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        </>
      )}

      <button
        className="btn btn-outline-danger btn-sm"
        onClick={() => onDelete(task.id!)}
      >
        Delete
      </button>
    </li>
  );
}
