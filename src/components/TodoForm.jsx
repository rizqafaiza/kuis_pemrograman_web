import { useState } from "react";

export default function TodoForm({onEdit, todoData = {}, onCancel}){
    const [error, setError] = useState("");
    const [data, setData] = useState({
        judul: todoData.judul || "",
        deskripsi: todoData.deskripsi || "",
        status: todoData.status || "to-do",
        prioritas: todoData.prioritas || "low",
        deadline: todoData.deadline || ""
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setData((prev) => ({
            ...prev, [name]:value
        }) 
        );
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!data.judul || !data.deskripsi || !data.deadline){
            return setError("Isi Semua Kolom!");
        }

        setError("");
        onEdit(data);
    }

    return(
        <div className="w-full max-w-md bg-[#F9F6F0] rounded-xl p-6 text-left shadow-xl">
            <h3 className="text-center font-bold text-lg mb-4">Tambah Todo</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold">Judul</h4>
                <input 
                type="text"
                name="judul"
                value={data.judul}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#1E3F20] focus:outline-none focus:ring-2 focus:ring-[#1E3F20]/30"
                />

                <h4 className="text-sm font-semibold">Deskripsi</h4>
                <textarea 
                name="deskripsi"
                value={data.deskripsi}
                onChange={handleChange}
                rows={3}
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#1E3F20] focus:outline-none focus:ring-2 focus:ring-[#1E3F20]/30"
                ></textarea>

                <div className="flex gap-3">
                <div className="flex-1">
                    <h4 className="text-sm font-semibold">Status</h4>
                    <select 
                    name="status"
                    value={data.status}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#1E3F20] focus:outline-none focus:ring-2 focus:ring-[#1E3F20]/30">
                        <option value="to-do">to do</option>
                        <option value="in progress">in progress</option>
                        <option value="done">done</option>
                    </select>
                </div>
                <div className="flex-1">
                    <h4 className="text-sm font-semibold">Prioritas</h4>
                    <select 
                    name="prioritas"
                    value={data.prioritas}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#1E3F20] focus:outline-none focus:ring-2 focus:ring-[#1E3F20]/30">
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                </div>
                </div>

                <h4 className="text-sm font-semibold">Deadline</h4>
                <input 
                type="date"
                name="deadline"
                value={data.deadline}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#1E3F20] focus:outline-none focus:ring-2 focus:ring-[#1E3F20]/30"
                />

                {error && <p className="text-sm text-red-600">{error}</p>}

                <div className="flex gap-3 mt-2">
                    <button type="button" onClick={onCancel} className="flex-1 rounded-lg bg-yellow-300 py-2 text-sm font-semibold hover:bg-yellow-200">
                        batal
                    </button>
                    <button type="submit" className="flex-1 rounded-lg bg-[#1E3F20] py-2 text-sm font-semibold text-white hover:bg-green-900">
                        kirim
                    </button>
                </div>
            </form>
        </div>
    )
}