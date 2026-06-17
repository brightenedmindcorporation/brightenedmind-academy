export default function StudentSidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen">
      <div className="p-6">
        <h2 className="font-bold text-xl">
          Brightened Mind Academy
        </h2>
      </div>

      <nav className="px-4 space-y-2">
        <a className="block p-3 rounded-xl hover:bg-red-50">
          Dashboard
        </a>

        <a className="block p-3 rounded-xl hover:bg-red-50">
          My Courses
        </a>

        <a className="block p-3 rounded-xl hover:bg-red-50">
          Progress
        </a>

        <a className="block p-3 rounded-xl hover:bg-red-50">
          Quizzes
        </a>

        <a className="block p-3 rounded-xl hover:bg-red-50">
          Certificates
        </a>

        <a className="block p-3 rounded-xl hover:bg-red-50">
          Profile
        </a>
      </nav>
    </aside>
  );
}