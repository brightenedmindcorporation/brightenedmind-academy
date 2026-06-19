import { PrismaClient, Level } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.course.create({
    data: {
      title: "English A1 Beginner",
      level: Level.A1,
      lessons: {
        create: [
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
    },
  });

  await prisma.course.create({
    data: {
      title: "English A2 Elementary",
      level: Level.A2,
      lessons: {
        create: [
          {
            title: "Daily Routine",
            content: "I wake up, I go to school, I eat breakfast...",
          },
        ],
      },
    },
  });

  console.log("Courses seeded successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });