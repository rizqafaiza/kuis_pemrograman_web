import { useState } from "react";
import CardToDo from "./CardToDo";
import TodoForm from "./TodoForm";

export default function TodoList({ todos, onDelete, onAdd }) {
  const [showForm, setShowForm] = useState(false);

  function handleAdd(dataBaru) {
    onAdd(dataBaru);
    setShowForm(false);
  }

  return (
    <div className="p-16 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-5xl font-bold">Todo List</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#1E3F20] hover:bg-green-900 text-white text-sm px-4 py-2 rounded"
        >
          Tambah Todo
        </button>
      </div>

      <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,2fr)_minmax(0,2fr)_minmax(0,2fr)_minmax(0,1.5fr)] px-4 py-3 font-bold text-sm">
        <span>Judul</span>
        <span>Status</span>
        <span>Prioritas</span>
        <span>Deadline</span>
        <span className="text-center">Aksi</span>
      </div>

      {todos.length === 0 ? (
        <p className="text-center text-sm text-gray-500 py-10">
          Belum ada todo. Klik "Tambah Todo" untuk membuat yang pertama.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <CardToDo key={todo.id} {...todo} onDelete={onDelete} />
          ))}
        </div>
      )}

      {/* Modal tambah */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <TodoForm onEdit={handleAdd} onCancel={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
}