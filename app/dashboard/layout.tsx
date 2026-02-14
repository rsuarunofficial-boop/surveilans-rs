import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { getLoggedUserProfile } from "@/services/auth";
import { redirect } from "next/navigation";

/**
 * File Layout ini adalah wadah utama.
 * Sidebar dan Navbar hanya perlu ditulis sekali di sini, 
 * dan akan muncul otomatis di semua halaman dashboard.
 */
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. Cek profil user yang sedang login secara async (Next.js 15)
  const profile = await getLoggedUserProfile();

  // 2. Jika tidak ada profil (belum login), tendang ke halaman login
  if (!profile) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* SIDEBAR: Menempel di kiri, permanen */}
      <Sidebar role={profile.role} />

      {/* AREA KANAN: Berisi Navbar dan isi halaman */}
      <div className="flex-1 flex flex-col">
        {/* NAVBAR: Menempel di atas, permanen */}
        <Navbar userProfile={profile} />

        {/* CONTENT: Bagian ini yang akan berganti-ganti isinya */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}