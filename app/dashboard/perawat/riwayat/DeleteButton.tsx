"use client";

import { Trash2 } from "lucide-react";
import { deleteSurveilans } from "@/services/surveilans";

export default function DeleteButton({ id }: { id: string }) {
  const handleDelete = async () => {
    if (confirm("Apakah Anda yakin ingin menghapus data ini secara permanen?")) {
      try {
        await deleteSurveilans(id);
        alert("Data berhasil dihapus dari sistem.");
      } catch (error) {
        alert("Gagal menghapus data. Silakan coba lagi.");
      }
    }
  };

  return (
    <button 
      onClick={handleDelete}
      className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
    >
      <Trash2 size={16} />
    </button>
  );
}