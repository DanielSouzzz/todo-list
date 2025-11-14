import { useState } from "react";

export default function TaskForm({ onAdd }: { onAdd: (title: string) => void }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  }

  return (
    <form className="mb-3 d-flex gap-2" onSubmit={handleSubmit}>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
}
