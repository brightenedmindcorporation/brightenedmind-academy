export default function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
           Brightened Mind Academy
        </h1>

        <nav className="flex gap-6">
          <a href="#">Courses</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </div>
    </header>
  );
}