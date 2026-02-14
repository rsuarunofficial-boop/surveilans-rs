"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  const router = useRouter();

  // Inisialisasi Supabase Browser Client
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    // 1. Proses Login ke Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg("Email atau Password salah!");
      setLoading(false);
      return;
    }

    // 2. Ambil Data Profile (Role & Ruangan) setelah login berhasil
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    // 3. Redirect Otomatis Berdasarkan Role
    if (profile?.role === "Admin") {
      router.push("/dashboard/admin");
    } else if (profile?.role === "Manager") {
      router.push("/dashboard/manager");
    } else {
      router.push("/dashboard/perawat");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Surveilans RS Arun Lhokseumawe
        </h2>
        <p className="text-center text-gray-500">Silakan masuk ke akun Anda</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {errorMsg && (
            <p className="text-sm text-red-600 font-medium">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}