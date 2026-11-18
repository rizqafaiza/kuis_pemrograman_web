import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import TodoForm from "./TodoForm";

export default function DetailTodo({ todos, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p>Todo tidak ditemukan.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#1E3F20] text-white px-4 py-2 rounded"
        >
          Kembali
        </button>
      </div>
    );
  }

  function handleUpdate(dataBaru) {
    onUpdate(todo.id, dataBaru);
    setShowForm(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full md:w-1/2 bg-[#F9F6F0] rounded shadow p-6 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
      
        <div>
          <h2 className="text-lg font-bold">Judul</h2>
          <p className="text-sm mb-4">{todo.judul}</p>

          <h2 className="text-lg font-bold">Deskripsi</h2>
          <p className="text-sm bg-white rounded p-3 min-h-24">
            {todo.deskripsi}
          </p>
        </div>


        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-lg font-bold">Status</h2>
            <p className="text-sm">{todo.status}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Prioritas</h2>
            <p className="text-sm">{todo.prioritas}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Deadline</h2>
            <p className="text-sm">{todo.deadline}</p>
          </div>

          <div className="flex gap-2 mt-2">
            <button
              onClick={() => navigate("/")}
              className="bg-yellow-300 hover:bg-yellow-200 text-white text-sm px-4 py-2 rounded"
            >
              Kembali
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#1E3F20] hover:bg-green-900 text-white text-sm px-4 py-2 rounded"
            >
              Update
            </button>
          </div>
        </div>
      </div>

  
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <TodoForm
            todoData={todo}
            onEdit={handleUpdate}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}
    </div>
  );
}
