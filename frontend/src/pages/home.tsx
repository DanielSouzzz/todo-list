import { useTasks } from "../hooks/useTasks";
import TaskForm from "../componentes/TaskForm";
import TaskList from "../componentes/TaskList";

export default function Home() {
  const { tasks, addTask, removeTask, toggleComplete, editTask } = useTasks();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f7f7f7", // só pra visualizar melhor
      }}
    >
      {/* CONTAINER CENTRAL */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 className="mb-4 text-center">Todo List</h1>

        <TaskForm onAdd={addTask} />

        <TaskList
          tasks={tasks}
          onDelete={removeTask}
          onToggle={toggleComplete}
          onEdit={editTask}
        />
      </div>
    </div>
  );
}
