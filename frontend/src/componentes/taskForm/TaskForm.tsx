import { useState } from "react";
import styles from "./TaskForm.module.css";

interface Props {
  onAdd: (task: { title: string; completed: boolean }) => void;
}

export default function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      title,
      completed: false,
    });

    setTitle("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />

      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
}
