import TaskItem from "./TaskItem";

interface Props {
  tasks: any[];
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
  onEdit: (id: number, title: string) => void;
}

export default function TaskList({ tasks, onDelete, onToggle, onEdit }: Props) {
  return (
    <ul className="list-group">
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
