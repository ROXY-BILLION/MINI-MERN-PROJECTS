function TaskList({ tasks }) {
    if (tasks.length === 0) {
        return <p>No tasks available.</p>;
    }

    return (
        <div>
            {tasks.map((task) => (
                <article key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description || "No description"}</p>
                </article>
            ))}
        </div>
    );
}

export default TaskList;