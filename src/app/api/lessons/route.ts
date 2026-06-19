import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const lessons = await prisma.lesson.findMany({
      include: {
        course: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(lessons);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to load lessons" },
      { status: 500 }
    );
  }
}