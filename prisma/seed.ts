import { PrismaClient, Level } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  const courses = [
    {
      level: Level.A1,
      title: "English A1 Beginner",
      lessons: [
        {
          title: "Greetings",
          content: "Hello, Hi, Good morning, Good evening",
        },
        {
          title: "Introduce Yourself",
          content: "My name is..., I am from..., I live in...",
        },
      ],
    },
    {
      level: Level.A2,
      title: "English A2 Elementary",
      lessons: [
        {
          title: "Daily Routine",
          content: "I wake up, I go to school, I eat breakfast...",
        },
        {
          title: "Talking About Time",
          content: "What time is it? It is 3 PM, I go at 8 AM...",
        },
      ],
    },
    {
      level: Level.B1,
      title: "English B1 Intermediate",
      lessons: [
        {
          title: "Past Experiences",
          content: "I went to..., I visited..., I worked...",
        },
      ],
    },
    {
      level: Level.B2,
      title: "English B2 Upper Intermediate",
      lessons: [
        {
          title: "Opinions & Arguments",
          content: "I believe that..., In my opinion...",
        },
      ],
    },
    {
      level: Level.C1,
      title: "English C1 Advanced",
      lessons: [
        {
          title: "Advanced Writing",
          content: "Essay structure, formal writing, cohesion...",
        },
      ],
    },
    {
      level: Level.C2,
      title: "English C2 Proficiency",
      lessons: [
        {
          title: "Native-Level Expression",
          content: "Idioms, nuance, complex expression...",
        },
      ],
    },
  ];

  for (const course of courses) {
    await prisma.course.create({
      data: {
        title: course.title,
        level: course.level,
        lessons: {
          create: course.lessons,
        },
      },
    });

    console.log(`✅ Seeded ${course.level}`);
  }

  console.log("🎉 Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });