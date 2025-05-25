'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MahasiswaDashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'mahasiswa') {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Dashboard Mahasiswa</h1>
          <p className="text-gray-600 mt-2">Selamat datang, Mahasiswa!</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Informasi Akademik</h2>
        <ul className="space-y-4 text-gray-700">
          <li>✅ Kamu telah login sebagai <strong>mahasiswa</strong>.</li>
          <li>📚 Jadwal kuliah akan ditampilkan di sini.</li>
          <li>📄 Status KRS: <span className="text-green-600 font-semibold">Disetujui</span></li>
        </ul>
      </section>
    </main>
  );
}
