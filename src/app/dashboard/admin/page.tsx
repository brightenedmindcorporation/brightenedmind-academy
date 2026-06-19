"use client";

import { useEffect, useState } from "react";

type Student = {
  id: string;
  fullName: string;
  email: string;
  status: string;
};

export default function AdminDashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);

  const loadStudents = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/admin/pending-students");
      const data = await res.json();

      if (!res.ok) {
        console.error("Failed to load students:", data);
        return;
      }

      setStudents(data);
    } catch (err) {
      console.error("Load students error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const approveStudent = async (studentId: string) => {
    try {
      const res = await fetch("/api/admin/approve-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ studentId }),
      });

      const text = await res.text();

      console.log("APPROVE STATUS:", res.status);
      console.log("APPROVE RESPONSE:", text);

      if (!res.ok) {
        console.error("Approve failed:", text);
        return;
      }

      await loadStudents();
    } catch (err) {
      console.error("Approve network error:", err);
    }
  };

  const rejectStudent = async (studentId: string) => {
    try {
      const res = await fetch("/api/admin/reject-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ studentId }),
      });

      const text = await res.text();

      console.log("REJECT STATUS:", res.status);
      console.log("REJECT RESPONSE:", text);

      if (!res.ok) {
        console.error("Reject failed:", text);
        return;
      }

      await loadStudents();
    } catch (err) {
      console.error("Reject network error:", err);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {loading && (
        <p className="mb-4">Loading students...</p>
      )}

      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="border rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">
                {student.fullName}
              </p>

              <p className="text-gray-500">
                {student.email}
              </p>

              <p>
                Status: {student.status}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => approveStudent(student.id)}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Approve
              </button>

              <button
                onClick={() => rejectStudent(student.id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}