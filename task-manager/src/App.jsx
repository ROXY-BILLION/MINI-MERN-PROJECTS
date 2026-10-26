import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newTask= {
      id: Date.now(),
      name: title,
      description: description,
    }

    setTasks([...tasks, newTask])
    setTitle("");
    setDescription("");
  }
  return (
    <main className="page">
      <section className="task-app">
        <header className="app-header">
          <div className="logo">✓</div>

          <div>
            <h1>Task Manager</h1>
            <p>Organize your day, one task at a time.</p>
          </div>
        </header>

        <div className="app-content">
          <section className="panel add-panel">
            <h2>
              <span className="plus-icon">+</span>
              Add New Task
            </h2>

            <form className="task-form" onSubmit={handleSubmit}>
              <input
                type="text" value={title}
                onChange={(event)=>setTitle(event.target.value)}
                placeholder="Task title"
              />

              <textarea
                value={description}
                onChange={(event)=>setDescription(event.target.value)}
                placeholder="Task description"
                rows="4"
              />

              <button type="submit">
                + &nbsp; Add Task
              </button>
            </form>
          </section>

          <section className="panel tasks-panel">
            <div className="tasks-heading">
              <h2>☷ &nbsp; Your Tasks</h2>
              <span className="task-count">{tasks.length}</span>
            </div>

            {tasks.map((task) => (
              <div className="task" key={task.id}>
                <h1>{task.name}</h1>
                <p>{task.description}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <footer>
        <span>♥</span> Small steps make big progress
      </footer>
    </main>
  );
}

export default App;
