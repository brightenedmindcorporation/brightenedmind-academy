import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { fullName, email, password, level } = await request.json();

    if (!fullName || !email || !password || !level) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    // IMPORTANT: validate level exists in enum
    const validLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];

    if (!validLevels.includes(level)) {
      return NextResponse.json(
        { error: "Invalid level selected" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        level, // 👈 OK car Level enum
        role: "STUDENT",
        status: "PENDING",
      },
    });

    return NextResponse.json({
      success: true,
      userId: user.id,
      message: "Registration successful. Awaiting admin approval.",
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      { error: "Registration failed" },
      { status: 500 }
    );
  }
}