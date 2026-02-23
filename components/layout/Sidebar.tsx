"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ClipboardList, 
  History, 
  BarChart3, 
  Files, 
  Settings, 
  Hospital,
  BellRing,
  CheckCircle,
  Building2,
  Users,
  Database
} from "lucide-react";

const menuByRole = {
  Perawat: [
    { name: "Dashboard", href: "/dashboard/perawat", icon: LayoutDashboard },
    { name: "Form Surveilans", href: "/dashboard/perawat/form", icon: ClipboardList },
    { name: "Laporan Bulanan", href: "/dashboard/perawat/laporan", icon: BarChart3 },
    { name: "Riwayat Saya", href: "/dashboard/perawat/riwayat", icon: History },
    { name: "Notifikasi", href: "/dashboard/perawat/notifikasi", icon: BellRing },
  ],
  PPI: [
    { name: "Dashboard PPI", href: "/dashboard/ppi", icon: LayoutDashboard },
    { name: "Verifikasi Data", href: "/dashboard/ppi/verifikasi", icon: CheckCircle },
    { name: "Rekap Laporan Verified", href: "/dashboard/ppi/rekap", icon: Files },
    { name: "Rekap Laporan Unit", href: "/dashboard/ppi/rekap/unit", icon: Files },
    { name: "Rekap Laporan Global", href: "/dashboard/ppi/rekap/global", icon: Files },
  ],
  Admin: [
    { name: "Manajemen User", href: "/dashboard/admin/users", icon: Users },
    { name: "Master Ruangan", href: "/dashboard/admin/rooms", icon: Hospital },
    { name: "Log Sistem", href: "/dashboard/admin/logs", icon: Database },
  ],
};

export default function Sidebar({ role }: { role: string }) {
  const pathname = usePathname();
  // Mengambil menu berdasarkan role yang tepat (Perawat, PPI, atau Admin)
  const menus = menuByRole[role as keyof typeof menuByRole] || [];

  return (
    <aside className="w-64 bg-white border-r border-slate-100 min-h-screen hidden md:flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Hospital size={24} />
          </div>
          <div>
            <h1 className="text-sm font-extrabold text-slate-800 leading-none uppercase tracking-tight">RS ARUN</h1>
            <p className="text-[10px] text-slate-400 font-medium tracking-widest mt-1">LHOKSEUMAWE</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
          {role} Menu
        </p>
        
        {menus.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          const isNotify = item.name === "Notifikasi";

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-100" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                {item.name}
              </div>
              
              {isNotify && !isActive && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-50">
        <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 rounded-xl transition-all">
          <Settings size={18} />
          Pengaturan
        </Link>
      </div>
    </aside>
  );
}