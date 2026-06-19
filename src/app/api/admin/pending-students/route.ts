import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const students = await prisma.user.findMany({
      where: { status: "PENDING" },
      select: {
        id: true,
        fullName: true,
        email: true,
        status: true,
      },
    });

    return NextResponse.json(students ?? []);
  } catch (error) {
    console.error("Pending students error:", error);

    return NextResponse.json(
      { error: "Failed to load students" },
      { status: 500 }
    );
  }
}