import React, { useState, useEffect } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  // Add default todo (TEST EXPECTS THIS EXACT TEXT)
  const addTodo = () => {
    setTodos((prev) => [...prev, "new todo"]);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const submitTodo = () => {
    if (input.length <= 5) {
      setError("Todo must be more than 5 characters");
      return; // ✅ IMPORTANT
    }
    setTodos((prev) => [...prev, input]);
    setInput("");
    setError("");
  };

  return (
    <div>
      <h2>Task management</h2>

      <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment</button>

      <hr />

      {/* TEST LOOKS FOR THIS EXACT TEXT */}
      <button onClick={addTodo}>Add Todo</button>

      <h3>New Todo</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={submitTodo}>Submit</button>

      {error && <p>{error}</p>}

      <UseMemo todos={todos} />
      <ReactMemo todos={todos} />
    </div>
  );
};

export default App;
