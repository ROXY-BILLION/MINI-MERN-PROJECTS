const express = require("express");

const app = express();
app.use(express.json());

const PORT = 5000;

let students = [
  { id: 1, name: "Alex", email: "alex@example.com" },
  { id: 2, name: "Sarah", email: "sarah@example.com" },
];

app.get("/api/students/", (req, res) => {
    res.status(200).json(students)
})

app.get("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find((item) => item.id === id)
    
    if (!student) {
        return res.status(404).json({
            message:"Student does not exist"
        })
    }

    res.status(200).json(student)
})

app.post("/api/students/", (req, res) => {
    const { name, email } = req.body;

    if (typeof name !== "string" ||
        !name?.trim() ||
        typeof email !== "string"||
        !email?.trim() 
        ) {
        return res.status(400).json({
            message:"Invalid email or name"
        })
    }

    const newStudent = {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
    }

    students.push(newStudent);
    res.status(201).json(newStudent);
})

app.put("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find((item) => item.id === id)
    
    if (!student) {
        return res.status(404).json({
            message:"student doesn't exist"
        })
    }

    const { name, email } = req.body;

    if (typeof name !== "string" ||
        !name?.trim() ||
        typeof email !== "string" ||
        !email?.trim()) {
        return res.status(400).json({
            message:"Invalid email or name"
        })
    }
    student.name = name.trim();
    student.email = email.trim();

    res.status(200).json(student);
})

app.delete("/api/students/:id", (req, res) => {
    const id = Number(req.params.id)
    const studentExists = students.some((item) => item.id === id)
    
    if (!studentExists) {
        return res.status(404).json({
            message:"Student doesn't exist"
        })
    }
     students = students.filter((item) => item.id !== id);
    res.status(200).json({
        message:"Student deleted successfully"
    })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
