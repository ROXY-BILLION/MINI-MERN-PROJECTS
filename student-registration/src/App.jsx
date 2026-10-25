import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [students, setStudents] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: name,
      email: email,
    };

    setStudents([...students, newStudent]);

    setName("");
    setEmail("");
  }

  return (
    <div>
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Student email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">Register Student</button>
      </form>

      <h2>Registered Students</h2>

      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        students.map((student) => (
          <div key={student.id}>
            <h3>{student.name}</h3>
            <p>{student.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
