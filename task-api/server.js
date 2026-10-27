const express = require("express");
const app = express();

app.use(express.json());
const PORT = 5001;

let tasks = [
    {
        id: 1,
        title: "sweep",
        description: "Perform sweeping duties"
    },
    {
        id: 2,
        title: "cleaning",
        description: "Perform Cleaning duties"
    },

]

app.get("/", (req, res) => {
    res.status(200).json({
        message:"Task Api is running"
    })
})

// Get Task Route
app.get("/api/tasks", (req, res) => {
    res.status(200).json(tasks)
})

// Get Individual Task Route
app.get("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((item) => item.id === id);
    if (!task) {
        return res.status(404).json({
            message:"Task not found"
        })
    }
    res.status(200).json(task)
})

// Create Task Route
app.post("/api/tasks/", (req, res) => {
    const { title, description } = req.body;

    if (typeof title !== "string"||
        !title?.trim() ||
        typeof description !== "string"||
        !description?.trim() 
    ) {
        return res.status(400).json({
            message:"Enter a valid title , description"
        })
    }
    const newTask = {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
    }
    tasks.push(newTask);
    res.status(201).json(newTask);
})

// Edit Task Route
app.put("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  const { title, description } = req.body;

  if (
    typeof title !== "string" ||
    !title.trim() ||
    typeof description !== "string" ||
    !description.trim()
  ) {
    return res.status(400).json({
      message: "Enter a valid title and description",
    });
  }

  task.title = title.trim();
  task.description = description.trim();

  res.status(200).json(task);
});


// Delete Task Route
app.delete("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const taskExists = tasks.find((item) => item.id === id)
    if (!taskExists) {
        return res.status(404).json({
            message:"Task not found"
        })
    }
    tasks = tasks.filter((item) => item.id !== id);
    res.status(200).json({
        message: "Task deleted successfully"
    })
})




app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})