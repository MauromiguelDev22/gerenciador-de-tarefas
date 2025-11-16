import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from "../services/api";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await getTasks();
    setTasks(data);
  }

  async function handleAdd() {
    if (!newTask.trim()) return;

    await createTask({
      title: newTask,
      completed: false
    });

    setNewTask("");
    loadTasks();
  }

  async function handleToggle(id, currentState) {
    await updateTask(id, { completed: !currentState });
    loadTasks();
  }

  async function handleDelete(id) {
    await deleteTask(id);
    loadTasks();
  }

  return (
    <div>
      <h2>Gerenciar Tarefas</h2>

      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nova tarefa..."
      />
      <button onClick={handleAdd}>Adicionar</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleToggle(t.id, t.completed)}
            />
            {t.title}
            <button onClick={() => handleDelete(t.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
