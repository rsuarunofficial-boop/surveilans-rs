import { getSurveilansById } from "@/services/surveilans";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import EditForm from "./EditForm";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditRiwayatPage({ params }: Props) {
  // Menunggu params sesuai standar Next.js terbaru
  const { id } = await params;
  
  // Mengambil data spesifik berdasarkan ID dari database RS Arun
  const data = await getSurveilansById(id);

  // Jika data tidak ditemukan, arahkan kembali ke halaman riwayat
  if (!data) redirect("/dashboard/perawat/riwayat");

  return (
    <div className="space-y-6 text-slate-600">
      {/* Header Navigasi */}
      <div className="flex items-center gap-4">
        <Link 
          href="/dashboard/perawat/riwayat"
          className="p-2 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-blue-600 transition-all shadow-sm"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-xl font-semibold text-slate-800 tracking-tight">
            Edit Laporan Surveilans
          </h1>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
            Pasien: {data.nama_pasien} | RM: {data.no_rm}
          </p>
        </div>
      </div>

      {/* Kontainer Formulir Edit */}
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
        {/* Mengirimkan data awal ke komponen Client Form */}
        <EditForm initialData={data} />
      </div>

      {/* Informasi Tambahan */}
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
        <p className="text-[11px] font-medium text-slate-400 leading-relaxed uppercase tracking-widest">
          Catatan: Pastikan seluruh data tindakan medis dan temuan infeksi telah sesuai dengan rekam medis pasien sebelum menekan tombol simpan perubahan.
        </p>
      </div>
    </div>
  );
}