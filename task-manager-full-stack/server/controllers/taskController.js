const tasks = require("../data/tasks");

const getTasks = (req, res) => {
    res.status(200).json(tasks);
};

const createTask = (req, res) => {
    const { title, description } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({
            message: "Task title is required"
        });
    }

    const newTask = {
        id: Date.now(),
        title: title.trim(),
        description: description?.trim() || ""
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
};

module.exports = {
    getTasks,
    createTask
};