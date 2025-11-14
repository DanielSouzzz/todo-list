interface Props {
  task: any;
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
  onEdit: (id: number, title: string) => void;
}

import { useState } from "react";

export default function TaskItem({ task, onDelete, onToggle, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  function handleSave() {
    if (!title.trim()) return;
    onEdit(task.id, title);
    setEditing(false);
  }

  return (
    <li className="list-group-item d-flex align-items-center gap-2">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id, !task.completed)}
      />

      {editing ? (
        <>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button className="btn btn-success btn-sm" onClick={handleSave}>
            Save
          </button>

          <button className="btn btn-secondary btn-sm" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            className="flex-grow-1"
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.title}
          </span>

          <button
            className="btn btn-warning btn-sm"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        </>
      )}

      <button className="btn btn-danger btn-sm" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}
