export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-800 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Selamat Datang</h1>
        <p className="text-gray-600 mb-6">
          Sistem Login Sederhana menggunakan Next.js
        </p>
        <a
          href="/login"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login Sekarang
        </a>
      </div>
    </main>
  );
}
