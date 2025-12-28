import React, { useState, useEffect } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState(["1", "2"]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  // useEffect demonstration
  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  // Add default todo
  const addTodo = () => {
    setTodos((prev) => [...prev, "New Todo"]);
  };

  // Counter increment
  const increment = () => {
    setCount(count + 1);
  };

  // Custom todo validation
  const submitTodo = () => {
    if (input.length <= 5) {
      setError("Todo must be more than 5 characters");
    }
    setTodos((prev) => [...prev, input]);
    setInput("");
    setError("");
  };

  return (
    <div>
      <h2>Task managemenrt</h2>

      <h3>Counter:{count}</h3>
      <button onClick={increment}>Increment</button>

      <hr />
      <button onClick={addTodo}>Add todo</button>

      {/* Memo Input */}
      <h3>New Todo</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={submitTodo}>Submit Button</button>

      <UseMemo todos={todos} />
      <ReactMemo todos={todos} />
    </div>
  );
};

export default App;
