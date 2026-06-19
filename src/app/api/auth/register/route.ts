import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      password,
      level,
    } = body;

    if (
      !fullName ||
      !email ||
      !password ||
      !level
    ) {
      return NextResponse.json(
        {
          error: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    const existingUser =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "Email already exists",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
      await prisma.user.create({
        data: {
          fullName,
          email,
          password: hashedPassword,
          level,
          role: "STUDENT",
          status: "PENDING",
        },
      });

    return NextResponse.json({
      success: true,
      userId: user.id,
      message:
        "Registration submitted. Awaiting admin approval.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Registration failed",
      },
      {
        status: 500,
      }
    );
  }
}