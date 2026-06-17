export default function Hero() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-6xl font-bold">
        Master English for School, Work and Life
      </h1>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
        Interactive lessons, quizzes, video courses and certificates designed to help learners achieve fluency in English.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-red-600 text-white px-6 py-3 rounded-xl">
          Get Started
        </button>

        <button className="border border-red-600 text-red-600 px-6 py-3 rounded-xl">
          View Courses
        </button>
      </div>
    </section>
  );
}