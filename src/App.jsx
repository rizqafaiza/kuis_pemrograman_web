import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import TodoList from "./components/TodoList";
import DetailToDo from "./components/DetailToDo";

export default function App() {
  const [todos, setTodos] = useState([]);

  function handleAdd(dataBaru){
    setTodos((prev)=>(
      [...prev, {id:crypto.randomUUID(), ...dataBaru}]
    ));
  }

  function handleDelete(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function handleUpdate(id, dataBaru) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...dataBaru } : t)));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList todos={todos} onDelete={handleDelete} onAdd={handleAdd}/>} />
        <Route path="/todo/:id" element={<DetailToDo todos={todos} onUpdate={handleUpdate} />} />
      </Routes>
    </BrowserRouter>
  );
}