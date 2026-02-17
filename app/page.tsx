import { redirect } from "next/navigation";

export default function Home() {
  // Otomatis mengalihkan akses ke halaman login
  redirect("/login");
}