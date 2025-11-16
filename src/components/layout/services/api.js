const API_URL = "http://localhost:5000";

// ---------------- TASKS ----------------
export async function getTasks() {
  const res = await fetch(`${API_URL}/tasks`);
  return res.json();
}

export async function createTask(task) {
  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
}

export async function updateTask(id, updates) {
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return res.json();
}

export async function deleteTask(id) {
  await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
}

// ---------------- PROJECTS ----------------
export async function getProjects() {
  const res = await fetch(`${API_URL}/projects`);
  return res.json();
}

export async function createProject(project) {
  const res = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  return res.json();
}

export async function updateProject(id, updates) {
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return res.json();
}

export async function deleteProject(id) {
  await fetch(`${API_URL}/projects/${id}`, {
    method: "DELETE",
  });
}

// ---------------- CATEGORIES ----------------
export async function getCategories() {
  const res = await fetch(`${API_URL}/categories`);
  return res.json();
}
