"use client";

import { useState } from "react";
import { logoutClient } from "@/services/auth-client";
import { Search, Bell, User, LogOut, ChevronDown, Settings as SettingsIcon } from "lucide-react";

export default function Navbar({ userProfile }: { userProfile: any }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-50">
      {/* Search Bar */}
      <div className="relative w-96 hidden lg:block">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Cari data pasien atau nomor RM..."
          className="w-full bg-slate-50 border-none rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        <button className="relative p-2.5 bg-slate-50 text-slate-500 rounded-xl hover:bg-slate-100 transition-all">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-[1px] bg-slate-100 mx-2"></div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 group"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {userProfile?.full_name || "Petugas RS"}
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                {userProfile?.role || "Staff"}
              </p>
            </div>
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-100 group-hover:scale-105 transition-transform">
                {userProfile?.full_name?.[0].toUpperCase() || "A"}
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
            </div>
            <ChevronDown size={16} className={`text-slate-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-4 w-56 bg-white border border-slate-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-3 border-b border-slate-50 bg-slate-50/50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Akun Saya</p>
              </div>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                <User size={18} className="text-slate-400" /> Profil Lengkap
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                <SettingsIcon size={18} className="text-slate-400" /> Keamanan Akun
              </button>
              <div className="h-[1px] bg-slate-50 my-1"></div>
              <button 
                onClick={() => logoutClient()}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors font-bold"
              >
                <LogOut size={18} /> Keluar Sistem
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}