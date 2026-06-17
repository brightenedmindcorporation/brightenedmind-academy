export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md bg-white border border-red-100 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Start your English learning journey
        </p>

        <form className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-white">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-white"
          />

          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}