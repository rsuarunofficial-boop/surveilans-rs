// app/dashboard/perawat/form/page.tsx
import FormHarian from "@/components/forms/FormHarian";

export default function InputSurveilansPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Formulir Surveilans Harian</h1>
        <p className="text-sm text-slate-500 font-medium">RS Arun Lhokseumawe</p>
      </div>
      
      <section className="bg-white p-2 rounded-3xl shadow-sm border border-slate-100">
        <FormHarian />
      </section>
    </div>
  );
}