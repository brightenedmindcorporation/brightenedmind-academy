export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md bg-white border border-red-100 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
  Welcome Back
</h1>

<p className="text-center text-gray-600 mt-2">
  Sign in to your account
</p>

        <form className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-white">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3"
          />

         <button
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition"
>
         Sign In
        </button>
        </form>
      </div>
    </main>
  );
}