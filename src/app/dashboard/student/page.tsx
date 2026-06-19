"use client";

import { useEffect, useState } from "react";

type Lesson = {
  id: string;
  title: string;
  content: string;
};

type Course = {
  id: string;
  title: string;
  level: string;
  lessons: Lesson[];
};

export default function StudentDashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();

        setCourses(data);
      } catch (err) {
        console.error("Error loading courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <p className="p-6">Loading courses...</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Student Dashboard
      </h1>

      <div className="space-y-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-xl p-4 bg-white shadow"
          >
            <h2 className="text-xl font-semibold">
              {course.title}
            </h2>

            <p className="text-sm text-gray-500 mb-3">
              Level: {course.level}
            </p>

            <div className="space-y-2">
              {course.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="p-3 border rounded bg-gray-50"
                >
                  <p className="font-medium">
                    {lesson.title}
                  </p>

                  <p className="text-sm text-gray-600">
                    {lesson.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}