export default function Features() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-xl">
            Video Courses
          </h3>

          <p className="mt-3 text-gray-600">
            Learn through structured English lessons.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-xl">
            Interactive Quizzes
          </h3>

          <p className="mt-3 text-gray-600">
            Test your knowledge and improve quickly.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-xl">
            Certificates
          </h3>

          <p className="mt-3 text-gray-600">
            Earn certificates after completing courses.
          </p>
        </div>
      </div>
    </section>
  );
}