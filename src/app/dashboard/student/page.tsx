import StudentSidebar from "@/components/dashboard/StudentSidebar";

export default function StudentDashboard() {
  return (
    <main className="flex min-h-screen bg-slate-50">
      <StudentSidebar />

      <section className="flex-1 p-10">
        <h1 className="text-4xl font-bold">
          Welcome Back
        </h1>

        <p className="text-gray-600 mt-2">
          Brightened Mind Academy Student Portal
        </p>

        {/* Student Card */}

        <div className="bg-white rounded-2xl border p-6 mt-8">
          <h2 className="text-xl font-semibold">
            Student Information
          </h2>

          <div className="mt-4 space-y-2">
            <p>
              <strong>Name:</strong> John Doe
            </p>

            <p>
              <strong>Student ID:</strong> BMA-2026-0001
            </p>

            <p>
              <strong>Current Level:</strong> A1
            </p>
          </div>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white border rounded-2xl p-6">
            <h3 className="font-semibold">
              Progress
            </h3>

            <p className="text-3xl mt-4">
              35%
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6">
            <h3 className="font-semibold">
              Points
            </h3>

            <p className="text-3xl mt-4">
              120
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6">
            <h3 className="font-semibold">
              Certificates
            </h3>

            <p className="text-3xl mt-4">
              0
            </p>
          </div>

        </div>

        {/* Continue Learning */}

        <div className="bg-white border rounded-2xl p-6 mt-8">
          <h2 className="text-xl font-semibold">
            Continue Learning
          </h2>

          <p className="mt-3 text-gray-600">
            English Fundamentals - Lesson 3
          </p>

          <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded-xl">
            Resume Course
          </button>
        </div>
      </section>
    </main>
  );
}