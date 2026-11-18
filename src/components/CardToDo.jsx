import {useNavigate} from "react-router";

export default function CardToDo({
    id,
    judul,
    status,
    prioritas,
    deadline,
    onDelete
}){
    const navigate = useNavigate();

    return (
    <div className="grid grid-cols-[2fr_2fr_2fr_2fr_1.5fr] items-center bg-[#F9F6F0] rounded shadow-sm px-4 py-5 text-sm">
      <span className="truncate pr-4">{judul}</span>
      <span>{status}</span>
      <span>{prioritas}</span>
      <span>{deadline}</span>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => navigate(`/todo/${id}`)}
          className="bg-[#1E3F20] hover:bg-green-200 text-white p-2.5 rounded"
        >
          detail
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-yellow-300 hover:bg-yellow-200 text-white p-2.5 rounded"
        >
          hapus
        </button>
      </div>
    </div>
  );
}
