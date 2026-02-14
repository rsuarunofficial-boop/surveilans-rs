"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function StatChart({ data }: { data: any[] }) {
  // Warna-warna profesional sesuai kategori (WowDash Style)
  const colors = ['#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6', '#ef4444', '#ef4444', '#ef4444', '#ef4444', '#f59e0b', '#f59e0b', '#10b981', '#6366f1'];

  return (
    <div className="h-[350px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }}
            interval={0}
          />
          <YAxis hide />
          <Tooltip 
            cursor={{ fill: '#f8fafc' }}
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
          />
          <Bar dataKey="jumlah" radius={[6, 6, 0, 0]} barSize={35}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}