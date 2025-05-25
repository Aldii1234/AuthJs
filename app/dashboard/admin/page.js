'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
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
          <h1 className="text-4xl font-bold text-gray-800">Dashboard Admin</h1>
          <p className="text-gray-600 mt-2">Selamat datang, Admin!</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Statistik Sistem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 text-white rounded-lg p-5 shadow">
            <p className="text-lg font-semibold">Total Pengguna</p>
            <p className="text-3xl mt-2">120</p>
          </div>
          <div className="bg-green-600 text-white rounded-lg p-5 shadow">
            <p className="text-lg font-semibold">Mahasiswa Aktif</p>
            <p className="text-3xl mt-2">85</p>
          </div>
          <div className="bg-purple-600 text-white rounded-lg p-5 shadow">
            <p className="text-lg font-semibold">Dosen Terdaftar</p>
            <p className="text-3xl mt-2">35</p>
          </div>
        </div>
      </section>
    </main>
  );
}
