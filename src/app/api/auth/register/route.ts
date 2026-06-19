import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, email, password, level } = body;

    if (!fullName || !email || !password || !level) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 1. check user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    // 2. find course by level (IMPORTANT FIX)
    const course = await prisma.course.findFirst({
      where: { level },
    });

    if (!course) {
      return NextResponse.json(
        { error: "Invalid level selected" },
        { status: 400 }
      );
    }

    // 3. hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. create user linked to course
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        role: "STUDENT",
        status: "PENDING",
        courseId: course.id,
      },
    });

    return NextResponse.json({
      success: true,
      userId: user.id,
      message: "Registration submitted. Awaiting admin approval.",
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      { error: "Registration failed" },
      { status: 500 }
    );
  }
}