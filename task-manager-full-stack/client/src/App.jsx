import { useEffect, useState } from "react";
import { getTasks, createTask } from "./api/taskApi";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const data = await getTasks();
                setTasks(data);
            } catch (error) {
                setError("Could not load tasks. Check the backend server.",error.message);
            }
        };

        loadTasks();
    }, []);

    const handleAddTask = async (task) => {
        try {
            setError("");

            const newTask = await createTask(task);

            setTasks((previousTasks) => [
                ...previousTasks,
                newTask
            ]);

            return true;
        } catch (error) {
            setError(error.message);
            return false;
        }
    };

    return (
        <main className="app">
            <h1>Task Manager</h1>

            <TaskForm onAddTask={handleAddTask} />

            {error && <p role="alert">{error}</p>}

            <h2>Tasks ({tasks.length})</h2>

            <TaskList tasks={tasks} />
        </main>
    );
}

export default App;